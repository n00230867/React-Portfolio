export default function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/70 bg-card/60 text-xs uppercase tracking-[0.2em] text-muted-foreground">Stay in touch</div>
              <h2 className="text-3xl sm:text-4xl font-light">Let's build something thoughtful</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <a href="mailto:test@example.com" className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300">
                    <span className="text-base sm:text-lg font-semibold">test@example.com</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Responds within 24 hours
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'GitHub', handle: '@mohammedche', url: '#' },
                  { name: 'IADT', handle: '@mohammedche', url: '#' },
                  { name: 'HubSpot Community', handle: '@mohammedche', url: '#' },
                  { name: 'LinkedIn', handle: 'mohammedche', url: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group p-5 border border-border/70 rounded-2xl hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-lg bg-card/70 backdrop-blur"
                  >
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-foreground group-hover:text-muted-foreground transition-colors duration-300 flex items-center gap-2">
                        {social.name}
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background text-xs group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
    );
}