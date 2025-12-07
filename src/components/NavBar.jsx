

export default function Navbar({ activeSection }){
    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col gap-4 p-4 rounded-2xl bg-background/70 border border-border/70 shadow-sm backdrop-blur">
            {['intro', 'projects', 'contact'].map(section => (
                <button
                    key={section}
                    onClick={() => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}
                    className={`group flex items-center gap-3 pr-4 transition-all duration-300`}
                >
                  <span
                    className={`h-10 w-2 rounded-full ${activeSection === section ? 'bg-foreground shadow-[0_0_0_3px] shadow-foreground/10' : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/60'}`}
                  />
                  <span className={`text-sm capitalize ${activeSection === section ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    {section}
                  </span>
                </button>
            ))}
          </div>
        </nav>
    );
}