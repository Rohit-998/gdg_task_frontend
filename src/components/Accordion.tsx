import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Corrected import

type Item = {
  id: string;
  question: string;
  answer: string;
  bar: string;
  barClassName?: string;
  AnsClassName?: string;
  Arrow?: string;
};

export function Accordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const idPrefix = useId();

  return (
    <div className="space-y-6">
      {items.map((it) => {
        const headingId = `${idPrefix}-heading-${it.id}`;
        const expanded = openId === it.id;

        return (
          <div key={it.id} className="space-y-3">
            <section className="rounded-full shadow-md border-8 border-[#E1E1E1] bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-5 py-3 text-left font-bold text-[#5F5F5F] dark:text-gray-200 font-pt-sans-700 text-lg"
                  aria-expanded={expanded}
                  id={headingId}
                  onClick={() => setOpenId(expanded ? null : it.id)}
                >
                  <div
                    className={`flex items-center justify-center w-7 h-7 transition-transform ${
                      expanded ? "rotate-180" : ""
                    }`}
                  >
                    <img src={it.Arrow} alt="Chevron" />
                  </div>
                  <span>{it.question}</span>
                </button>
              </h3>
            </section>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="flex px-4 sm:px-8 md:mx-20"
                >
                  <div className={`${it.barClassName}`}></div>
                  <div
                    className={`${it.AnsClassName} text-justify sm:text-left`}
                  >
                    {it.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}