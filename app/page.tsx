"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "mission", label: "Mission" },
  { id: "edge", label: "Edge" },
  { id: "mindset", label: "Mindset" },
  { id: "money", label: "Risk" },
  { id: "market", label: "Market" },
  { id: "methodology", label: "System" },
];

function MarketPulseChart() {
  const path =
    "M0,60 C40,20 80,100 120,60 C160,20 200,100 240,60";

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <svg viewBox="0 0 240 120" className="w-full h-40">
        <motion.path
          d={path}
          fill="transparent"
          stroke="#facc15"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.circle
          cx="240"
          cy="60"
          r="4"
          fill="#facc15"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
        />
      </svg>
    </div>
  );
}

function Ticker() {
  const items = [
    "NIFTY 50 ▲ 24,850",
    "BANKNIFTY ▲ 52,120",
    "SENSEX ▲ 81,400",
    "OPTIONS FLOW ACTIVE",
    "VOLATILITY HIGH",
  ];

  return (
    <div className="w-full overflow-hidden border-b border-yellow-500/20 bg-black/60 backdrop-blur">
      <motion.div
        className="flex gap-10 whitespace-nowrap py-2 text-xs text-yellow-300"
        animate={{ x: [0, -500] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        {items.concat(items).map((i, idx) => (
          <span key={idx}>{i}</span>
        ))}
      </motion.div>
    </div>
  );
}

function CursorGlow() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const el = document.getElementById("cursor-glow");
      if (el) {
        el.style.left = e.clientX + "px";
        el.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed w-72 h-72 rounded-full opacity-20 blur-3xl bg-yellow-500 -translate-x-1/2 -translate-y-1/2"
    />
  );
}

export default function Page() {
  const [active, setActive] = useState("mission");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: 0 };
        return { id: s.id, top: el.getBoundingClientRect().top };
      });

      const visible = offsets
        .filter((o) => o.top < 200)
        .sort((a, b) => b.top - a.top)[0];

      if (visible) setActive(visible.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <CursorGlow />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-bg" />
      </div>

      <style jsx>{`
        .grid-bg {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: moveGrid 18s linear infinite;
        }

        @keyframes moveGrid {
          0% { transform: translate(0,0); }
          100% { transform: translate(60px,60px); }
        }
      `}</style>

      {/* TICKER */}
      <Ticker />

      {/* NAV */}
      <div className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-yellow-500/20">
        <div className="flex overflow-x-auto gap-4 px-4 py-3 text-sm whitespace-nowrap">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-3 py-1 rounded-full border transition ${
                active === s.id
                  ? "bg-yellow-500 text-black"
                  : "border-yellow-500/30 text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="text-center py-28 px-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-yellow-400"
        >
          DST Wealth Builder
        </motion.h1>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Institutional-Grade Trading Mindset. Built for Consistency.
        </p>

        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-400">
          <span>10+ Years Experience</span>
          <span>•</span>
          <span>Risk First</span>
          <span>•</span>
          <span>System Trading</span>
        </div>

        <MarketPulseChart />
      </section>

      {/* SECTIONS */}
      <section id="edge" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-4">Edge</h2>
        <p className="text-gray-300">
          We don’t predict markets. We execute systems with risk control and discipline.
        </p>
      </section>

      <section id="mission" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-4">Mission</h2>
        <p className="text-gray-300">
          Build disciplined traders who survive first, then scale consistently.
        </p>
      </section>

      <section id="mindset" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-4">Mindset</h2>
        <p className="text-gray-300">
          Emotional control and patience define long-term success.
        </p>
      </section>

      <section id="money" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-4">Risk Management</h2>
        <p className="text-gray-300">
          Capital protection first. Returns come after risk control.
        </p>
      </section>

      <section id="market" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-4">Market</h2>
        <p className="text-gray-300">
          Price action and liquidity drive all decisions.
        </p>
      </section>

      <section id="methodology" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-4">System</h2>
        <p className="text-gray-300">
          Rule-based execution with strict entry, exit, and journaling.
        </p>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-3xl text-yellow-400 font-bold">
          Join DST Wealth Builder
        </h2>

        <p className="text-gray-400 mt-2">
          Build consistency. Eliminate randomness.
        </p>

        <a
          href="https://t.me/dstwealthbuilder"
          className="mt-6 inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold"
        >
          Enter Community
        </a>
      </section>
    </div>
  );
}
