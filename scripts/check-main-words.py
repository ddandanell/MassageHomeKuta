import re, subprocess, sys

def dom(url):
    return subprocess.run(
        ["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
         "--hide-scrollbars", "--virtual-time-budget=10000",
         "--user-data-dir=/tmp/chrome-main-check", "--dump-dom", url],
        capture_output=True, text=True, timeout=180).stdout

w = lambda h: len(re.sub(r"<[^>]*>", " ", h).split())

base = "https://www.homemassagekuta.com"
for p in sys.argv[1:]:
    h = dom(base + p)
    s = re.search(r"<main\b", h, re.I)
    if s:
        e = h.rfind("</main>")
        inner = h[h.index(">", s.start()) + 1:e]
        print(f"{p:40s} post-JS <main> words={w(inner):5d} h2={len(re.findall(r'<h2[ >]', inner))}")
    else:
        print(f"{p:40s} no <main> post-JS; root words={w(h):5d}")
