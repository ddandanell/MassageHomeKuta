import json, re, subprocess, sys

url = sys.argv[1] if len(sys.argv) > 1 else "https://www.homemassagekuta.com/faq"
html = subprocess.run(
    ["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
     "--hide-scrollbars", "--virtual-time-budget=9000",
     "--user-data-dir=/tmp/chrome-block-probe", "--dump-dom", url],
    capture_output=True, text=True, timeout=120).stdout

scripts = re.findall(r"<script[^>]*application/ld\+json[^>]*>([\s\S]*?)</script>", html)
print("scripts found:", len(scripts))
for i, raw in enumerate(scripts):
    try:
        b = json.loads(raw)
    except Exception as e:
        print(i, "PARSE ERROR", e)
        continue
    blocks = b if isinstance(b, list) else [b]
    for blk in blocks:
        if not isinstance(blk, dict):
            print(i, "non-dict", blk)
            continue
        print(i, blk.get("@type"), "| @id:", blk.get("@id"), "| priceRange:", blk.get("priceRange"),
              "| keys:", len(blk))
