import { Heart, BookOpen, Users, Sparkles, MapPin } from "lucide-react";
import seemaPhoto from "@/assets/seema-singla.jpg";
import Reveal from "@/components/Reveal";
import InPageNav from "@/components/InPageNav";

const About = () => {
  const sectionLinks = [
    { id: "founder", label: "Founder" },
    { id: "beginning", label: "How It Started" },
    { id: "difference", label: "What Makes Us Different" },
    { id: "children", label: "Children We Serve" },
    { id: "approach", label: "Our Approach" },
    { id: "vision", label: "Our Vision" },
  ];

  return (
    <div className="page-shell">
      <section className="section-alt section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">About Us</p>
            <h1 className="section-heading">Our Story</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-foreground">
              Where it all began and why we do what we do
            </p>
          </Reveal>
        </div>
      </section>

      <InPageNav links={sectionLinks} />

      <section id="founder" className="scroll-mt-36 section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
                <img
                  src={seemaPhoto}
                  alt="Seema Singla - Founder of Poorna Shiksha"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={742}
                  height={1000}
                  sizes="(min-width: 1024px) 44vw, 90vw"
                />
              </div>
            </Reveal>

            <Reveal delay={100} className="space-y-6">
              <p className="eyebrow">Meet the Founder</p>
              <h2 className="mt-0 text-4xl font-black text-foreground md:text-5xl">Seema Singla</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  A passionate teacher who believes that education is more than textbooks
                  and exams. It's about nurturing whole human beings, curious, kind, and capable.
                </p>
                <p>
                  Seema opened her home and her heart to children from underprivileged families,
                  creating a safe space where they could learn at their own pace and feel valued.
                </p>
                <p className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Delhi, India
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="beginning" className="scroll-mt-36 section-alt section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-4 md:sticky md:top-28">
              <h2 className="text-3xl font-black text-foreground">How It Started</h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                It began with just a few children from the neighborhood, children who didn't have access to quality education
                but had so much potential and curiosity.
              </p>
              <p>
                What started as informal tutoring sessions soon grew into something
                more meaningful: a place where children could not only learn academics but also discover their creativity,
                build their confidence, and experience the world beyond their immediate surroundings.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="difference" className="scroll-mt-36 section-pad">
        <div className="section-shell">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <p className="eyebrow">Our Difference</p>
              <h2 className="section-heading">What Makes Us Different</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                This isn't an NGO or a formal institution. It's a deeply personal effort driven by love and commitment.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Reveal className="feature-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Personal Touch</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  No fancy classrooms or corporate donors, just one dedicated teacher, a handful of volunteers,
                  and the support of kind-hearted people who believe in this work.
                </p>
              </Reveal>

              <Reveal delay={120} className="feature-card md:translate-y-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Holistic Development</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We teach reading, writing, and math. But we also take children to
                  the zoo, gardens, and museums. We do art projects and encourage questions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="children" className="scroll-mt-36 section-alt section-pad">
        <div className="section-shell">
          <Reveal className="panel-card mx-auto max-w-5xl p-7 md:p-10">
            <div className="flex items-start gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:flex">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-foreground">The Children We Serve</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Our students come from underprivileged families in nearby areas. Many of their parents work as domestic help,
                  drivers, or daily wage laborers. These families want the best for their children but often lack the resources
                  to provide quality education.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  That's where we step in, offering them a chance to learn, grow, and dream.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="approach" className="scroll-mt-36 section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-4 md:sticky md:top-28">
              <h2 className="text-3xl font-black text-foreground">Our Approach</h2>
            </Reveal>

            <div className="md:col-span-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, text: "Small group learning for personalized attention" },
                { icon: BookOpen, text: "Balance between academics and creative activities" },
                { icon: MapPin, text: "Regular educational outings to broaden horizons" },
                { icon: Sparkles, text: "Focus on building confidence and curiosity" },
                { icon: Heart, text: "Creating a loving, supportive environment" },
              ].map((item, index) => (
                <Reveal
                  key={index}
                  delay={index * 90}
                  className="rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <item.icon className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="scroll-mt-36 section-alt section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Looking Ahead</p>
            <h2 className="section-heading">Our Vision</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              We dream of a day when every child, regardless of their background, has access to education that nurtures
              their mind, heart, and spirit.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              While we may be small in scale, we believe that even touching the lives of
              a few children can create ripples of positive change. These children will grow up to make their own mark
              on the world, and that's what keeps us going.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
