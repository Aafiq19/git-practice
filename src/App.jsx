import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Thanks for subscribing with ${email}!`)
    setEmail('')
  }

  return (
    <div className="bg-slate-50 text-slate-900">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-teal-400 shadow-md"></div>
            <span className="text-2xl font-semibold tracking-tight text-slate-900">MaterialFlow</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#features" className="hover:text-indigo-700 transition">Features</a>
            <a href="#pricing" className="hover:text-indigo-700 transition">Pricing</a>
            <a href="#testimonials" className="hover:text-indigo-700 transition">Testimonials</a>
            <a href="#contact" className="hover:text-indigo-700 transition">Contact</a>
          </div>

          <button className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-2 text-sm font-semibold shadow-lg shadow-indigo-200/30 hover:scale-[1.02] transition">
            Get Started
          </button>
        </div>
      </nav>

      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-white to-cyan-50">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-100 text-cyan-800 px-4 py-2 text-sm font-semibold mb-6">
                Material-inspired design with Tailwind
              </span>
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                Build a beautiful experience with modern UI colors.
              </h1>
              <p className="max-w-2xl text-lg text-slate-600 leading-8 mb-8">
                Fast, polished, and mobile-friendly landing page style using a Material UI color palette with Tailwind utility-first layout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <button className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-white text-base font-semibold shadow-xl shadow-cyan-200/40 hover:-translate-y-0.5 transition">
                  Start Free Trial
                </button>
                <button className="rounded-full border border-slate-300 bg-white px-8 py-4 text-slate-700 text-base font-semibold hover:border-cyan-400 hover:text-cyan-700 transition">
                  View Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-24 w-24 rounded-3xl bg-indigo-100 blur-2xl"></div>
              <div className="relative rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-200/70 border border-slate-200">
                <div className="mb-6 flex items-center justify-between gap-4 bg-slate-950 text-white rounded-3xl px-5 py-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Dashboard</p>
                    <h2 className="text-2xl font-semibold">Activity Overview</h2>
                  </div>
                  <div className="rounded-3xl bg-cyan-500 px-4 py-2 text-sm font-semibold">Live</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Users', value: '12.4k' },
                    { label: 'Growth', value: '+18%' },
                    { label: 'Revenue', value: '$71.2k' },
                    { label: 'Retention', value: '92%' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-slate-200 p-5 bg-slate-50">
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-600 font-semibold mb-3">Features</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">Designed for modern teams</h2>
              <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
                Material-inspired color accents and clean card layouts help your product feel premium from first glance.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Fast Setup', description: 'Deploy quickly with ready-made UI sections.', tone: 'bg-cyan-50 text-cyan-700' },
                { title: 'Accessible', description: 'Built with clean spacing, contrast, and clarity.', tone: 'bg-indigo-50 text-indigo-700' },
                { title: 'Connected', description: 'Integrated interactions with consistent color balance.', tone: 'bg-amber-50 text-amber-700' },
              ].map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
                  <div className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${feature.tone}`}>
                    {feature.title}
                  </div>
                  <p className="mt-6 text-slate-600 leading-7">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600 font-semibold mb-3">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">Flexible plans for every team</h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              Choose a plan that matches your workflow and grow with confidence.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { name: 'Starter', price: '$29', details: ['10 Projects', '5 GB Storage', 'Email Support'], accent: 'from-cyan-500 to-sky-500', popular: false },
              { name: 'Growth', price: '$79', details: ['Unlimited Projects', '50 GB Storage', 'Priority Support'], accent: 'from-indigo-600 to-cyan-500', popular: true },
              { name: 'Enterprise', price: '$199', details: ['Custom Volume', 'Dedicated Success', 'Advanced Security'], accent: 'from-amber-500 to-orange-500', popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-[2rem] border ${plan.popular ? 'border-indigo-300 shadow-2xl shadow-indigo-200/30' : 'border-slate-200'} bg-white p-8`}>
                {plan.popular && <div className="mb-4 inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">Most popular</div>}
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{plan.name}</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500">/ month</span>
                </div>
                <ul className="space-y-4 mb-8 text-slate-600">
                  {plan.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-slate-900 mt-1"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className={`w-full rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition ${plan.popular ? 'bg-gradient-to-r ' + plan.accent : 'bg-slate-900 hover:bg-slate-800'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-600 font-semibold mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">Loved by teams everywhere</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { name: 'Sarah Chen', role: 'CTO, TechCorp', quote: 'MaterialFlow made our product look polished instantly. The color system feels thoughtful and elegant.' },
              { name: 'Mike Rodriguez', role: 'Founder, StartupHub', quote: 'The page is clean, bold, and easy to navigate—exactly the energy we needed for our launch.' },
              { name: 'Emma Johnson', role: 'Senior Developer', quote: 'A premium UI feel with Tailwind utility classes made development fast and fun.' },
            ].map((item) => (
              <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
                <p className="text-slate-600 mb-6 leading-8">“{item.quote}”</p>
                <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-cyan-500 to-teal-400 text-white">
          <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let’s build something beautiful.</h2>
            <p className="text-lg text-slate-100 max-w-2xl mx-auto mb-8">Subscribe for updates, design tips, and early access to our next UI release.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4 sm:flex-row justify-center">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-white/30 bg-white/90 px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                required
              />
              <button type="submit" className="rounded-full bg-white px-8 py-4 text-slate-900 font-semibold shadow-xl shadow-slate-900/10 hover:scale-[1.02] transition">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-white mb-3">MaterialFlow</p>
            <p className="text-slate-400">A modern landing page with Material-inspired Tailwind styling.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100 mb-3">Product</p>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-100 mb-3">Company</p>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-100 mb-3">Legal</p>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2026 MaterialFlow. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
