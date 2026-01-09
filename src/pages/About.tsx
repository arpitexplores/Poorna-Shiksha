import { Heart, BookOpen, Users, Sparkles, MapPin } from "lucide-react";
import seemaPhoto from "@/assets/seema-singla.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground">
              Where it all began and why we do what we do
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Founder Photo */}
              <div className="order-2 md:order-1">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={seemaPhoto} 
                    alt="Seema Singla - Founder of Poorna Shiksha" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Founder Info */}
              <div className="order-1 md:order-2 space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-medium uppercase tracking-wide text-sm">Meet the Founder</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Seema Singla
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A passionate teacher who believes that education is more than textbooks
                    and exams. It's about nurturing whole human beings—curious, kind, and capable.
                  </p>
                  <p>
                    Seema opened her home and her heart to children from underprivileged families,
                    creating a safe space where they could learn at their own pace and feel valued.
                  </p>
                  <p className="flex items-center gap-2 text-foreground font-medium">
                    <MapPin className="w-4 h-4 text-primary" />
                    Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Started */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground sticky top-24">
                  How It Started
                </h2>
              </div>
              <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  It began with just a few children from the neighborhood—children who didn't have access to quality education
                  but had so much potential and curiosity.
                </p>
                <p>
                  What started as informal tutoring sessions soon grew into something
                  more meaningful: a place where children could not only learn academics but also discover their creativity,
                  build their confidence, and experience the world beyond their immediate surroundings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                What Makes Us Different
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This isn't an NGO or a formal institution. It's a deeply personal effort driven by love and commitment.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Personal Touch</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No fancy classrooms or corporate donors—just one dedicated teacher, a handful of volunteers,
                  and the support of kind-hearted people who believe in this work.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Holistic Development</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We teach reading, writing, and math. But we also take children to
                  the zoo, gardens, and museums. We do art projects and encourage questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Children We Serve */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm">
              <div className="flex items-start gap-6">
                <div className="hidden sm:flex w-16 h-16 bg-primary/10 rounded-full items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                    The Children We Serve
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our students come from underprivileged families in nearby areas. Many of their parents work as domestic help,
                    drivers, or daily wage laborers. These families want the best for their children but often lack the resources
                    to provide quality education.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    That's where we step in—offering them a chance to learn, grow, and dream.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                Our Approach
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Users, text: "Small group learning for personalized attention" },
                { icon: BookOpen, text: "Balance between academics and creative activities" },
                { icon: MapPin, text: "Regular educational outings to broaden horizons" },
                { icon: Sparkles, text: "Focus on building confidence and curiosity" },
                { icon: Heart, text: "Creating a loving, supportive environment" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We dream of a day when every child—regardless of their background—has access to education that nurtures
              their mind, heart, and spirit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While we may be small in scale, we believe that even touching the lives of
              a few children can create ripples of positive change. These children will grow up to make their own mark
              on the world, and that's what keeps us going.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
