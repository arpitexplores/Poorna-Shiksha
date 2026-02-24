import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Palette, Bus, Apple, Heart, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const Support = () => {
  const needsItems = [
    {
      icon: BookOpen,
      title: "Books & Supplies",
      description: "Storybooks, workbooks, stationery, and learning materials",
      amount: "₹500-2000"
    },
    {
      icon: Palette,
      title: "Art Materials",
      description: "Paints, crayons, craft supplies for creative activities",
      amount: "₹300-1000"
    },
    {
      icon: Bus,
      title: "Educational Trips",
      description: "Transportation and entry fees for zoo, museum, garden visits",
      amount: "₹200-500 per child"
    },
    {
      icon: Apple,
      title: "Snacks & Meals",
      description: "Healthy snacks and occasional meals for the children",
      amount: "₹100-300 per day"
    },
  ];

  return (
    <div className="page-shell">
      <section className="section-alt section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Heart className="text-primary" size={28} />
            </div>
            <h1 className="mt-0 text-3xl font-black text-foreground md:text-5xl">Support Our Mission</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-foreground">
              Your generosity helps provide quality education and meaningful experiences to underprivileged children
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <Reveal className="text-center">
            <h2 className="text-3xl font-black text-foreground md:text-4xl">How Your Support Helps</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
            {needsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                  className={`feature-card ${index % 2 === 0 ? "md:translate-y-3" : "md:-translate-y-3"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      <p className="mt-2 text-sm font-bold text-primary">{item.amount}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-accent section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-2xl border border-border bg-card p-7 shadow-md md:grid-cols-2 md:p-10">
            <Reveal className="space-y-5 text-center md:text-left">
              <h2 className="text-3xl font-black text-foreground">Make a Donation</h2>
              <p className="text-muted-foreground">
                Every contribution, no matter the size, makes a real difference. Your support helps us provide books,
                supplies, creative materials, and enriching experiences that these children wouldn't otherwise have access to.
              </p>
            </Reveal>

            <Reveal delay={140} className="w-full">
              <div className="h-full rounded-xl border border-border bg-surface2 p-6 text-center">
                <h3 className="text-lg font-bold text-foreground">Interested in Donating?</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Whether you'd like to contribute financially, donate books and materials, or volunteer your time, we'd love to hear from you.
                </p>
                <div className="mt-5">
                  <Link to="/contact">
                    <Button className="w-full group">
                      Contact Us to Donate
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-foreground">Our Commitment to You</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Every rupee you contribute goes directly toward the children, their learning materials, creative supplies,
                  snacks, and educational outings. We keep our operations lean and simple because this work is a labor of love.
                </p>
                <p>
                  We're happy to share updates on how your donations are being used. Feel free to reach out if you'd like
                  to know more about specific initiatives or see the impact of your support.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="panel-card p-7 text-center md:p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="fill-primary text-primary" size={22} />
              </div>
              <h3 className="text-3xl font-black text-foreground">Thank You</h3>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
                Your kindness and generosity give these children opportunities they wouldn't otherwise have. From the bottom
                of our hearts, thank you for believing in this work and investing in their futures.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
