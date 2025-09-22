import { Accordion } from "../components/Accordion";

const items = [
  {
    id: "what-is-gdg",
    question: "What is GDG?",
    answer:
      "Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
    bar: "/redbar2.svg",
    AnsClassName:
      "flex-1 border-9 rounded-r-3xl md:rounded-r-3xl lg:py-7 lg:pl-5 lg:pr-3 md:py-1 md:pl-5 md:pr-2 pr-3 pl-3 py-3 text-sm text-gray-700 shadow-sm border-[#E1E1E1] lg:py-10 md:py-4 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300",
    barClassName: "w-2 flex bg-[#DB4437] rounded-l-lg",
    Arrow: "/redArrow.svg",
  },
  {
    id: "join",
    question: "How can you become a part of GDG?",
    answer:
      "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.",
    bar: "/greenbar.svg",
    AnsClassName:
      "flex-1 border-9 rounded-r-3xl md:rounded-r-3xl lg:py-5 lg:pl-5 lg:pr-3 md:py-1 md:pl-5 md:pr-2 pr-3 pl-3 py-3 text-sm text-gray-700 shadow-sm border-[#E1E1E1] lg:py-4 md:py-4 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300",
    barClassName: "w-2 flex bg-[#0F9D56] rounded-l-lg",
    Arrow: "/greenArrow.svg",
  },
  {
    id: "lead",
    question: "What does a GDG Lead do?",
    answer:
      "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
    bar: "/bluebar.svg",
    AnsClassName:
      "flex-1 border-9 rounded-r-3xl md:rounded-r-3xl lg:py-5 lg:pl-5 lg:pr-3 md:py-1 md:pl-5 md:pr-2 pr-3 pl-3 py-3 text-sm text-gray-700 shadow-sm border-[#E1E1E1] lg:py-4 md:py-4 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300",
    barClassName: "w-2 flex bg-[#4285F4] rounded-l-lg",
    Arrow: "/blueArrow.svg",
  },
  {
    id: "is-dsc-google",
    question: "How is DSC related to Google?",
    answer:
      "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
    bar: "/yellowbar.svg",
    AnsClassName:
      "flex-1 border-9 rounded-r-3xl md:rounded-r-3xl lg:py-5 lg:pl-5 lg:pr-3 md:py-1 md:pl-5 md:pr-2 pr-3 pl-3 py-3 text-sm text-gray-700 shadow-sm border-[#E1E1E1] lg:py-4 md:py-4 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300",
    barClassName: "w-2 flex bg-[#F4B400] rounded-l-lg",
    Arrow: "/yellowArrow.svg",
  },
 {
    id: "contact",
    question: "How to reach us?",
    answer: (
      <>
        You can contact us at{" "}
        <a href="mailto:dsc-rbce@gmail.com" className="underline hover:text-blue-500">
          dsc-rbce@gmail.com
        </a>
      </>
    ),
    bar: "/redbar4.svg",
    AnsClassName:
      "flex-1 border-9 rounded-r-3xl md:rounded-r-3xl lg:py-5 lg:pl-5 lg:pr-3 md:py-1 md:pl-5 md:pr-2 pr-3 pl-3 py-3 text-sm text-gray-700 shadow-sm border-[#E1E1E1] lg:py-4 md:py-4 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300",
    barClassName: "w-2 flex bg-[#DB4437] rounded-l-lg",
    Arrow: "/redArrow.svg",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl text-[#5F5F5F] dark:text-gray-200 font-semibold text-center mb-8 font-pt-sans-700">
        FAQs
      </h1>
      <Accordion items={items} />
    </section>
  );
}