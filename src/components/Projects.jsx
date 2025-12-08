"use client";

import { useEffect, useRef, useState } from "react";
import projectsJSON from "@/assets/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Centered background glow */}
      {/* <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div> */}

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Animated Header */}
        <div
          className={`max-w-3xl space-y-8 transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <div className="flex items-center gap-6">
            <span className="h-[1px] w-12 bg-emerald-500/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-600">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-tight">
            Projects
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A curated selection of projects where I focus on clarity, motion,
            and performance across modern web experiences.
          </p>
        </div>

        {/* Animated Grid (staggered) */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projectsJSON.map((project, i) => (
            <div
              key={project.slug}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`transition-all duration-700
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
