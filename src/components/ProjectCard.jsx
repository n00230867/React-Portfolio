import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

// Contract:
// props.project: {
//   slug, title, description, screenshots[{url,caption}], url, github, date, tags[]
// }
// Renders a card with screenshot, title, description, tags, and action links.

export function ProjectCard({ project }) {
  const { title, description, screenshots = [], url, github, tags = [], date } = project;
  const screenshot = screenshots[0];

  return (
    <Card className="group flex flex-col h-full overflow-hidden border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
      {screenshot?.url && (
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-emerald-500/5 to-transparent">
          <img
            src={screenshot.url}
            alt={screenshot.caption || `${title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <CardHeader className="pb-3 space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{title}</CardTitle>
          {date && <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium px-2 py-1 rounded-full bg-emerald-500/10">{date}</span>}
        </div>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-4">
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0.5 font-medium border-emerald-500/20 hover:bg-emerald-500/10 transition-colors">
                {tag}
              </Badge>
            ))}
            {tags.length > 4 && (
              <Badge variant="secondary" className="text-[10px] px-2 py-0.5 font-medium">
                +{tags.length - 4}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto flex items-center gap-3 pt-4 border-t border-emerald-500/10">
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 transition-all"
          >
            Live Site
          </a>
        )}
        {github && github.trim() !== "" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 transition-all"
          >
            GitHub
          </a>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="ghost" className="cursor-pointer ml-auto text-xs hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400">
              View Details →
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] sm:max-w-3xl lg:max-w-5xl p-0 overflow-hidden border-emerald-500/20">
            <DialogHeader className="px-6 pt-6 pb-4 border-b border-emerald-500/10">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl">{title}</DialogTitle>
                {date && <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium px-3 py-1 rounded-full bg-emerald-500/10">{date}</span>}
              </div>
              <DialogDescription className="text-base leading-relaxed pt-2">
                {description}
              </DialogDescription>
            </DialogHeader>
            <div className="px-6 pb-6 pt-6">
              {screenshots?.length > 0 ? (
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {screenshots.map((shot, idx) => (
                        <CarouselItem key={idx}>
                          <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={shot.url}
                              alt={shot.caption || `${title} screenshot ${idx + 1}`}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          {shot.caption && (
                            <p className="mt-2 text-sm text-muted-foreground">{shot.caption}</p>
                          )}
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              ) : (
                <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                  No screenshots available
                </div>
              )}

              {tags?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="uppercase tracking-wide">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <DialogFooter className="mt-6 flex gap-3">
                {url && (
                  <Button asChild>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      Live Site
                    </a>
                  </Button>
                )}
                {github && github.trim() !== "" && (
                  <Button variant="secondary" asChild>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                )}
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
