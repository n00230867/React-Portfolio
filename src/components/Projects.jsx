import { useState } from 'react';
import projectsJSON from '@/assets/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const [projects] = useState(projectsJSON);

  const projectCards = projects.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ));

  return (
    <section id="projects" className="py-20 sm:py-32 opacity-0">
      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-4 sm:space-y-5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/70 bg-card/60 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Recent Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-light">Selected Projects</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A mix of client work, prototypes, and experiments focused on performance, accessibility, and thoughtful interactions.
            </p>
          </div>
          <div className="flex gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/70 bg-background/60 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Live builds
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/70 bg-background/60 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              UX polish
            </div>
          </div>
        </div>
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectCards}
        </div>
      </div>
    </section>
  );
};