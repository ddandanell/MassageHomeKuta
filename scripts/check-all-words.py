import re, sys, glob, os

def stats(path):
    h = open(path, encoding="utf-8").read()
    pre = re.sub(r"<script[\s\S]*?</script>", " ", h)
    m = re.search(r'<div id="root">([\s\S]*)</div>\s*<script', pre)
    body = m.group(1) if m else pre
    words = len(re.sub(r"<[^>]*>", " ", body).split())
    return words, len(re.findall(r"<h2[ >]", body)), len(re.findall(r"<h1[ >]", body))

root = sys.argv[1] if len(sys.argv) > 1 else "dist"
rows = []
for f in glob.glob(os.path.join(root, "**", "index.html"), recursive=True):
    route = "/" + os.path.relpath(os.path.dirname(f), root).replace("\\", "/")
    if route == "/.":
        route = "/"
    rows.append((stats(f)[0], stats(f)[1], route))
rows.sort()
print("thinnest 25 pre-JS routes:")
for w, h2, r in rows[:25]:
    print(f"{w:5d} words  h2={h2:2d}  {r}")
print("total pages:", len(rows))
buckets = {"<150": 0, "150-300": 0, "300-600": 0, "600+": 0}
for w, _, _ in rows:
    if w < 150: buckets["<150"] += 1
    elif w < 300: buckets["150-300"] += 1
    elif w < 600: buckets["300-600"] += 1
    else: buckets["600+"] += 1
print(buckets)
