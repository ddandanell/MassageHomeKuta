import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Clock, Calendar, Users, Timer, MapPin, CreditCard, Info, Star, Sparkles } from "lucide-react";
import { useState, ReactNode } from "react";
import { SITE_CONFIG } from "@/config/site";

interface EnhancedBookingDialogProps {
  trigger: ReactNode;
  triggerClassName?: string;
}

const massageTypes = [
  { id: "balinese", name: "Traditional Balinese Massage", price: "350K-650K", popular: true },
  { id: "deep-tissue", name: "Deep Tissue Massage", price: "400K-700K", popular: true },
  { id: "aromatherapy", name: "Aromatherapy Massage", price: "350K-650K", popular: false },
  { id: "lymphatic", name: "Lymphatic Drainage", price: "450K-850K", popular: false },
  { id: "thai", name: "Thai Massage", price: "450K-850K", popular: false },
  { id: "four-hands", name: "Four Hands Massage", price: "600K-1100K", popular: true },
  { id: "hot-stone", name: "Hot Stone Massage", price: "500K-900K", popular: false },
  { id: "couples", name: "Couples Massage", price: "700K-1300K", popular: true },
  { id: "prenatal", name: "Prenatal Massage", price: "400K-600K", popular: false },
  { id: "foot-reflexology", name: "Foot Reflexology", price: "250K-350K", popular: false },
];

const durations = [
  { value: "60", label: "60 Minutes", popular: true },
  { value: "90", label: "90 Minutes", popular: true },
  { value: "120", label: "120 Minutes", popular: false },
  { value: "150", label: "150 Minutes", popular: false },
  { value: "180", label: "180 Minutes (3 Hours)", popular: false },
];

const serviceAreas = [
  "Kuta", "Seminyak", "Legian", "Canggu", "Jimbaran", "Nusa Dua",
  "Sanur", "Denpasar", "Ubud", "Uluwatu", "Pecatu", "Other"
];

const EnhancedBookingDialog = ({ trigger, triggerClassName }: EnhancedBookingDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingType, setBookingType] = useState("asap");
  const [selectedMassage, setSelectedMassage] = useState("");
  const [duration, setDuration] = useState("90");
  const [peopleCount, setPeopleCount] = useState("1");
  const [selectedArea, setSelectedArea] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof window === 'undefined') return;
    
    const formData = new FormData(e.target as HTMLFormElement);

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const address = formData.get('address') as string;
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const notes = formData.get('notes') as string;

    if (!name || !phone || !address || !selectedMassage || !selectedArea) {
      alert('Please fill in all required fields');
      return;
    }

    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    const selectedMassageInfo = massageTypes.find(m => m.id === selectedMassage);
    const selectedDurationInfo = durations.find(d => d.value === duration);

    let message = `🌺 *HOME MASSAGE KUTA - BOOKING REQUEST* 🌺\n\n`;
    message += `👤 *Client Information:*\n`;
    message += `• Name: ${name}\n`;
    message += `• Phone: ${phone}\n`;
    message += `• Email: ${email}\n\n`;

    message += `🏠 *Service Details:*\n`;
    message += `• Location: ${address}\n`;
    message += `• Area: ${selectedArea}\n`;
    message += `• Treatment: ${selectedMassageInfo?.name}\n`;
    message += `• Duration: ${selectedDurationInfo?.label}\n`;
    message += `• People: ${peopleCount} ${parseInt(peopleCount) > 1 ? 'people' : 'person'}\n`;
    message += `• Price Range: IDR ${selectedMassageInfo?.price}\n\n`;

    if (bookingType === "schedule" && date && time) {
      message += `📅 *Preferred Schedule:*\n`;
      message += `• Date: ${date}\n`;
      message += `• Time: ${time}\n\n`;
    } else {
      message += `⚡ *Timing:* ASAP (Next Available Slot)\n\n`;
    }

    if (notes) {
      message += `💬 *Special Notes:* ${notes}\n\n`;
    }

    message += `🔔 *Next Steps:*\n`;
    message += `We'll confirm availability within 15 minutes and provide:\n`;
    message += `• Exact pricing\n`;
    message += `• Therapist details\n`;
    message += `• Arrival time\n`;
    message += `• Payment options\n\n`;
    message += `Thank you for choosing Home Massage Kuta! 🙏`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={triggerClassName}>
          {trigger}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-professional-navy to-professional-gold text-white">
          <DialogTitle className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            Book Your Perfect Massage
          </DialogTitle>
          <DialogDescription className="text-white/90 text-base">
            Professional spa treatments delivered to your villa, hotel, or home in Kuta & surrounding areas
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <Card className="border-professional-gold/20">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-4 text-professional-navy flex items-center gap-2">
                <Users className="h-5 w-5" />
                Your Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className="border-professional-gold/30 focus:border-professional-gold"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+62 or international number"
                    className="border-professional-gold/30 focus:border-professional-gold"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com (optional)"
                    className="border-professional-gold/30 focus:border-professional-gold"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <Card className="border-professional-gold/20">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-4 text-professional-navy flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="area">Area/District *</Label>
                  <Select value={selectedArea} onValueChange={setSelectedArea} required>
                    <SelectTrigger className="border-professional-gold/30 focus:border-professional-gold">
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceAreas.map((area) => (
                        <SelectItem key={area} value={area}>{area}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Complete Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Villa/hotel name, street address, landmarks, and any access instructions..."
                    className="border-professional-gold/30 focus:border-professional-gold min-h-[80px]"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Selection */}
          <Card className="border-professional-gold/20">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-4 text-professional-navy flex items-center gap-2">
                <Star className="h-5 w-5" />
                Choose Your Treatment
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="massage-type">Massage Type *</Label>
                  <Select value={selectedMassage} onValueChange={setSelectedMassage} required>
                    <SelectTrigger className="border-professional-gold/30 focus:border-professional-gold">
                      <SelectValue placeholder="Select massage type" />
                    </SelectTrigger>
                    <SelectContent>
                      {massageTypes.map((massage) => (
                        <SelectItem key={massage.id} value={massage.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{massage.name}</span>
                            {massage.popular && (
                              <span className="text-professional-gold text-xs ml-2">★ POPULAR</span>
                            )}
                            <span className="text-professional-gray text-sm ml-auto">IDR {massage.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration *</Label>
                    <Select value={duration} onValueChange={setDuration} required>
                      <SelectTrigger className="border-professional-gold/30 focus:border-professional-gold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {durations.map((dur) => (
                          <SelectItem key={dur.value} value={dur.value}>
                            {dur.label} {dur.popular && "⭐"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="people">Number of People *</Label>
                    <Select value={peopleCount} onValueChange={setPeopleCount} required>
                      <SelectTrigger className="border-professional-gold/30 focus:border-professional-gold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People (Couples)</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                        <SelectItem value="5+">5+ People (Group)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timing Preferences */}
          <Card className="border-professional-gold/20">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-4 text-professional-navy flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Preferred Timing
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="asap"
                      checked={bookingType === "asap"}
                      onChange={(e) => setBookingType(e.target.value)}
                      className="text-professional-gold focus:ring-professional-gold"
                    />
                    <span className="text-sm font-medium">ASAP (Next Available)</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="schedule"
                      checked={bookingType === "schedule"}
                      onChange={(e) => setBookingType(e.target.value)}
                      className="text-professional-gold focus:ring-professional-gold"
                    />
                    <span className="text-sm font-medium">Schedule for Later</span>
                  </label>
                </div>

                {bookingType === "schedule" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        type="date"
                        id="date"
                        name="date"
                        className="border-professional-gold/30 focus:border-professional-gold"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select name="time">
                        <SelectTrigger className="border-professional-gold/30 focus:border-professional-gold">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="07:00">07:00</SelectItem>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                          <SelectItem value="19:00">19:00</SelectItem>
                          <SelectItem value="20:00">20:00</SelectItem>
                          <SelectItem value="21:00">21:00</SelectItem>
                          <SelectItem value="22:00">22:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Special Requests or Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Any health conditions, preferences, allergies, or special requests we should know about..."
              className="border-professional-gold/30 focus:border-professional-gold min-h-[80px]"
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="terms" className="text-sm leading-relaxed">
              I agree to the terms and conditions. I understand that booking confirmation and final pricing will be provided via WhatsApp within 15 minutes. Cancellations must be made at least 2 hours before the scheduled time. *
            </Label>
          </div>

          {/* Booking Info */}
          <Card className="bg-professional-light/50 border-professional-gold/30">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-professional-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-professional-navy">
                  <p className="font-semibold mb-2">What happens next:</p>
                  <ul className="space-y-1 text-professional-gray">
                    <li>• Instant confirmation via WhatsApp within 15 minutes</li>
                    <li>• We'll provide exact pricing and therapist details</li>
                    <li>• Payment options: Cash, bank transfer, or digital payment</li>
                    <li>• Our therapist will arrive with all equipment needed</li>
                    <li>• 100% professional, licensed, and insured service</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-professional-navy to-professional-gold hover:from-professional-gold hover:to-professional-navy text-white font-semibold py-3 text-lg transition-all duration-300"
            disabled={!agreedToTerms}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Send Booking Request via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedBookingDialog;
