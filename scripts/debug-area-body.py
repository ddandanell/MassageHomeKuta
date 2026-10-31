import re, subprocess

url = "http://127.0.0.1:4177/areas/kuta"
html = subprocess.run(
    ["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
     "--hide-scrollbars", "--virtual-time-budget=9000",
     "--user-data-dir=/tmp/chrome-area-debug3", "--dump-dom", url],
    capture_output=True, text=True, timeout=120).stdout

open("/tmp/area.html", "w").write(html)
w = lambda h: len(re.sub(r"<[^>]*>", " ", h).split())
print("bytes", len(html), "main tags", html.count("<main"), "h2", len(re.findall(r"<h2[ >]", html)))

m = re.search(r'<div id="root">([\s\S]*)</div>\s*<script', html)
root = m.group(1) if m else ""
print("root words (post-JS, as rendered):", w(root))

s = re.search(r"<main\b", html, re.I)
if s:
    e = html.rfind("</main>")
    inner = html[html.index(">", s.start()) + 1:e]
    print("main words:", w(inner))
else:
    print("no <main> in dumped DOM")
