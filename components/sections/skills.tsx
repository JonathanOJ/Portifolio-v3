"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n/context";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { t } = useI18n();

  const skillSections = [
    {
      title: t.skills.sections.coreStack.title,
      subtitle: t.skills.sections.coreStack.subtitle,
      icon: "🚀",
      categories: [
        {
          name: t.skills.categories.frontend,
          skills: [
            { name: "React", projects: ["Vidaplan CRM", "Wave Odonto"] },
            { name: "Angular", projects: ["CISS", "HopeShare"] },
            { name: "TypeScript", projects: ["Vidaplan CRM", "HopeShare", "CISS", "LeadFinder", "Wave Odonto"] },
            { name: "Tailwind CSS", projects: ["HopeShare", "Wave Odonto"] },
            { name: "Micro-Frontend", projects: ["LeadFinder", "CISS"] },
          ],
        },
        {
          name: t.skills.categories.backend,
          skills: [
            { name: "Node.js", projects: ["HopeShare"] },
            { name: "Java", projects: ["CISS", "LeadFinder"] },
            { name: "Spring Boot", projects: ["CISS"] },
            { name: "Express", projects: ["HopeShare API"] },
            { name: "REST APIs", projects: ["Vidaplan CRM", "HopeShare", "CISS", "LeadFinder", "Wave Odonto"] },
          ],
        },
        {
          name: t.skills.categories.database,
          skills: [
            { name: "PostgreSQL", projects: ["Vidaplan CRM", "LeadFinder", "CISS"] },
            { name: "DynamoDB", projects: ["HopeShare"] },
            { name: "DB2", projects: ["CISS"] },
          ],
        },
      ],
    },
    {
      title: t.skills.sections.architecture.title,
      subtitle: t.skills.sections.architecture.subtitle,
      icon: "🧩",
      categories: [
        {
          name: "",
          skills: [
            { name: "Micro-Frontend", projects: ["LeadFinder", "CISS"] },
            { name: "Arquitetura Serverless", projects: ["HopeShare"] },
            { name: "MVC / Clean Architecture", projects: ["Vidaplan CRM", "HopeShare", "CISS"] },
            { name: "RBAC / RLS", projects: ["Vidaplan CRM"] },
            { name: "Integração com APIs externas", projects: ["CISS", "HopeShare"] },
          ],
        },
      ],
    },
    {
      title: t.skills.sections.cloud.title,
      subtitle: t.skills.sections.cloud.subtitle,
      icon: "☁️",
      categories: [
        {
          name: "",
          skills: [
            { name: "AWS", projects: ["HopeShare (Lambda, API Gateway, S3)"] },
            { name: "Cloudflare R2", projects: ["HopeShare"] },
            { name: "Docker", projects: ["CISS"] },
            { name: "CI/CD", projects: ["Vidaplan CRM", "CISS"] },
            { name: "Vercel", projects: ["HopeShare", "Wave Odonto"] },
            { name: "Kubernetes", projects: ["CISS"] },
          ],
        },
      ],
    },
    {
      title: t.skills.sections.tools.title,
      subtitle: t.skills.sections.tools.subtitle,
      icon: "🛠️",
      categories: [
        {
          name: "",
          skills: [
            { name: "Git & GitHub", projects: ["Todos os projetos"] },
            { name: "Testes automatizados", projects: ["Vitest, Jest, Testing Library"] },
            { name: "ESLint / Prettier", projects: ["Padrão em todos os projetos"] },
            { name: "Performance e otimização", projects: ["HopeShare", "Vidaplan CRM"] },
            { name: "UX & Acessibilidade", projects: ["Wave Odonto", "HopeShare"] },
          ],
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{t.skills.subtitle}</p>
        </motion.div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {skillSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.15 }}
            >
              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{section.icon}</span>
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">{section.subtitle}</p>
                </div>

                <div className="space-y-6">
                  {section.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      {category.name && (
                        <h4 className="text-sm font-semibold text-muted-foreground mb-3">{category.name}</h4>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{
                              duration: 0.3,
                              delay: sectionIndex * 0.15 + categoryIndex * 0.05 + skillIndex * 0.03,
                            }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="relative"
                          >
                            <Badge
                              variant="secondary"
                              className="px-4 py-2 text-sm font-medium cursor-default transition-all hover:scale-105 hover:shadow-md hover:bg-primary/10 hover:border-primary/20"
                            >
                              {skill.name}
                            </Badge>

                            {hoveredSkill === skill.name && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded-md shadow-lg whitespace-nowrap z-10 pointer-events-none"
                              >
                                <div className="text-xs">
                                  <div className="font-semibold mb-1 text-foreground">{t.skills.usedIn}</div>
                                  <div className="text-muted-foreground">{skill.projects.join(", ")}</div>
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                  <div className="border-4 border-transparent border-t-border" />
                                  <div className="border-4 border-transparent border-t-popover -mt-[9px]" />
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
