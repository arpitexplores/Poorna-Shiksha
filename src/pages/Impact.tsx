import { Smile, Book, TrendingUp, Heart } from "lucide-react";
import CountUpValue from "@/components/CountUpValue";
import Reveal from "@/components/Reveal";
import InPageNav from "@/components/InPageNav";

const Impact = () => {
  const sectionLinks = [
    { id: "impact-stats", label: "Stats" },
    { id: "impact-stories", label: "Stories" },
    { id: "impact-voices", label: "Parent Voices" },
    { id: "impact-journey", label: "Journey Ahead" },
  ];

  const stories = [
    {
      icon: Book,
      title: "Priya's Reading Journey",
      story: "When Priya first joined us, she struggled to read simple words. Today, she reads storybooks on her own and even helps younger children with their reading. Her mother says she sees a confidence in Priya that wasn't there before."
    },
    {
      icon: Smile,
      title: "Aarav's Artistic Expression",
      story: "Aarav was a quiet boy who rarely spoke up. Through art sessions, he found his voice. His drawings became more confident, more colorful. Now he eagerly shares his creations and stories behind them with everyone."
    },
    {
      icon: TrendingUp,
      title: "Growing Together",
      story: "What started with 3 children has now grown to a regular group of 12. Parents tell us their children wake up excited to come here, asking questions at home about what they learned, showing curiosity about the world they never showed before."
    },
  ];

  const stats = [
    { number: "12+", label: "Children Currently Learning" },
    { number: "3", label: "Years Running" },
    { number: "50+", label: "Educational Outings" },
    { number: "100%", label: "Love & Dedication" },
  ];

  return (
    <div className="page-shell">
      <section className="section-alt section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Outcomes</p>
            <h1 className="section-heading">Our Impact</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-foreground">
              Stories of growth, learning, and transformation
            </p>
          </Reveal>
        </div>
      </section>

      <InPageNav links={sectionLinks} />

      <section id="impact-stats" className="scroll-mt-36 section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90} className="panel-card p-6 text-center">
                <div className="text-3xl font-black text-primary md:text-4xl">
                  <CountUpValue value={stat.number} />
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="impact-stories" className="scroll-mt-36 section-alt section-pad">
        <div className="section-shell">
          <Reveal className="text-center">
            <h2 className="text-3xl font-black text-foreground md:text-4xl">Stories That Inspire Us</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
            {stories.map((story, index) => {
              const Icon = story.icon;
              return (
                <Reveal key={story.title} delay={index * 110} className="feature-card">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{story.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{story.story}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="impact-voices" className="scroll-mt-36 section-pad">
        <div className="section-shell">
          <Reveal className="panel-card mx-auto max-w-5xl p-8 md:p-12">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Heart className="text-primary" size={28} />
              </div>
              <h2 className="text-3xl font-black text-foreground md:text-4xl">What Parents Tell Us</h2>
            </div>
            <div className="mx-auto mt-7 max-w-3xl space-y-5">
              <blockquote className="text-lg italic leading-relaxed text-muted-foreground">
                "My daughter comes home and teaches me what she learned. She asks questions I never heard her ask before.
                She's becoming curious about everything. This place has changed her."
              </blockquote>
              <blockquote className="text-lg italic leading-relaxed text-muted-foreground">
                "When he went to the zoo for the first time, my son couldn't stop talking about it for weeks. These experiences
                are gifts we could never afford to give him ourselves. Thank you for giving our children these memories."
              </blockquote>
              <blockquote className="text-lg italic leading-relaxed text-muted-foreground">
                "We see the difference not just in her schoolwork but in how she carries herself. She has confidence now.
                She believes she can learn and do things. That's priceless."
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="impact-journey" className="scroll-mt-36 section-accent section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">The Future</p>
            <h2 className="section-heading">The Journey Continues</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Every child who walks through our doors reminds us why we do this work. We see their potential, their
              curiosity, their hunger to learn. And we know that with the right support and opportunities, they can
              achieve anything they set their minds to.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              This is just the beginning. With your support, we can continue providing these children with education,
              experiences, and hope for a brighter future.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Impact;
