import json, re, subprocess, hashlib

url = "https://www.homemassagekuta.com/faq"
html = subprocess.run(
    ["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
     "--hide-scrollbars", "--virtual-time-budget=9000",
     "--user-data-dir=/tmp/chrome-faq-probe", "--dump-dom", url],
    capture_output=True, text=True, timeout=120).stdout

for i, m in enumerate(re.finditer(r"<script[^>]*application/ld\+json[^>]*>([\s\S]*?)</script>", html)):
    try:
        b = json.loads(m.group(1))
    except Exception as e:
        print(i, "parse error", e)
        continue
    if b.get("@type") != "LocalBusiness":
        continue
    print(i, "keys", len(b), "priceRange", b.get("priceRange"), "md5", hashlib.md5(json.dumps(b, sort_keys=True).encode()).hexdigest()[:8])
    print("   ", json.dumps(b, sort_keys=True)[:400])
