export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Moderation
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Raids Before They{' '}
          <span className="text-[#58a6ff]">Destroy</span> Your Server
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Real-time behavioral pattern detection identifies coordinated raids by analyzing join velocity, message bursts, and account age — then acts automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Protect My Server — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with any Discord server.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Join Pattern Analysis', desc: 'Detects abnormal spikes in new member joins within configurable time windows.' },
            { title: 'Message Velocity', desc: 'Flags coordinated message floods from multiple accounts acting in unison.' },
            { title: 'Account Age Filter', desc: 'Automatically quarantines newly created accounts that match raid signatures.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited servers',
              'Real-time raid detection',
              'Auto-ban & quarantine actions',
              'Customizable thresholds',
              'Incident log & alerts',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the bot connect to my server?',
              a: 'After subscribing, you receive a bot invite link. Add it to your server with the required permissions and it starts monitoring immediately — no coding required.'
            },
            {
              q: 'Will it ban legitimate new members?',
              a: 'No. The detection engine uses multi-signal analysis combining join timing, message patterns, and account age. False positives are extremely rare, and you can tune sensitivity thresholds.'
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes, cancel anytime from your billing portal. Your bot access continues until the end of the billing period with no questions asked.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Discord Raid Pattern Blocker. Not affiliated with Discord Inc.
      </footer>
    </main>
  )
}
