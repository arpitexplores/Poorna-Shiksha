import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin } from "lucide-react";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/arpit.singla@yahoo.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (website) {
      // Honeypot field: silently ignore likely bot submissions.
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Basic validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "New message from Poorna Shiksha website"
        })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.success("Message sent successfully. We'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch {
      toast.error("Couldn't send message right now. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
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
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                      Your Name
                    </label>
                    <Input id="name" type="text" placeholder="Enter your name" value={formData.name} required onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                      Your Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} required onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                      Your Message
                    </label>
                    <Textarea id="message" placeholder="Tell us how you'd like to help or what you'd like to know..." value={formData.message} required onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} className="w-full min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                      <p className="text-muted-foreground">arpit.singla@yahoo.com</p>
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
