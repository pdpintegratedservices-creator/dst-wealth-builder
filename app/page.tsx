"use client";

export default function DSTWealthBuilderWebsite() {
  const fiveM = [
    {
      title: 'Mindset',
      desc: 'Develop emotional discipline, patience, and psychological strength required for consistent trading.',
    },
    {
      title: 'Money Management',
      desc: 'Learn capital protection, position sizing, and controlled risk exposure.',
    },
    {
      title: 'Market Understanding',
      desc: 'Understand price action, options behavior, market structure, and institutional movement.',
    },
    {
      title: 'Methodology',
      desc: 'Build rule-based trading systems with proper entry, exit, and risk strategies.',
    },
    {
      title: 'Momentum & Consistency',
      desc: 'Focus on long-term consistency, journaling, and performance improvement.',
    },
  ]

  const services = [
    'Options Trading',
    'Market Psychology',
    'Risk Management',
    'Live Sessions',
    'Community Learning',
  ]

  const testimonials = [
    'Finally found a trading community focused on realistic learning instead of fake promises.',
    'The risk management lessons completely changed how I approach trading.',
    'The best part is the honesty and practical market understanding.',
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-yellow-500/10 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
              DST Wealth Builder
            </h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#framework" className="hover:text-yellow-400 transition">5M Model</a>
            <a href="#services" className="hover:text-yellow-400 transition">Learning</a>
            <a href="#community" className="hover:text-yellow-400 transition">Community</a>
          </div>

          <a
            href="https://t.me/dstwealthbuilder"
            target="_blank"
            className="bg-yellow-400 text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Join Community
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex border border-yellow-500/30 rounded-full px-4 py-2 text-yellow-400 text-sm mb-8 bg-yellow-500/5">
              Premium Trading & Wealth Community
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              Building Real
              <span className="block text-yellow-400">Traders.</span>
              <span className="block text-4xl lg:text-5xl mt-4 text-gray-300">
                Not Dream Sellers.
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl">
              Learn practical trading, risk management, and wealth-building strategies from a working professional with 10+ years of MNC experience and real market exposure.
            </p>

            <p className="mt-5 text-gray-500 max-w-xl">
              No fake luxury. No unrealistic screenshots. Just disciplined learning and consistent growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="https://t.me/dstwealthbuilder"
                target="_blank"
                className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                Join Free Community
              </a>

              <a
                href="#services"
                className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition"
              >
                Explore Learning
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
                <p className="text-gray-500 text-sm mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">1,247+</h3>
                <p className="text-gray-500 text-sm mt-2">Community Members</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
                <p className="text-gray-500 text-sm mt-2">Learning Sessions</p>
              </div>
            </div>
          </div>

          {/* Dashboard UI */}
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-500/20 blur-3xl rounded-full" />

            <div className="relative bg-zinc-950 border border-yellow-500/20 rounded-[40px] p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold">Trading Dashboard</h3>
                  <p className="text-gray-500 mt-1">Live Market Overview</p>
                </div>

                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                  +5.28%
                </div>
              </div>

              <div className="bg-black rounded-3xl border border-yellow-500/10 p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span>NIFTY</span>
                  <span>BANKNIFTY</span>
                  <span>SENSEX</span>
                </div>

                <div className="h-72 flex items-center justify-center">
                  <svg viewBox="0 0 500 250" className="w-full h-full">
                    <defs>
                      <linearGradient id="goldGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#facc15" />
                        <stop offset="100%" stopColor="#000000" />
                      </linearGradient>
                    </defs>

                    <polyline
                      fill="none"
                      stroke="#facc15"
                      strokeWidth="5"
                      points="0,210 50,190 100,195 150,150 200,165 250,120 300,135 350,85 400,100 450,45 500,60"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-zinc-900 rounded-2xl p-4 border border-yellow-500/10">
                    <p className="text-gray-500 text-sm">Win Ratio</p>
                    <h4 className="text-2xl font-bold mt-2 text-yellow-400">78%</h4>
                  </div>

                  <div className="bg-zinc-900 rounded-2xl p-4 border border-yellow-500/10">
                    <p className="text-gray-500 text-sm">Risk Control</p>
                    <h4 className="text-2xl font-bold mt-2 text-yellow-400">Strong</h4>
                  </div>

                  <div className="bg-zinc-900 rounded-2xl p-4 border border-yellow-500/10">
                    <p className="text-gray-500 text-sm">Growth</p>
                    <h4 className="text-2xl font-bold mt-2 text-yellow-400">+42%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ...Rest of the file continues; omitted for brevity in this excerpt; your code will be used in full in the real file... */}
    </div>
  )
}
