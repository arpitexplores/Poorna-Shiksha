import artImage from "@/assets/activity-art.jpg";
import outdoorImage from "@/assets/activity-outdoor.jpg";
import readingImage from "@/assets/activity-reading.jpg";

const Activities = () => {
  const activities = [
    {
      image: readingImage,
      title: "Reading & Storytelling",
      description: "Building literacy through engaging stories and shared reading experiences."
    },
    {
      image: artImage,
      title: "Art & Creativity",
      description: "Expressing imagination through painting, drawing, and craft projects."
    },
    {
      image: outdoorImage,
      title: "Educational Outings",
      description: "Learning comes alive with visits to gardens, museums, and the zoo."
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Our Activities
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Moments of learning, creativity, and joy from our classroom and beyond
            </p>
          </div>

          {/* Activity Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className="max-w-3xl mx-auto space-y-6 mt-16">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center">
              Learning Through Experience
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every day brings something new. Some days we dive into books and worksheets, building literacy and numeracy
                skills. Other days we're covered in paint and glue, creating colorful artwork that decorates our walls and
                fills children with pride.
              </p>
              <p>
                But some of the most magical moments happen outside the classroom. We take regular trips to places that
                many of these children have never visited before—the zoo where they see animals they've only read about,
                botanical gardens where they learn about plants and nature, and museums where history comes alive.
              </p>
              <p>
                These experiences aren't just fun outings. They're opportunities for children to connect what they learn
                in books with the real world, to ask questions, to wonder, and to dream about what's possible.
              </p>
            </div>
          </div>

          {/* Note about photos */}
          <div className="bg-muted p-6 rounded-lg text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              We're continually updating this gallery with photos from our sessions and outings. Check back regularly
              to see what the children are learning and creating!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
