import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pt-20 pb-12 text-center">
   
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/gdg.svg"
          alt="Google Developer Groups"
          className="h-10 sm:h-12 w-auto"
        />
      </motion.h1>

      <h2 className="text-[#646464] font-bold">RBU Chapter</h2>

    
      <img
        src="/i1.svg"
        alt="Students illustration"
        className="mx-auto mt-10 w-full max-w-md"
      />

 
      <motion.p
        className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl font-pt-sans-400 text-[25px] leading-relaxed mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Google Developer Groups are community groups for college and university
        students interested in Google developer technologies.
      </motion.p>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 inline-flex items-center justify-center rounded-md  py-3 text-white shadow-sm font-open-sans-700 bg-[#3686F7] px-11 "
      >
        Join Us
      </motion.button>

     
      <img src="/downArrow.svg" alt="" className="mx-auto mt-6 mb-27" />

     
  
    </section>
  );
}
