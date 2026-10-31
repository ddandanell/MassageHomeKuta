import re, subprocess, sys

def fetch(url):
    return subprocess.run(["curl", "-s", "-m", "30", url], capture_output=True, text=True).stdout

def stats(h):
    pre = re.sub(r"<script[\s\S]*?</script>", " ", h)
    m = re.search(r'<div id="root">([\s\S]*)</div>\s*<script', pre)
    b = m.group(1) if m else pre
    return (
        len(re.sub(r"<[^>]*>", " ", b).split()),
        len(re.findall(r"<h2[ >]", b)),
        len(re.findall(r"<h1[ >]", b)),
        len(h),
    )

base = "https://www.homemassagekuta.com"
paths = sys.argv[1:] or ["/", "/blog/massage-kuta-bali-price-guide"]
for p in paths:
    h = fetch(base + p)
    w, h2, h1, size = stats(h)
    print(f"{p:55s} words={w:5d} h2={h2:2d} h1={h1} bytes={size}")
