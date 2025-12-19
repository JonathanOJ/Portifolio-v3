"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  const projects = [
    {
      id: 1,
      name: t.projects.items.hopeshare.name,
      type: t.projects.items.hopeshare.type,
      description: t.projects.items.hopeshare.description,
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
      features: t.projects.items.hopeshare.features,
      highlights: t.projects.items.hopeshare.highlights,
    },
    {
      id: 2,
      name: t.projects.items.vidaplan.name,
      type: t.projects.items.vidaplan.type,
      description: t.projects.items.vidaplan.description,
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
      features: t.projects.items.vidaplan.features,
      security: t.projects.items.vidaplan.security,
      highlights: t.projects.items.vidaplan.highlights,
    },
    {
      id: 3,
      name: t.projects.items.waveodonto.name,
      type: t.projects.items.waveodonto.type,
      description: t.projects.items.waveodonto.description,
      link: "https://waveodonto.com.br/",
      featured: false,
      stack: {
        frontend: ["React", "JavaScript", "TypeScript", "CSS moderno"],
      },
      highlights: t.projects.items.waveodonto.highlights,
    },
  ];

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
                className={`h-full flex flex-col hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 ${
                  project.featured ? "bg-gradient-to-br from-primary/5 to-accent/5" : ""
                }`}
              >
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
                        {project.features.slice(0, 4).map((feature) => (
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
                        {project.security.slice(0, 3).map((security) => (
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
                        {project.highlights.map((highlight) => (
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
