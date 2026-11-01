import { useParams, Link, Navigate } from "react-router-dom";
import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { blogArticles } from "@/data/blog-articles";

const waUrl = (message: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

const BlogArticlePage = () => {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/blog" replace />;

  const url = `${SITE_CONFIG.url}/blog/${article.slug}`;
  const breadcrumbData = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_CONFIG.url}/blog` },
    { "@type": "ListItem", position: 3, name: article.title, item: url },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `${SITE_CONFIG.url}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: { "@type": "Organization", name: SITE_CONFIG.name },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/logo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const faqSchema = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const related = blogArticles
    .filter((a) => a.slug !== article.slug)
    .filter((a) => (article.related || []).includes(a.slug))
    .slice(0, 3);
  const fallback = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const relatedArticles = related.length ? related : fallback;

  return (
    <div className="min-h-screen">
      <SiteMeta
        title={article.metaTitle}
        description={article.description}
        keywords={`${article.keyword}, home massage kuta, massage kuta bali`}
        canonical={`/blog/${article.slug}`}
        ogType="article"
        ogImage={`${SITE_CONFIG.url}${article.image}`}
      />
      <StructuredData type="organization" />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <Header />

      <main>
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-professional-green via-emerald-600 to-teal-700 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" /> All guides
            </Link>
            <p className="text-sm uppercase tracking-wide text-white/80 mb-3">{article.category}</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">{article.title}</h1>
            <p className="text-lg text-white/90 mb-6">{article.excerpt}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-white/85">
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" /> {article.readMinutes} min read
              </span>
              <span>
                Updated{" "}
                {new Date(article.dateModified || article.datePublished).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            {article.image && (
              <figure className="mb-10">
                <img
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  width={1200}
                  height={675}
                  loading="eager"
                  className="w-full rounded-2xl shadow-lg object-cover aspect-video"
                />
              </figure>
            )}
            <p className="text-lg text-spa-stone leading-relaxed mb-8">{article.intro}</p>
            {article.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-spa-earth mb-4">{section.h2}</h2>
                <div
                  className="prose prose-lg max-w-none text-spa-stone prose-headings:text-spa-earth prose-a:text-professional-green prose-img:rounded-xl prose-img:shadow-md"
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              </section>
            ))}

            {article.faqs?.length ? (
              <section className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-spa-earth mb-4">Frequently asked questions</h2>
                <div className="space-y-4">
                  {article.faqs.map((f, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-semibold text-spa-earth mb-2">{f.q}</h3>
                      <p className="text-spa-stone">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="mt-12 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 p-8 text-center">
              <h2 className="text-2xl font-bold text-spa-earth mb-3">Book a massage at your villa or hotel</h2>
              <p className="text-spa-stone mb-6">
                Planning a massage at your villa or hotel? Message us on WhatsApp to confirm
                availability, location, equipment and current booking details.
              </p>
              <a
                href={waUrl(`Hi! I read your guide "${article.title}" and I'd like to book a massage in Kuta.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-professional-green hover:bg-emerald-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" /> Check availability on WhatsApp
                </Button>
              </a>
            </div>

            {relatedArticles.length ? (
              <div className="mt-14">
                <h2 className="text-2xl font-bold text-spa-earth mb-6">More massage guides</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedArticles.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/blog/${r.slug}`}
                      className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      {r.image && (
                        <img
                          src={r.image}
                          alt={r.imageAlt || r.title}
                          width={1200}
                          height={675}
                          loading="lazy"
                          className="w-full h-40 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-spa-earth mb-2">{r.title}</h3>
                        <p className="text-sm text-spa-stone">{r.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </article>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default BlogArticlePage;
