import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/Reveal";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/contact@poornashiksha.com";

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
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

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
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Couldn't send message right now. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-shell">
      <section className="section-alt section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Contact</p>
            <h1 className="section-heading">Get in Touch</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-foreground">
              We'd love to hear from you. Whether you want to support, volunteer, or simply learn more about our work
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal className="lg:sticky lg:top-28">
              <div className="panel-card p-6 md:p-8">
                <h2 className="text-4xl font-black text-foreground">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      required
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      required
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how you'd like to help or what you'd like to know..."
                      value={formData.message}
                      required
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[190px] w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-6">
              <div className="panel-card p-6 md:p-8">
                <h2 className="text-4xl font-black text-foreground">Other Ways to Reach Us</h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-surface2 p-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Email</h3>
                        <p className="mt-1 text-muted-foreground">contact@poornashiksha.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-surface2 p-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Location</h3>
                        <p className="mt-1 text-muted-foreground">Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surfaceAccent p-6 shadow-sm md:p-8">
                <h3 className="text-3xl font-black text-foreground">Want to Visit?</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We welcome visitors who are genuinely interested in learning about our work or exploring ways to support.
                  Please reach out in advance so we can arrange a suitable time that doesn't disrupt the children's learning.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="mx-auto mt-8 max-w-6xl rounded-2xl border border-border bg-surfaceAccent p-6 shadow-sm md:p-8">
            <h3 className="text-3xl font-black text-foreground">Looking to Volunteer?</h3>
            <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
              We occasionally welcome volunteers who can contribute their time and skills, whether it's teaching,
              organizing activities, or helping with outings. Let us know your interests and availability!
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
