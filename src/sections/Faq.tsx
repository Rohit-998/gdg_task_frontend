import { Accordion } from "../components/Accordion";

const items = [
  {
    id: "what-is-gdg",
    question: "What is GDG?",
    answer:
      "Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
    bar: "/redbar2.svg",
    AnsClassName:
      "flex-1  border-9 rounded-r-3xl md:rounded-r-3xl lg:py-7 lg:pl-5 lg:pr-3  md:py-3 md:pl-5 md:pr-3 pr-3 pl-3 py-2 text-sm text-gray-700 shadow-sm border-[#E1E1E1] lg:py-15 md:py-15    ",
    barWidth: 9,
    Arrow: "/redArrow.svg",
  },
  {
    id: "join",
    question: "How can you become a part of GDG?",
    answer:
      "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.",
    bar: "/greenbar.svg",
    AnsClassName:
      "flex-1  border-9 rounded-r-3xl lg:py-23 md:py-23 pl-3 pr-4 py-14 text-sm text-gray-700 shadow-sm border-[#E1E1E1] ",
    barWidth: 8,
    Arrow: "/greenArrow.svg",
  },
  {
    id: "lead",
    question: "What does a GDG Lead do?",
    answer:
      "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
    bar: "/bluebar.svg",
    AnsClassName:
      "flex-1  border-9 rounded-r-3xl py-12 pl-5 pr-6 text-sm text-[#5F5F5F] shadow-2xl border-[#E1E1E1] md:py-17 lg:py-17 ",
    barWidth: 7,
    Arrow: "/blueArrow.svg",
  },
  {
    id: "is-dsc-google",
    question: "How is DSC related to Google?",
    answer:
      "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
    bar: "/yellowbar.svg",
    AnsClassName:
      "flex-1  border-9 rounded-r-3xl py-12 pl-5 pr-6 text-sm text-[#5F5F5F] shadow-2xl border-[#E1E1E1] md:py-17 lg:py-17 ",
    barWidth: 7,
    Arrow: "/yellowArrow.svg",
  },
  {
    id: "contact",
    question: "How to reach us?",
    answer: "You can contact us at dsc-rbce@gmail.com",
    bar: "/redbar4.svg",
    AnsClassName:
      "flex-1  border-9 rounded-r-3xl py-8 pl-5 pr-6 text-sm text-[#5F5F5F] shadow-2xl border-[#E1E1E1] md:py-12 lg:py-12 ",
    barWidth: 6,
    Arrow: "/redArrow.svg",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">FAQs</h2>
      <Accordion items={items} />
    </section>
  );
}
