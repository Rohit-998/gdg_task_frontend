import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const tech = [
  { name: "Android", color: "bg-brand-green", icon: "/android.svg", details: "Build amazing mobile apps with Android." },
  { name: "Flutter", color: "bg-brand-blue", icon: "/flutter.svg", details: "Cross-platform UI toolkit for beautiful apps." },
  { name: "Cloud", color: "bg-brand-red", icon: "/cloud.svg", details: "Powerful cloud computing & infrastructure." },
  { name: "React", color: "bg-brand-blue", icon: "/react.svg", details: "JavaScript library for building UIs." },
  { name: "Node.js", color: "bg-brand-green", icon: "/nodejs.svg", details: "Server-side JavaScript runtime." },


];

export function Tech() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || tech.length <= 3) return; 

    const step = 280 + 24; 
    autoplayRef.current = setInterval(() => {
      if (!el) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 2500);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
     
        <div className="flex items-center">
          <div className="h-1 flex-1 bg-[#FF6060]"></div>
          <h2 className="mx-6 text-2xl font-semibold text-[#5F5F5F] font-pt-sans-700">
            Technologies
          </h2>
          <div className="h-1 flex-1 bg-[#FF6060]"></div>
        </div>

        <p className="text-center text-sm text-[#5F5F5F] mt-5">
          Domains That Excite Us to Collaborate and Teach!
        </p>

        <div
          ref={scrollRef}
          className={`mt-15 ${tech.length > 3 ? "overflow-x-auto scrollbar-hide snap-x" : ""}`}
        >
    
          <div className={`flex space-x-6 ${tech.length <= 3 ? "justify-center" : ""}`}>
            {tech.map((t, index) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -4 }}
                className="snap-start min-w-[240px] flex-shrink-0 relative rounded-l-4xl rounded-r-4xl border-6 border-[#E1E1E1] dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg p-6 text-center"
              >
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-30 h-1 rounded-b-xl ${t.color}`}
                />
                <img
                  src={t.icon}
                  alt={t.name}
                  className="h-20 w-20 mx-auto mb-2 object-contain"
                />
                <div className="text-lg font-semibold">{t.name}</div>
                <button
                  className="mt-3 flex items-center justify-center w-full text-gray-500 hover:text-black transition"
                  onClick={() => handleToggle(index)}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      {t.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
