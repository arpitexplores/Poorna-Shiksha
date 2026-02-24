import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type InPageNavLink = {
  id: string;
  label: string;
};

type InPageNavProps = {
  links: InPageNavLink[];
  className?: string;
};

const InPageNav = ({ links, className }: InPageNavProps) => {
  const defaultActive = useMemo(() => links[0]?.id ?? "", [links]);
  const [activeId, setActiveId] = useState(defaultActive);

  useEffect(() => {
    if (!links.length) {
      return;
    }

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const updateFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId && links.some((link) => link.id === hashId)) {
        setActiveId(hashId);
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    if (!("IntersectionObserver" in window)) {
      return () => window.removeEventListener("hashchange", updateFromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      observer.disconnect();
    };
  }, [links]);

  if (!links.length) {
    return null;
  }

  return (
    <div className={cn("sticky top-20 z-40 border-y border-border bg-surface1/90 backdrop-blur-sm", className)}>
      <div className="section-shell">
        <nav aria-label="In-page navigation" className="flex flex-wrap justify-center gap-2 py-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-all duration-200",
                activeId === link.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-surface2 text-muted-foreground hover:bg-primary/10 hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default InPageNav;
