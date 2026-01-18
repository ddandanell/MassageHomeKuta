import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPlugModule = () => {
  const featuredPosts = [
    {
      title: "How Much Does a Massage Cost in Kuta, Bali?",
      excerpt: "Complete 2026 pricing guide with verified rates for all massage types in Kuta.",
      slug: "/blog/massage-kuta-bali-price-guide"
    },
    {
      title: "How to Book a Massage via WhatsApp",
      excerpt: "Step-by-step booking process from first contact to therapist arrival at your villa.",
      slug: "/blog/how-to-book-massage-kuta-whatsapp"
    },
    {
      title: "What to Expect from Your First Home Massage",
      excerpt: "Complete first-timer guide covering setup, privacy, tipping, and cultural considerations.",
      slug: "/blog/first-home-massage-kuta-what-to-expect"
    },
    {
      title: "Best Massage for Jet Lag Recovery",
      excerpt: "Optimal massage choices for travel fatigue and long flight recovery in Bali.",
      slug: "/blog/best-massage-jet-lag-recovery-kuta"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-professional-green/10 px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-5 h-5 text-professional-green" />
              <span className="text-sm font-semibold text-professional-green">Expert Guides</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-4">
              Kuta Massage Guides & Expert Tips
            </h2>
            <p className="text-lg text-spa-stone max-w-3xl mx-auto">
              New to Kuta or home massage? Our expert guides answer your questions about booking, 
              pricing, massage types, and what to expect from your first in-villa massage experience.
            </p>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-professional-green/20 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-spa-earth">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-spa-stone">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={post.slug}>
                    <Button variant="link" className="text-professional-green p-0 h-auto font-semibold">
                      Read Guide <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Guides CTA */}
          <div className="text-center">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View All Kuta Massage Guides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPlugModule;
