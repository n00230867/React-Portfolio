export default function Navbar({ activeSection }) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
      <div className="flex flex-col gap-6">
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
            {/* Active indicator — smoother + more elegant */}
            <span
              className={`w-[3px] h-6 rounded-full transition-all duration-300
                ${
                  activeSection === section
                    ? "bg-emerald-500 scale-y-110"
                    : "bg-border dark:bg-emerald-900 group-hover:bg-emerald-400"
                }`}
            />

            {/* Label — cleaner + calmer */}
            <span
              className={`text-sm capitalize tracking-wide transition-colors duration-300
                ${
                  activeSection === section
                    ? "text-emerald-600 font-medium"
                    : "text-muted-foreground group-hover:text-emerald-600"
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
