import json, re, subprocess

url = "https://www.homemassagekuta.com/areas/kuta"
html = subprocess.run(
    ["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
     "--hide-scrollbars", "--virtual-time-budget=9000",
     "--user-data-dir=/tmp/chrome-dup-probe", "--dump-dom", url],
    capture_output=True, text=True, timeout=120).stdout

blocks = []
for m in re.finditer(r"<script[^>]*application/ld\+json[^>]*>([\s\S]*?)</script>", html):
    try:
        blocks.append(json.loads(m.group(1)))
    except Exception as e:
        blocks.append({"PARSE_ERROR": str(e)})

print("blocks:", len(blocks))
for i, b in enumerate(blocks):
    t = b.get("@type") if isinstance(b, dict) else type(b)
    ident = b.get("@id") or b.get("name") or b.get("url") if isinstance(b, dict) else ""
    extra = ""
    if isinstance(b, dict) and b.get("priceRange"):
        extra = " priceRange=" + str(b["priceRange"])
    print(f"  [{i}] {t} id/name={str(ident)[:70]}{extra} keys={sorted(b.keys())[:6] if isinstance(b, dict) else ''}")
    print("      md5:", __import__("hashlib").md5(json.dumps(b, sort_keys=True).encode()).hexdigest()[:12])
