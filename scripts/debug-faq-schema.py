import json, re, sys
sys.path.insert(0, ".")

doc = json.load(open("seo/prerender.json"))
page = [p for p in doc["pages"] if p["path"] == "/faq"][0]
for j in page["jsonLd"]:
    if "LocalBusiness" in j:
        d = json.loads(j)
        print("keys:", sorted(d.keys()))
        print("priceRange:", d.get("priceRange"))
        print("has @graph:", "@graph" in d)
        print("raw head:", j[:300])
