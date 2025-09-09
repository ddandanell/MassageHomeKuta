import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import baliMassage from "@/assets/balinese-massage.jpg";

const SignatureMassages = () => {
  return (
    <section className="py-20 bg-professional-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
            Our Signature Massages in Kuta
          </h2>
          <p className="text-xl text-professional-gray max-w-4xl mx-auto leading-relaxed">
            Every traveler comes to Kuta with a different story. Some arrive for the waves and spend their days 
            surfing under the tropical sun. Others come for the nightlife, enjoying late hours of dancing and music. 
            Many simply want a place to escape, relax, and recharge. That's why our signature home massage services 
            in Kuta are designed to meet every need, from deep recovery to gentle relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-professional-navy">Balinese Massage</CardTitle>
              <CardDescription className="text-professional-gray text-base">
                The timeless tradition of Bali, using long strokes, acupressure, and aromatherapy oils. 
                This is the massage that put Bali on the wellness map, and nothing feels more authentic 
                than receiving it in the comfort of your villa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="accent" className="w-full"><a href="#booking">Book Balinese Massage</a></Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-professional-navy">Deep Tissue Massage</CardTitle>
              <CardDescription className="text-professional-gray text-base">
                Perfect for surfers, athletes, or anyone carrying stress in their body. This massage works 
                into the deeper muscle layers, easing tension and restoring mobility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="accent" className="w-full"><a href="#booking">Book Deep Tissue</a></Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-professional-navy">Aromatherapy Massage</CardTitle>
              <CardDescription className="text-professional-gray text-base">
                Essential oils combined with gentle massage techniques to soothe both body and mind. 
                Ideal for anyone wanting calm after a busy day in Kuta's buzzing streets.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="accent" className="w-full"><a href="#booking">Book Aromatherapy</a></Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-professional-navy">Thai Massage at Home</CardTitle>
              <CardDescription className="text-professional-gray text-base">
                Stretching, twisting, and pressure points, all delivered on a mat in your villa. 
                Great for boosting circulation and energy flow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="accent" className="w-full"><a href="#booking">Book Thai Massage</a></Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-professional-navy">Hot Stone Ritual</CardTitle>
              <CardDescription className="text-professional-gray text-base">
                Warm volcanic stones applied along the body, melting away stress and grounding you deeply. 
                A spa luxury, recreated right at your home.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="accent" className="w-full"><a href="#booking">Book Hot Stone</a></Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-professional-navy">Lymphatic Drainage</CardTitle>
              <CardDescription className="text-professional-gray text-base">
                Gentle techniques to support natural detoxification and reduce swelling. 
                Perfect for post-flight recovery and overall wellness.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="accent" className="w-full"><a href="#booking">Book Lymphatic Drainage</a></Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 shadow-floating max-w-4xl mx-auto">
            <p className="text-lg text-professional-gray leading-relaxed mb-6">
              Each treatment is available in 60-minute or 90-minute sessions, and you can even combine styles 
              for a customized experience. Our therapists bring all equipment, so all you need to do is open 
              the door, relax, and enjoy.
            </p>
            <p className="text-lg font-semibold text-professional-navy">
              By offering a full menu of signature massages in Kuta, we make sure there's always a treatment 
              perfectly matched to your body, your mood, and your schedule — without leaving your villa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureMassages;