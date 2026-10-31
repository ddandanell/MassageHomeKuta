import re, subprocess, sys

def dom(url, size):
    return subprocess.run(
        ["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
         "--hide-scrollbars", "--window-size=" + size, "--virtual-time-budget=10000",
         "--user-data-dir=/tmp/chrome-viewport-probe", "--dump-dom", url],
        capture_output=True, text=True, timeout=180).stdout

def words(h):
    m = re.search(r'<div id="root">([\s\S]*)</div>\s*<script', h)
    body = m.group(1) if m else h
    return len(re.sub(r"<[^>]*>", " ", body).split())

base = "https://www.homemassagekuta.com"
for p in sys.argv[1:]:
    line = [p]
    for size in ["1280,900", "1280,4000", "1280,12000"]:
        line.append(f"{size}:{words(dom(base + p, size))}w")
    print("  ".join(line))
