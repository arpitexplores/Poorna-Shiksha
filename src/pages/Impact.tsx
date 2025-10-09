import { Smile, Book, TrendingUp, Heart } from "lucide-react";

const Impact = () => {
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
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Our Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stories of growth, learning, and transformation
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card p-6 rounded-lg text-center space-y-2 shadow-sm">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Stories Section */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center">
              Stories That Inspire Us
            </h2>
            <div className="space-y-8">
              {stories.map((story, index) => {
                const Icon = story.icon;
                return (
                  <div key={index} className="bg-card p-8 rounded-lg shadow-sm space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {story.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {story.story}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What Parents Say */}
          <div className="bg-muted p-8 md:p-12 rounded-lg space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                What Parents Tell Us
              </h2>
            </div>
            <div className="space-y-6 max-w-3xl mx-auto">
              <blockquote className="italic text-muted-foreground text-lg leading-relaxed">
                "My daughter comes home and teaches me what she learned. She asks questions I never heard her ask before.
                She's becoming curious about everything. This place has changed her."
              </blockquote>
              <blockquote className="italic text-muted-foreground text-lg leading-relaxed">
                "When he went to the zoo for the first time, my son couldn't stop talking about it for weeks. These experiences
                are gifts we could never afford to give him ourselves. Thank you for giving our children these memories."
              </blockquote>
              <blockquote className="italic text-muted-foreground text-lg leading-relaxed">
                "We see the difference not just in her schoolwork but in how she carries herself. She has confidence now.
                She believes she can learn and do things. That's priceless."
              </blockquote>
            </div>
          </div>

          {/* Our Goal */}
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              The Journey Continues
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every child who walks through our doors reminds us why we do this work. We see their potential, their
              curiosity, their hunger to learn. And we know that with the right support and opportunities, they can
              achieve anything they set their minds to.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is just the beginning. With your support, we can continue providing these children with education,
              experiences, and hope for a brighter future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
