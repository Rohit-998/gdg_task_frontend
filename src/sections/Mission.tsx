import { motion } from "framer-motion";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2
        className="font-medium text-[#5F5F5F] text-[40px] leading-[50px] tracking-[-0.022em]"
        style={{ fontFamily: "Product Sans, sans-serif" }}
      >
        {children}
      </h2>
    </div>
  );
}

const Mission = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6">
    
      <div className="flex justify-center">
        <h2
          className="font-bold text-[45px] leading-[90px] tracking-[-0.022em] text-[#5F5F5F] text-center pb-15"
          style={{ fontFamily: "Product Sans, sans-serif" }}
        >
          Get To Know Us!
        </h2>
      </div>

   
      <motion.div className="text-[#5F5F5F] font-pt-sans-500 text-center">
        <SectionTitle>Our Mission</SectionTitle>
        <div className="mt-2 h-1 w-39 mx-auto bg-[#4285F4] rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 , delay: 0.3}}
        className="grid items-center gap-8 sm:grid-cols-2"
      >
        <img
          src="/mission.svg"
          alt="Mission"
          className="order-last sm:order-none w-full max-w-md mx-auto"
        />
        <div className="flex items-stretch">
          <p className="text-gray-600 dark:text-gray-300 pr-0 mr-0 mt-11 text-right md:mt-13 lg:mt-13">
            Our mission involves community engagement,leadership development,
            building strong tech foundation, while enabling all tech enthusiasts
            to contribute to the global society.
          </p>
          <img className="mt-7 ml-3 " src="/bp1.svg" alt="" />
        </div>
      </motion.div>

   
      <motion.div className="text-[#5F5F5F] font-pt-sans-500 text-center mt-12">
        <SectionTitle>Our Perspective</SectionTitle>
        <div className="mt-2 h-1 w-39 mx-auto bg-[#0F9D56] rounded-full mb-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="grid items-center gap-8 sm:grid-cols-2"
      >
        <div className="flex items-stretch">
          <img src="/gp2.svg" alt="" className="mt-8 mr-3" />
          <p className="text-gray-600 dark:text-gray-300 text-left mt-9 lg:mt-15 md:mt-12">
            We're a community-driven initiative aiming to bridge the gap between
            research and practice ,develop evolutionary thinking and network
            throughout the process. We believe in connecting fellow developers 
            spreading stimulative ideas and working for a solution driven team.
          </p>
        </div>
        <img
          src="/perspective.svg"
          alt="Perspective"
          className="w-full max-w-md mx-auto"
        />
      </motion.div>

      
      <motion.div className="text-[#5F5F5F] font-pt-sans-500 text-center mt-12">
        <SectionTitle>What Keeps Us Going?</SectionTitle>
        <div className="mt-2 h-1 w-39 mx-auto bg-[#FFC727] rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="grid items-center gap-8 sm:grid-cols-2 mt-12"
      >
        <img
          src="/energy.svg"
          alt="What keeps us going"
          className="order-last sm:order-none w-full max-w-md mx-auto"
        />
        <div className="flex items-stretch">
          <p className="text-gray-600 dark:text-gray-300 text-right mt-1 lg:mt-7 md:mt-4">
            Our club helps students to connect, learn, empower and grow.
            Teamwork, innovative thinking, communication, and leading with
            solutions is what helps us achieve new heights. The entire team
            works in coordination, to inspire and motivate the upcoming coding
            community to evolve their skills and broaden their horizons of
            knowledge.
          </p>
        <img src="/yp2.svg" alt="" className="ml-3" />
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;
