import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Tech } from "./sections/Tech";
import { Faq } from "./sections/Faq";
import Mission from "./sections/Mission";
import Footer from "./sections/Footer";


export default function App() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />

      <main id="home">
        <Hero />

        <section id="mission" className="py-16">
          <Mission />
        </section>
        <section className="py-10">
          <Stats />
        </section>

        <section id="tech" className="py-4">
          <Tech />
        </section>


        <section id="faq" className="py-16">
          <Faq />
        </section>
      </main>

      <Footer />
    </div>
  );
}
