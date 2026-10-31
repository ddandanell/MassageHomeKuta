import re, sys, glob, os

def stats(path):
    h = open(path, encoding="utf-8").read()
    pre = re.sub(r"<script[\s\S]*?</script>", " ", h)
    m = re.search(r'<div id="root">([\s\S]*)</div>\s*<script', pre)
    body = m.group(1) if m else pre
    words = len(re.sub(r"<[^>]*>", " ", body).split())
    h2 = len(re.findall(r"<h2[ >]", body))
    h1 = len(re.findall(r"<h1[ >]", body))
    return words, h2, h1

root = sys.argv[1] if len(sys.argv) > 1 else "dist"
files = sorted(glob.glob(os.path.join(root, "blog", "*", "index.html")))
for f in files:
    w, h2, h1 = stats(f)
    print(f"{w:5d} words  h2={h2:2d} h1={h1}  /{os.path.relpath(os.path.dirname(f), root)}")
worst = min(files, key=lambda f: stats(f)[0])
print("min:", os.path.relpath(os.path.dirname(worst), root), stats(worst))
