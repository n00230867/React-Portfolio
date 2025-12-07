import TextType from "@/components/animations/TextType";

export default function Intro() {
  return (
    <header id="intro" className="min-h-screen flex items-center">
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-8 sm:space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border/70 bg-secondary/40 text-sm text-muted-foreground backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects and collaborations
          </div>

          <div className="space-y-4 sm:space-y-3">
            <div className="text-sm text-muted-foreground tracking-wider">PORTFOLIO · 2025</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
              <TextType
                text={["Eduards Oss"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                loop={false}
                cursorCharacter="|"
              />
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Frontend developer crafting polished digital experiences where
              <span className="text-foreground"> design</span> meets
              <span className="text-foreground"> technology</span>. I blend interaction design, accessibility, and clean code to ship products people enjoy using.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 bg-background/60 shadow-sm">
                <span className="text-foreground font-medium">Based in</span> Ireland
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 bg-background/60 shadow-sm">
                <span className="text-foreground font-medium">Role</span> Frontend Developer
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold shadow hover:shadow-lg transition duration-300"
              >
                View portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border/80 text-sm font-semibold hover:border-foreground/60 hover:text-foreground transition duration-300"
              >
                Let's talk
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-6 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{ label: 'Experience', value: '3+ yrs', detail: 'Frontend & UI' }, { label: 'Projects', value: '20+', detail: 'Web & mobile' }, { label: 'Specialty', value: 'React', detail: 'Animations, UI systems' }, { label: 'Tools', value: 'Design systems', detail: 'Tailwind, shadcn' }].map((item) => (
              <div key={item.label} className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 shadow-sm backdrop-blur">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</div>
                <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.detail}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-sm text-muted-foreground font-mono">FOCUS AREAS</div>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "GSAP"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full border border-border/70 bg-background/60 hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
