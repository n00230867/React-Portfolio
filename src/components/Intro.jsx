import TextType from "./animations/TextType";

import { Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <header
      id="intro"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Soft background glow - adapts to theme */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-400/5 blur-[160px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto grid gap-16 text-center">
        {/* Top micro row */}
        <div className="flex justify-between text-xs tracking-widest text-muted-foreground">
          <span>PORTFOLIO 2025</span>
          <span>IRELAND</span>
        </div>

        {/* Main content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-extralight leading-[0.9] tracking-tight">
              Eduards Oss
            </h1>

            <p className="uppercase text-xs tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
              Frontend Developer
            </p>
          </div>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I build clean, high-performance interfaces with a focus on usability,
            motion, and visual precision. My goal is simple: make the web feel
            better to use.
          </p>

          {/* Status row */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Available for work
            </span>
            <span>Remote / On-site</span>
            <span className="text-emerald-600 dark:text-emerald-400">Student @ IADT</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button
              asChild
              className="rounded-full px-6 bg-emerald-600 hover:bg-emerald-700"
            >
              <a href="#projects">
                View Projects <ArrowDownRight className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <Button asChild variant="outline" className="rounded-full px-6">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Shadcn",
              "PHP",
              "Laravel",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-emerald-200/60 bg-background"
              >
                {tech}
              </span>
            ))}
          </div>


          {/* Socials */}
          <div className="flex justify-center items-center gap-8 pt-6 text-muted-foreground">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-emerald-600 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
