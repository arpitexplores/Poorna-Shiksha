import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Sparkles, ArrowRight, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-teaching.jpg";
import activityArt from "@/assets/activity-art.jpg";
import activityOutdoor from "@/assets/activity-outdoor.jpg";
import activityReading from "@/assets/activity-reading.jpg";
import seemaHomePhoto from "@/assets/seema-singla-home.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[500px] md:h-[600px] overflow-hidden">
          <img
            src={heroImage}
            alt="Teacher with children learning together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              Every Child Deserves to Learn
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Nurturing young minds in Delhi through education, creativity, and meaningful experiences
            </p>
            <Link to="/support">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Support the Kids
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Welcome to Our Learning Community
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a quiet neighborhood in Delhi, something special happens every day. Children from nearby areas come together
            to learn, create, and grow. This isn't a formal school—it's a home filled with love, laughter, and the joy of discovery.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Led by a dedicated teacher who believes every child deserves quality education, this initiative focuses on more than
            just academics. It's about building confidence, sparking curiosity, and giving children experiences that open their
            eyes to the world around them.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg text-center space-y-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold">Academic Learning</h3>
              <p className="text-muted-foreground">
                Focused teaching in reading, writing, math, and general knowledge to build strong foundations.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center space-y-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="text-secondary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold">Creative Activities</h3>
              <p className="text-muted-foreground">
                Art, craft, storytelling, and hands-on projects that let children express themselves and explore.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center space-y-4">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="text-accent" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold">Life Experiences</h3>
              <p className="text-muted-foreground">
                Field trips to gardens, museums, and zoos that bring learning to life beyond the classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Carousel */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
            Moments of Joy & Learning
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            A glimpse into our everyday activities and special outings
          </p>
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="overflow-hidden rounded-lg aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Meet Seema Section */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Seema Photo */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/20 overflow-hidden">
                  <img 
                    src={seemaHomePhoto} 
                    alt="Seema Singla - Founder of Poorna Shiksha" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Text content */}
              <div className="space-y-6 order-2 md:order-1">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Meet Seema Singla
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Seema Singla is the heart and soul behind Poorna Shiksha. What started as a simple desire to help
                  neighborhood children has grown into a nurturing learning community that transforms young lives every day.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With her gentle approach and unwavering dedication, she has created a space where children feel
                  safe to learn, ask questions, and dream big.
                </p>
                <div className="pt-2">
                  <Link to="/about">
                    <Button className="bg-primary hover:bg-primary/90 group">
                      Read Her Story
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Heart className="text-primary" size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Help Us Keep Learning Alive
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every contribution helps provide books, supplies, snacks, and memorable learning experiences for these children.
            Your support makes a real difference in their lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Make a Donation
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
