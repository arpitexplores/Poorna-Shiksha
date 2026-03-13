import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { activities } from "@/content/activities";

const Activities = () => {
  return (
    <div className="page-shell">
      <section className="activity-list-hero section-pad">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-5xl text-center">
            <p className="eyebrow">Activities & Updates</p>
            <h1 className="section-heading">Stories from the classroom and beyond</h1>
            <div className="mx-auto mt-8 max-w-4xl space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                Every day brings something new. Some days we dive into books and worksheets, building literacy and
                numeracy skills. Other days we&apos;re covered in paint and glue, creating colorful artwork that fills the
                children with pride.
              </p>
              <p>
                Some of the most memorable moments happen outside the classroom. Trips to museums, gardens, and other new
                places help children connect what they learn in books with the real world, ask questions, and imagine what
                is possible.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2 xl:grid-cols-3">
            {activities.map((activity, index) => (
              <Reveal
                key={activity.slug}
                delay={index * 100}
                className="activity-story-card overflow-hidden p-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={activity.cardImage}
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
                      {activity.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      {activity.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {activity.location}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-foreground">{activity.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{activity.summary}</p>
                  <Button asChild className="mt-6">
                    <Link to={`/activities/${activity.slug}`}>
                      Read Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
