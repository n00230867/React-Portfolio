export default function Navbar({ activeSection }) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
      <div className="flex flex-col gap-8">
        {["intro", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() =>
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-4"
          >
            {/* Minimal line indicator */}
            <span
              className={`h-px rounded-full transition-all duration-500
                ${
                  activeSection === section
                    ? "w-12 bg-emerald-600 dark:bg-emerald-400"
                    : "w-8 bg-border group-hover:w-10 group-hover:bg-emerald-600/50"
                }`}
            />

            {/* Clean uppercase label */}
            <span
              className={`text-[10px] uppercase tracking-[0.2em] font-light transition-all duration-300
                ${
                  activeSection === section
                    ? "text-emerald-600 dark:text-emerald-400 opacity-100"
                    : "text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-foreground"
                }`}
            >
              {section}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
