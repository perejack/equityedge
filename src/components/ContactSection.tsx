import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have questions or ready to explore the opportunities at Equity Edge Ltd? We're 
              here to connect. Our dedicated team is ready to assist you on your journey to prop 
              trading success. Drop us a message below, and we'll get back to you promptly. Your 
              path to financial independence looks forward to meeting you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Fast Response Time</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Expert Trading Guidance</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-glow bg-card border-primary/20 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Let's Fill Your Details</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter First Name"
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter Last Name"
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message here..."
                    rows={4}
                    className="bg-background border-primary/20 focus:border-primary resize-none"
                  />
                </div>
                <Button variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;