import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
} & HTMLAttributes<HTMLDivElement>;

const Reveal = ({ children, className, delay = 0, threshold = 0.15, style, ...props }: RevealProps) => {
  const { elementRef, isInView } = useInView({ threshold });

  return (
    <div
      ref={elementRef}
      className={cn("reveal", isInView && "reveal-visible", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
