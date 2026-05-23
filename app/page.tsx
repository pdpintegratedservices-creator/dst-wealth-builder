"use client";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (e: any) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").replace("#", "");
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center pt-28 pb-16">

        <div className="border border-yellow-500 px-10 py-6 rounded-2xl">
          <h1 className="text-6xl font-bold tracking-widest">DST</h1>
        </div>

        <p className="mt-6 text-lg text-gray-300 max-w-xl">
          Learn to build wealth through discipline, strategy and honesty.
        </p>

      </section>

      {/* NAVIGATION */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 border-y border-gray-800 py-4 sticky top-0 bg-black z-50">

        <a href="#mission" className="hover:text-yellow-400">Mission</a>
        <a href="#mindset" className="hover:text-yellow-400">Mindset</a>
        <a href="#money" className="hover:text-yellow-400">Money Management</a>
        <a href="#market" className="hover:text-yellow-400">Market Understanding</a>
        <a href="#method" className="hover:text-yellow-400">Methodology</a>
        <a href="#momentum" className="hover:text-yellow-400">Momentum</a>

      </nav>

      {/* SECTIONS */}

      <section id="mission" className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Mission</h2>
        <p className="text-gray-300">
          Build disciplined traders who focus on process, not hype. Trading is a skill, not luck.
        </p>
      </section>

      <section id="mindset" className="px-6 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Mindset</h2>
        <p className="text-gray-300">
          Emotional discipline, patience, and consistency define long-term success in markets.
        </p>
      </section>

      <section id="money" className="px-6 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Money Management</h2>
        <p className="text-gray-300">
          Capital protection and position sizing are more important than entries.
        </p>
      </section>

      <section id="market" className="px-6 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Market Understanding</h2>
        <p className="text-gray-300">
          Understand price action, structure, and institutional behavior.
        </p>
      </section>

      <section id="method" className="px-6 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Methodology</h2>
        <p className="text-gray-300">
          Build rule-based systems for entry, exit, and risk control.
        </p>
      </section>

      <section id="momentum" className="px-6 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Momentum & Consistency</h2>
        <p className="text-gray-300">
          Consistency and journaling turn knowledge into results.
        </p>
      </section>

      {/* WHATSAPP CTA */}
      <section className="py-16 text-center border-t border-gray-800 mt-10">

        <h2 className="text-2xl font-semibold text-white mb-6">
          Community Access
        </h2>

        <a
          href="https://wa.me/917011895375"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-medium transition-all"
        >

          {/* phone icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15
              1.657 0 3-1.343 3-3v-1.086a1.5 1.5 0 0 0-1.06-1.436l-3.39-.97a1.5
              1.5 0 0 0-1.518.45l-.88.88a12.035 12.035 0 0
              1-5.657-5.657l.88-.88a1.5 1.5 0 0 0 .45-1.518l-.97-3.39A1.5
              1.5 0 0 0 8.336 3.75H7.25c-1.657 0-3 1.343-3 3Z"
            />
          </svg>

          <span>Join WhatsApp — 7011895375</span>

        </a>

      </section>

    </main>
  );
}
