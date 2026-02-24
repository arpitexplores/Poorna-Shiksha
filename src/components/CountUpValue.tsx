import { useEffect, useMemo, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

type CountUpValueProps = {
  value: string;
  duration?: number;
  className?: string;
};

const parseValue = (rawValue: string) => {
  const match = rawValue.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return null;
  }

  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
    decimals: match[2].includes(".") ? match[2].split(".")[1].length : 0,
  };
};

const CountUpValue = ({ value, duration = 1100, className }: CountUpValueProps) => {
  const parsed = useMemo(() => parseValue(value), [value]);
  const initialDisplay = useMemo(() => {
    if (!parsed) {
      return value;
    }

    const zeroValue = parsed.decimals > 0 ? (0).toFixed(parsed.decimals) : "0";
    return `${parsed.prefix}${zeroValue}${parsed.suffix}`;
  }, [parsed, value]);
  const { elementRef, isInView } = useInView<HTMLSpanElement>({ threshold: 0.5, once: true });
  const [displayValue, setDisplayValue] = useState(initialDisplay);

  useEffect(() => {
    setDisplayValue(initialDisplay);
  }, [initialDisplay]);

  useEffect(() => {
    if (!parsed || !isInView) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    const startTime = performance.now();

    const updateValue = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.target * eased;
      const rounded =
        parsed.decimals > 0 ? current.toFixed(parsed.decimals) : Math.round(current).toString();

      setDisplayValue(`${parsed.prefix}${rounded}${parsed.suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateValue);
      }
    };

    frameId = requestAnimationFrame(updateValue);
    return () => cancelAnimationFrame(frameId);
  }, [duration, isInView, parsed, value]);

  return (
    <span ref={elementRef} className={className} aria-label={value}>
      {parsed ? displayValue : value}
    </span>
  );
};

export default CountUpValue;
