import Reveal from "@/components/Reveal";
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
    <div className="page-shell">
      <section className="section-alt section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Our Programs</p>
            <h1 className="section-heading">Our Activities</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-foreground">
              Moments of learning, creativity, and joy from our classroom and beyond
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <Reveal
                key={activity.title}
                delay={index * 100}
                className="feature-card overflow-hidden p-0"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{activity.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activity.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-accent section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-foreground md:text-4xl">Learning Through Experience</h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary/30" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Every day brings something new. Some days we dive into books and worksheets, building literacy and numeracy
                skills. Other days we're covered in paint and glue, creating colorful artwork that decorates our walls and
                fills children with pride.
              </p>
              <p>
                But some of the most magical moments happen outside the classroom. We take regular trips to places that
                many of these children have never visited before, the zoo where they see animals they've only read about,
                botanical gardens where they learn about plants and nature, and museums where history comes alive.
              </p>
              <p>
                These experiences aren't just fun outings. They're opportunities for children to connect what they learn
                in books with the real world, to ask questions, to wonder, and to dream about what's possible.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="panel-card mx-auto mt-10 max-w-3xl p-6 text-center">
            <p className="text-muted-foreground italic">
              We're continually updating this gallery with photos from our sessions and outings. Check back regularly
              to see what the children are learning and creating!
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Activities;
