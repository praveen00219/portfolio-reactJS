import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StatsDisplay = () => {
  const stats = [
    { label: "Live Projects", target: 60 },
    { label: "Technologies", target: 15 },
    { label: "LeetCode", target: 260 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Function to animate counting for a specific stat
  const animateCount = async (index) => {
    const { target } = stats[index];
    let current = 0;
    const totalSteps = 80; // Higher = smoother & slower
    const step = target / totalSteps;
    const intervalTime = 40; // Delay per frame

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
          resolve(); // Counting finished
        }
        setCounts((prev) =>
          prev.map((val, i) => (i === index ? Math.floor(current) : val))
        );
      }, intervalTime);
    });
  };

  // Master animation loop
  useEffect(() => {
    let isMounted = true;

    const runAnimationLoop = async () => {
      while (isMounted) {
        for (let i = 0; i < stats.length; i++) {
          setActiveIndex(i);
          await animateCount(i); // Count the number
          await new Promise((res) => setTimeout(res, 2000)); // Wait 2 seconds
        }
      }
    };

    runAnimationLoop();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex gap-2 justify-center mt-2">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: i === activeIndex ? 1 : 0.4,
            scale: i === activeIndex ? 1.1 : 0.9,
          }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-center bg-gradient-to-r from-blue-300 to-indigo-200 text-xs px-2 py-1 rounded-lg shadow-lg ${
            i === activeIndex ? "font-bold text-green-800" : "opacity-70"
          }`}
        >
          {/* Always show number */}
          <motion.span
            key={counts[i]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {counts[i]}+
          </motion.span>

          {/* Only active stat shows its label */}
          <AnimatePresence>
            {i === activeIndex && (
              <motion.span
                key={stat.label}
                initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                animate={{ opacity: 1, width: "auto", marginLeft: 6 }}
                exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                transition={{ duration: 0.4 }}
              >
                {stat.label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsDisplay;
