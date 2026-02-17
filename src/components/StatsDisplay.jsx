import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Live Projects", target: 60, suffix: "+" },
  { label: "Technologies", target: 15, suffix: "+" },
  { label: "LeetCode", target: 260, suffix: "+" },
];

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

const StatsDisplay = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    const duration = 1600;
    const stagger = 180;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;

      setCounts(
        stats.map((stat, i) => {
          const delay = i * stagger;
          if (elapsed < delay) return 0;
          const progress = Math.min((elapsed - delay) / (duration - stagger), 1);
          const eased = easeOutQuart(progress);
          return Math.floor(stat.target * eased);
        })
      );

      if (elapsed < duration + stagger * (stats.length - 1)) {
        requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((s) => s.target));
        setHasAnimated(true);
      }
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isInView, hasAnimated]);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="relative overflow-hidden rounded-2xl border border-[hsl(214,32%,91%)] bg-[hsl(0,0%,100%)] p-4 sm:p-5 text-center shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300 card-3d"
        >
          {/* gradient accent bar on top */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-90"
            style={{
              background: "linear-gradient(90deg, hsl(173,58%,39%), hsl(199,89%,48%))",
            }}
          />
          <div className="pt-0.5">
            <motion.span
              key={counts[i]}
              className="block text-2xl sm:text-3xl font-bold tabular-nums tracking-tight"
              style={{
                background: "linear-gradient(135deg, hsl(173,58%,39%), hsl(199,89%,48%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {counts[i]}
              {stat.suffix}
            </motion.span>
            <p className="mt-1 text-xs sm:text-sm font-medium text-[hsl(222,25%,35%)]">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsDisplay;
