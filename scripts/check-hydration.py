import re, subprocess, sys

def dom(url):
    return subprocess.run(
        ["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
         "--hide-scrollbars", "--virtual-time-budget=8000",
         "--user-data-dir=/tmp/chrome-hydration-check", "--dump-dom", url],
        capture_output=True, text=True, timeout=120).stdout

def stats(h):
    m = re.search(r'<div id="root">([\s\S]*)</div>\s*<script', h)
    body = m.group(1) if m else h
    words = len(re.sub(r"<[^>]*>", " ", body).split())
    return words, body.count("<h2"), body.count("<h1>")

base = "https://www.homemassagekuta.com"
for p in sys.argv[1:]:
    pre = subprocess.run(["curl", "-s", "-m", "30", base + p], capture_output=True, text=True).stdout
    post = dom(base + p)
    a, b = stats(pre), stats(post)
    ratio = round(b[0] / a[0], 2) if a[0] else 0
    print(f"{p:45s} pre-JS={a[0]:5d}w h2={a[1]:2d}  post-JS={b[0]:5d}w h2={b[1]:2d}  post/pre={ratio}")
