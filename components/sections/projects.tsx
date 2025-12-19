"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

interface ProjectData {
  id: number;
  slug: string;
  image: string;
  link: string;
  featured: boolean;
  stack: {
    frontend?: string[];
    backend?: string[];
    testing?: string[];
  };
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  const projectsData: ProjectData[] = [
    {
      id: 1,
      slug: "hopeshare",
      image: "/images/hopeshare.jpeg",
      link: "https://hope-share-frontend.vercel.app/hopeshare/home",
      featured: true,
      stack: {
        frontend: ["Angular 17", "TypeScript", "Tailwind CSS", "PrimeNG", "Angular Material", "RxJS"],
        backend: [
          "Node.js",
          "Express",
          "Serverless Framework",
          "AWS Lambda",
          "API Gateway",
          "DynamoDB",
          "Cloudflare R2",
          "Mercado Pago",
        ],
      },
    },
    {
      id: 2,
      slug: "vidaplan",
      image: "/images/vidaplancrm.jpeg",
      link: "#",
      featured: true,
      stack: {
        frontend: [
          "React 18",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "Radix UI",
          "shadcn/ui",
          "React Router DOM",
          "React Hook Form",
          "Zod",
          "TanStack Query",
          "@dnd-kit",
        ],
        backend: [
          "PostgreSQL",
          "Edge Functions",
          "Deno Runtime",
          "Arquitetura Serverless",
          "Autenticação JWT",
          "Row Level Security (RLS)",
        ],
        testing: ["Vitest", "Testing Library"],
      },
    },
    {
      id: 3,
      slug: "waveodonto",
      image: "/images/waveodontologia.jpeg",
      link: "https://waveodonto.com.br/",
      featured: false,
      stack: {
        frontend: ["React", "JavaScript", "TypeScript", "CSS moderno"],
      },
    },
  ];

  const projects = projectsData.map((data) => ({
    ...data,
    name: t.projects.items[data.slug as keyof typeof t.projects.items].name,
    type: t.projects.items[data.slug as keyof typeof t.projects.items].type,
    description: t.projects.items[data.slug as keyof typeof t.projects.items].description,
    features: (t.projects.items[data.slug as keyof typeof t.projects.items] as any).features,
    security: (t.projects.items[data.slug as keyof typeof t.projects.items] as any).security,
    highlights: t.projects.items[data.slug as keyof typeof t.projects.items].highlights,
  }));

  return (
    <section id="projetos" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}{" "}
            <Link href="https://github.com/JonathanOJ" target="_blank" className="text-primary hover:underline">
              {t.projects.github}
            </Link>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card
                className={`h-full flex flex-col hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden pt-0 ${
                  project.featured ? "bg-gradient-to-br from-primary/5 to-accent/5" : ""
                }`}
              >
                <div className="relative w-full h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.featured}
                  />
                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={project.featured ? "default" : "secondary"}>{project.type}</Badge>
                    {project.featured && (
                      <Badge variant="outline" className="bg-primary/10">
                        {t.projects.featured}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">{t.projects.sections.stack}</h4>
                    <div className="space-y-3">
                      {project.stack.frontend && (
                        <div>
                          <p className="text-xs text-muted-foreground mb-2">{t.projects.sections.frontend}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.frontend.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.stack.backend && (
                        <div>
                          <p className="text-xs text-muted-foreground mb-2">{t.projects.sections.backend}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.backend.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.stack.testing && (
                        <div>
                          <p className="text-xs text-muted-foreground mb-2">{t.projects.sections.testing}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.testing.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {project.features && (
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">{t.projects.sections.features}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.features.slice(0, 4).map((feature: string) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.security && (
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">{t.projects.sections.security}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.security.slice(0, 3).map((security: string) => (
                          <li key={security} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{security}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.highlights && (
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">{t.projects.sections.highlights}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight: string) => (
                          <Badge key={highlight} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex items-center justify-end gap-2 border-t pt-4">
                  {project.link !== "#" && (
                    <Button size="sm" variant="outline" asChild className="rounded-full bg-transparent">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        {t.projects.viewProject}
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                  {project.link === "#" && (
                    <Badge variant="secondary" className="text-xs">
                      {t.projects.private}
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
            <Link href="https://github.com/JonathanOJ" target="_blank" rel="noopener noreferrer">
              {t.projects.viewAll}
              <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
