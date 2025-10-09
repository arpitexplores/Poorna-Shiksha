import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-teaching.jpg";

const Home = () => {
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
