import TextType from "./animations/TextType";

import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-10 px-6 overflow-hidden"
    >
      {/* Subtle green glow */}
      {/* <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[620px] w-[620px] rounded-full bg-emerald-500/5 blur-[260px]" />
      </div> */}

      <div className="max-w-7xl mx-auto grid gap-24 lg:grid-cols-2 items-start">
        
        {/* LEFT — Main Contact */}
        <div className="space-y-10 max-w-xl">
          {/* Matching section header style (same as Projects) */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <span className="h-[1px] w-12 bg-emerald-500/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                Contact
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              Let’s work together
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            If you’re looking for a frontend developer who cares about clarity,
            performance, and real user experience, I’d love to hear about your
            project or idea.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6"
            >
              <a href="mailto:test@example.com">
                test@example.com <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Ireland · Remote
            </div>
          </div>
        </div>

        {/* RIGHT — Socials */}
        <div className="space-y-10">
          <div className="text-xs tracking-widest text-muted-foreground">
            ELSEWHERE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="#"
              className="group flex items-center gap-3 text-muted-foreground hover:text-emerald-600 transition"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-3 text-muted-foreground hover:text-emerald-600 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:test@example.com"
              className="group flex items-center gap-3 text-muted-foreground hover:text-emerald-600 transition"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
