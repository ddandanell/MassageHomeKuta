import json, re, subprocess, collections

routes = ["/", "/faq", "/areas/kuta", "/therapists", "/blog/couples-massage-kuta-guide"]
base = "http://127.0.0.1:4178"

for route in routes:
    html = subprocess.run(
        ["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
         "--hide-scrollbars", "--virtual-time-budget=9000",
         "--user-data-dir=/tmp/chrome-dedupe-check", "--dump-dom", base + route],
        capture_output=True, text=True, timeout=120).stdout
    types = collections.Counter()
    for raw in re.findall(r"<script[^>]*application/ld\+json[^>]*>([\s\S]*?)</script>", html):
        try:
            b = json.loads(raw)
        except Exception:
            types["INVALID"] += 1
            continue
        for blk in (b if isinstance(b, list) else [b]):
            if isinstance(blk, dict):
                t = blk.get("@type")
                types[",".join(t) if isinstance(t, list) else str(t)] += 1
    dups = {k: v for k, v in types.items() if v > 1}
    print(route, "blocks:", sum(types.values()), "types:", dict(types), "DUPS:", dups or "none")
