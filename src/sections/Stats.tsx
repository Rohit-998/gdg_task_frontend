import { motion } from "framer-motion";

const items = [
  { label: "Years", value: "03+" },
  { label: "Events", value: "10+" },
  { label: "Community Members", value: "1K+" },
  { label: "Attendees", value: "200+" },
];

const colors = ["#547DBF", "#F9BC15", "#34A853", "#EA4435"];

export function Stats() {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference / 4;

  return (
    <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 px-6">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex flex-col items-center text-[#5F5F5F] dark:text-gray-200"
        >
          <svg className="w-24 h-24">
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="#E0E0E0"
              strokeWidth="6"
              fill="none"
            />
            {colors.map((c, idx) => (
              <circle
                key={idx}
                cx="48"
                cy="48"
                r={radius}
                stroke={c}
                strokeWidth="6"
                fill="none"
                strokeDasharray={arcLength + " " + (circumference - arcLength)}
                strokeDashoffset={-idx * arcLength}
                strokeLinecap="round"
                transform="rotate(-90 48 48)"
              />
            ))}
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-bold text-xl fill-[#5F5F5F] dark:fill-gray-200"
            >
              {it.value}
            </text>
          </svg>
          <div className="text-[#353535] dark:text-gray-100 mt-1 font-pt-sans-400 text-lg">
            {it.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}