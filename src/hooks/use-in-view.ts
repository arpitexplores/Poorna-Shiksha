import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export const useInView = <T extends HTMLElement = HTMLDivElement>({
  once = true,
  threshold = 0.2,
  rootMargin = "0px",
}: UseInViewOptions = {}) => {
  const elementRef = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = elementRef.current;

    if (!node) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          if (once) {
            observer.unobserve(entry.target);
          }
          return;
        }

        if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return {
    elementRef,
    isInView,
  };
};
