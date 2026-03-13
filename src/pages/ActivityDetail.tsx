import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Heart, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { getActivityBySlug } from "@/content/activities";

const ActivityDetail = () => {
  const { slug } = useParams();
  const activity = getActivityBySlug(slug);

  if (!activity) {
    return (
      <div className="page-shell">
        <section className="section-pad">
          <div className="section-shell">
            <Reveal className="panel-card mx-auto max-w-3xl p-8 text-center md:p-12">
              <p className="eyebrow">Activity Story</p>
              <h1 className="section-heading">Activity Not Found</h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                This activity link does not match any current story entry.
              </p>
              <Button asChild className="mt-8">
                <Link to="/activities">Back to Activities</Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <section className="activity-hero section-pad">
        <div className="section-shell">
          <Reveal className="mb-8">
            <Button asChild variant="outline" className="rounded-full border-white/50 bg-white/65 px-4 backdrop-blur-sm">
              <Link to="/activities">
                <ArrowLeft className="h-4 w-4" />
                All Activity Stories
              </Link>
            </Button>
          </Reveal>

          <Reveal className="activity-hero-card overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
              <div className="relative min-h-[340px] overflow-hidden lg:min-h-[520px]">
                <img
                  src={activity.heroImage}
                  alt={activity.title}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/30 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                      {activity.category}
                    </span>
                  </div>
                  <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">{activity.title}</h1>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/84 md:text-lg">{activity.summary}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between bg-card p-6 md:p-8">
                <div>
                  <p className="eyebrow">Snapshot</p>
                  <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3 rounded-2xl bg-surface2 p-4">
                      <CalendarDays className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/65">Date</p>
                        <p className="mt-1 text-base font-semibold text-foreground">{activity.dateLabel}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-surface2 p-4">
                      <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/65">Location</p>
                        <p className="mt-1 text-base font-semibold text-foreground">{activity.location}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-primary px-5 py-5 text-primary-foreground shadow-lg shadow-primary/20">
                      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em]">
                        <Heart className="h-4 w-4" />
                        Why this matters
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">{activity.supporterImpact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-3">
            <Reveal className="panel-card p-6 md:p-8 lg:col-span-2">
              <h2 className="text-2xl font-black text-foreground md:text-3xl">{activity.storySections[0]?.heading}</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {activity.storySections[0]?.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80} className="panel-card p-6 md:p-8">
              <h2 className="text-2xl font-black text-foreground md:text-3xl">What the children learned</h2>
              <ul className="mt-5 space-y-4">
                {activity.learnings.map((learning) => (
                  <li key={learning} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140} className="panel-card p-6 md:p-8">
              <h2 className="text-2xl font-black text-foreground md:text-3xl">{activity.storySections[1]?.heading}</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                {activity.storySections[1]?.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} className="panel-card p-6 md:p-8 lg:col-span-2">
              <h2 className="text-2xl font-black text-foreground md:text-3xl">{activity.seemaRole.heading}</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {activity.seemaRole.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-accent section-pad">
        <div className="section-shell">
          <Reveal className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Photo Gallery</p>
              <h2 className="mt-4 text-3xl font-black text-foreground md:text-4xl">A visual record of the day</h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {activity.gallery.map((item, index) => (
              <Reveal key={item.src} delay={index * 90} className="activity-gallery-card overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityDetail;
