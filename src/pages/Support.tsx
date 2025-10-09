import { Button } from "@/components/ui/button";
import { BookOpen, Palette, Bus, Apple, Heart } from "lucide-react";

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

  // UPI ID - replace with actual UPI ID
  const upiId = "example@upi"; // Replace this with the actual UPI ID

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="text-primary" size={32} />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your generosity helps provide quality education and meaningful experiences to underprivileged children
            </p>
          </div>

          {/* How Your Support Helps */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center">
              How Your Support Helps
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {needsItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-sm space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="text-primary font-medium">
                          {item.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donation Section */}
          <div className="bg-muted p-8 md:p-12 rounded-lg space-y-6">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center">
              Make a Donation
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Every contribution, no matter the size, makes a real difference. Your support helps us provide books,
              supplies, creative materials, and enriching experiences that these children wouldn't otherwise have access to.
            </p>

            <div className="max-w-md mx-auto space-y-4">
              <div className="bg-card p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg text-foreground text-center">
                  UPI Payment
                </h3>
                <p className="text-center text-muted-foreground">
                  Send your contribution directly via UPI
                </p>
                <div className="bg-muted p-4 rounded text-center">
                  <p className="text-sm text-muted-foreground mb-2">UPI ID:</p>
                  <p className="font-mono text-lg font-semibold text-primary break-all">
                    {upiId}
                  </p>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => {
                    navigator.clipboard.writeText(upiId);
                    // You could add a toast notification here
                  }}
                >
                  Copy UPI ID
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mt-6">
              <p>
                If you'd like to donate in other ways (books, materials, or volunteering your time),
                please reach out through our contact page.
              </p>
            </div>
          </div>

          {/* Transparency */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-2xl font-bold text-foreground text-center">
              Our Commitment to You
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Every rupee you contribute goes directly toward the children—their learning materials, creative supplies,
                snacks, and educational outings. We keep our operations lean and simple because this work is a labor of love.
              </p>
              <p>
                We're happy to share updates on how your donations are being used. Feel free to reach out if you'd like
                to know more about specific initiatives or see the impact of your support.
              </p>
            </div>
          </div>

          {/* Thank You */}
          <div className="bg-card p-8 rounded-lg text-center space-y-4 max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="text-primary fill-primary" size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Thank You
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your kindness and generosity give these children opportunities they wouldn't otherwise have. From the bottom
              of our hearts, thank you for believing in this work and investing in their futures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
