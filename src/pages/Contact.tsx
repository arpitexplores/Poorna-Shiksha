import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // In a real implementation, you would send this to a backend or email service
    console.log("Form submitted:", formData);
    toast.success("Thank you for reaching out! We'll get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Whether you want to support, volunteer, or simply learn more about our work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                      Your Name
                    </label>
                    <Input id="name" type="text" placeholder="Enter your name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                      Your Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                      Your Message
                    </label>
                    <Textarea id="message" placeholder="Tell us how you'd like to help or what you'd like to know..." value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} className="w-full min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@poornashiksha.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-3">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Want to Visit?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We welcome visitors who are genuinely interested in learning about our work or exploring ways to support.
                  Please reach out in advance so we can arrange a suitable time that doesn't disrupt the children's learning.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-3">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Looking to Volunteer?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We occasionally welcome volunteers who can contribute their time and skills—whether it's teaching,
                  organizing activities, or helping with outings. Let us know your interests and availability!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;