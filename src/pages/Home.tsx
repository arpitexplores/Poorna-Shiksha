import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Sparkles, ArrowRight, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-teaching.jpg";
import activityArt from "@/assets/activity-art.jpg";
import activityOutdoor from "@/assets/activity-outdoor.jpg";
import activityReading from "@/assets/activity-reading.jpg";
import seemaHomePhoto from "@/assets/seema-singla-home.jpg";
import StructuredData from "@/components/StructuredData";
import CountUpValue from "@/components/CountUpValue";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/seo/config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Home = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => setSelectedSlide(carouselApi.selectedScrollSnap());
    const onReInit = () => {
      setSlideCount(carouselApi.scrollSnapList().length);
      onSelect();
    };

    onReInit();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onReInit);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onReInit);
    };
  }, [carouselApi]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: siteConfig.defaultOgImage,
    description: siteConfig.defaultDescription,
    email: "contact@poornashiksha.com",
    areaServed: "Delhi, India"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.defaultDescription
  };

  const stats = [
    { number: "12+", label: "Children Learning", icon: Users },
    { number: "3", label: "Years Running", icon: Calendar },
    { number: "50+", label: "Educational Outings", icon: MapPin },
    { number: "100%", label: "Love & Dedication", icon: Heart },
  ];

  const galleryImages = [
    { src: activityArt, alt: "Children doing art activities" },
    { src: activityOutdoor, alt: "Outdoor learning experience" },
    { src: activityReading, alt: "Reading session with children" },
  ];

  return (
    <div className="page-shell">
      <StructuredData id="schema-org-organization" data={organizationSchema} />
      <StructuredData id="schema-org-website" data={websiteSchema} />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Teacher with children learning together"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />
        </div>

        <div className="section-shell relative z-10 flex min-h-[600px] items-center py-16 md:min-h-[680px]">
          <Reveal className="max-w-4xl text-white">
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl xl:whitespace-nowrap">
              Every Child Deserves to Learn
            </h1>
            <p className="mt-6 text-lg font-medium leading-relaxed text-white/90 md:text-2xl xl:whitespace-nowrap">
              Nurturing young minds in Delhi through education, creativity, and meaningful experiences
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/support">
                <Button size="lg">Support the Kids</Button>
              </Link>
              <Button asChild size="lg" variant="glass">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative z-20 -mt-16 md:-mt-20">
        <div className="section-shell">
          <div className="panel-card grid grid-cols-2 gap-6 p-5 md:grid-cols-4 md:gap-0 md:p-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal
                  key={index}
                  delay={index * 80}
                  className={`space-y-1.5 px-2 text-center md:px-5 ${
                    index < stats.length - 1 ? "md:border-r md:border-border" : ""
                  }`}
                >
                  <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="text-3xl font-black text-primary md:text-4xl">
                    <CountUpValue value={stat.number} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Our Mission</p>
            <h2 className="section-heading">
              Welcome to Our Learning Community
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary/30" />
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              In a quiet neighborhood in Delhi, something special happens every day. Children from nearby areas come together
              to learn, create, and grow. This isn't a formal school, it's a home filled with love, laughter, and the joy of discovery.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Led by a dedicated teacher who believes every child deserves quality education, this initiative focuses on more than
              just academics. It's about building confidence, sparking curiosity, and giving children experiences that open their
              eyes to the world around them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-alt section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Learning Pillars</p>
            <h2 className="section-heading">What We Do</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            <Reveal className="feature-card border-b-4 border-b-primary">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Academic Learning</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Focused teaching in reading, writing, math, and general knowledge to build strong foundations.
              </p>
            </Reveal>

            <Reveal delay={120} className="feature-card border-b-4 border-b-primary/60">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Creative Activities</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Art, craft, storytelling, and hands-on projects that let children express themselves and explore.
              </p>
            </Reveal>

            <Reveal delay={240} className="feature-card border-b-4 border-b-primary/35">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Life Experiences</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Field trips to gardens, museums, and zoos that bring learning to life beyond the classroom.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Meet Seema Section */}
      <section className="section-accent section-pad">
        <div className="section-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-md lg:mx-0">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-primary/70" />
                <img
                  src={seemaHomePhoto}
                  alt="Seema Singla - Founder of Poorna Shiksha"
                  className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1034}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 space-y-6 lg:order-2">
              <p className="eyebrow">The Heart of Poorna Shiksha</p>
              <h2 className="mt-0 text-4xl font-black text-foreground md:text-5xl">Meet Seema Singla</h2>
              <p className="text-lg italic leading-relaxed text-muted-foreground">
                "Our goal is not just to teach children how to read, but to help them discover the joy of learning and the power of their own dreams."
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Seema Singla is the heart and soul behind Poorna Shiksha. What started as a simple desire to help
                neighborhood children has grown into a nurturing learning community that transforms young lives every day.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With her gentle approach and unwavering dedication, she has created a space where children feel
                safe to learn, ask questions, and dream big.
              </p>
              <div className="pt-1">
                <Link to="/about">
                  <Button className="group">
                    Read Her Story
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-pad">
        <div className="section-shell">
          <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-xl md:px-16 md:py-20">
            <div className="absolute -left-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-2xl" aria-hidden />
            <div className="absolute -bottom-16 -right-8 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden />

            <div className="relative z-10 mx-auto max-w-4xl">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                <Heart className="text-white" size={26} />
              </div>
              <h2 className="text-4xl font-black md:text-6xl">
                Help Us Keep Learning Alive
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
                Every contribution helps provide books, supplies, snacks, and memorable learning experiences for these children.
                Your support makes a real difference in their lives.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/support">
                  <Button size="lg" variant="inverted">
                    Donate Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="glass">
                    Volunteer
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo Gallery Carousel */}
      <section className="section-alt section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-6xl">
            <div className="mb-9 text-center">
              <p className="eyebrow">Visual Journey</p>
              <h2 className="section-heading">Moments of Joy & Learning</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                A glimpse into our everyday activities and special outings
              </p>
            </div>
            <Carousel className="w-full" setApi={setCarouselApi}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={600}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
            {slideCount > 1 && (
              <div className="mt-6 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  {Array.from({ length: slideCount }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => carouselApi?.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        selectedSlide === index
                          ? "w-8 bg-primary"
                          : "w-2.5 bg-primary/30 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground" aria-live="polite">
                  Slide {selectedSlide + 1} of {slideCount}
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
