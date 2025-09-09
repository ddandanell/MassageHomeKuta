import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Clock, Calendar, Users, Timer } from "lucide-react";
import { useState } from "react";

const BookingForm = () => {
  const [bookingType, setBookingType] = useState("asap");
  const [people, setPeople] = useState("1");
  const [duration, setDuration] = useState("60");
  const whatsappNumber = "+62 811-2656-869";

  const handleSubmit = () => {
    const form = document.getElementById('booking-form') as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const requests = formData.get('requests') as string;
    
    let message = `🏠 *Home Massage Kuta - New Booking Request*\n\n`;
    message += `👤 *Name:* ${name}\n`;
    message += `📱 *Phone:* ${phone}\n`;
    message += `📍 *Address:* ${address}\n`;
    message += `👥 *People:* ${people}\n`;
    message += `⏰ *Duration:* ${duration} minutes\n`;
    
    if (bookingType === "schedule" && date && time) {
      message += `📅 *Preferred Date:* ${date}\n`;
      message += `🕐 *Preferred Time:* ${time}\n`;
    } else {
      message += `⚡ *Timing:* ASAP (Next Available)\n`;
    }
    
    if (requests) {
      message += `💬 *Special Requests:* ${requests}\n`;
    }
    
    message += `\nPlease confirm availability and provide directions. Thank you!`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-professional-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
            Book via WhatsApp
          </h2>
          <p className="text-xl text-professional-gray max-w-2xl mx-auto">
            Confirm your details and we'll message you back to confirm your booking.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-subtle border-0 shadow-floating">
            <CardHeader>
              <CardTitle className="text-2xl text-professional-navy text-center">Quick Booking</CardTitle>
              <CardDescription className="text-professional-gray text-center">
                Fill out this form and we'll contact you via WhatsApp within minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
            <form id="booking-form" className="space-y-6">
              {/* Timing Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-professional-navy">When would you like your massage?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant={bookingType === "asap" ? "accent" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 ${
                      bookingType === "asap" ? "" : "text-professional-navy border-professional-navy"
                    }`}
                    onClick={() => setBookingType("asap")}
                  >
                    <Clock className="w-5 h-5" />
                    <div className="text-center">
                      <div className="font-semibold">ASAP</div>
                      <div className="text-xs opacity-80">Next Available</div>
                    </div>
                  </Button>
                  <Button
                    variant={bookingType === "schedule" ? "accent" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 ${
                      bookingType === "schedule" ? "" : "text-professional-navy border-professional-navy"
                    }`}
                    onClick={() => setBookingType("schedule")}
                  >
                    <Calendar className="w-5 h-5" />
                    <div className="text-center">
                      <div className="font-semibold">Schedule</div>
                      <div className="text-xs opacity-80">Pick Date & Time</div>
                    </div>
                  </Button>
                </div>
                
                {bookingType === "schedule" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input type="date" id="date" name="date" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select name="time">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border shadow-floating z-50">
                          <SelectItem value="07:00">7:00 AM</SelectItem>
                          <SelectItem value="08:00">8:00 AM</SelectItem>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="19:00">7:00 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                          <SelectItem value="21:00">9:00 PM</SelectItem>
                          <SelectItem value="22:00">10:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-professional-navy">Your Details</h3>
                
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Enter your full name"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone/WhatsApp Number *</Label>
                  <Input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    placeholder="+62 or your country code"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Villa Name/Address in Kuta *</Label>
                  <Input 
                    type="text" 
                    id="address"
                    name="address" 
                    placeholder="Villa name or full address"
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-professional-navy">Booking Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Number of People</Label>
                    <Select value={people} onValueChange={setPeople}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-background border shadow-floating z-50">
                        <SelectItem value="1">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            1 person
                          </div>
                        </SelectItem>
                        <SelectItem value="2">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            2 people (couple)
                          </div>
                        </SelectItem>
                        <SelectItem value="3">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            3 people
                          </div>
                        </SelectItem>
                        <SelectItem value="4">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            4+ people (family)
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Duration</Label>
                    <Select value={duration} onValueChange={setDuration}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-background border shadow-floating z-50">
                        <SelectItem value="60">
                          <div className="flex items-center gap-2">
                            <Timer className="w-4 h-4" />
                            1 hour
                          </div>
                        </SelectItem>
                        <SelectItem value="90">
                          <div className="flex items-center gap-2">
                            <Timer className="w-4 h-4" />
                            1.5 hours
                          </div>
                        </SelectItem>
                        <SelectItem value="120">
                          <div className="flex items-center gap-2">
                            <Timer className="w-4 h-4" />
                            2 hours
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Requests */}
              <div className="space-y-4">
                <Label htmlFor="requests" className="text-base font-semibold">Additional Requests (Optional)</Label>
                <Textarea
                  id="requests"
                  name="requests"
                  placeholder="What treatment would you like? You can also add preferences for pressure, focus areas, etc."
                  className="min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button type="button" onClick={handleSubmit} variant="whatsapp" size="lg" className="w-full text-lg py-4">
                <MessageCircle className="w-5 h-5" />
                Send Booking Request
              </Button>
            </form>

            <p className="text-center text-sm text-professional-gray mt-4">
              We'll respond within 5-15 minutes to confirm availability and provide directions.
            </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;