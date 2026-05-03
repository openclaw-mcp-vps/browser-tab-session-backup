export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Lose a Browser Session Again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TabVault auto-saves every open tab every 5 minutes and syncs to the cloud.
          Restore any session from any point in time with a single click.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get TabVault — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works with Chrome &amp; Edge.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⏱</div>
            <h3 className="font-semibold text-white mb-1">Auto-save every 5 min</h3>
            <p className="text-sm text-[#8b949e]">Continuous snapshots of all open tabs, silently running in the background.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">☁️</div>
            <h3 className="font-semibold text-white mb-1">Cloud sync &amp; history</h3>
            <p className="text-sm text-[#8b949e]">Sessions stored securely in the cloud. Access your history from any device.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔁</div>
            <h3 className="font-semibold text-white mb-1">One-click restore</h3>
            <p className="text-sm text-[#8b949e]">Pick any snapshot and reopen all tabs exactly as they were.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$8</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited tab snapshots</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 90-day session history</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cloud sync across devices</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Web dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Chrome &amp; Edge support</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the auto-save work?</h3>
            <p className="text-sm text-[#8b949e]">The Chrome extension runs silently and captures all open tab URLs and metadata every 5 minutes, then syncs them to your secure cloud account.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I restore tabs from a week ago?</h3>
            <p className="text-sm text-[#8b949e]">Yes. TabVault keeps 90 days of session history. Browse your timeline on the web dashboard and restore any snapshot instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my browsing data private?</h3>
            <p className="text-sm text-[#8b949e]">Only tab URLs and titles are stored — no page content. Data is encrypted in transit and at rest, and never shared with third parties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TabVault. All rights reserved.
      </footer>
    </main>
  );
}
