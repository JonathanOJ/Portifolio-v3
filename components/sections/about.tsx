"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"
import { TechCarousel } from "@/components/tech-carousel"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const timeline = [
    {
      type: "work",
      company: "CISS S.A – Gestão para o Varejo",
      location: "Dois Vizinhos – PR",
      period: "Out/2024 – Atual",
      current: true,
      positions: [
        {
          title: "Desenvolvedor Full-Stack Pleno",
          period: "Jun/2025 – Atual",
          current: true,
          description:
            "Atuação em projetos corporativos de grande escala, com maior participação em decisões técnicas e arquiteturais.",
          responsibilities: [
            "Atuação em projetos corporativos de grande escala",
            "Desenvolvimento Front-end com Angular 17 e TypeScript",
            "Participação ativa em decisões técnicas e funcionais",
            "Integração com APIs REST e regras de negócio",
            "Colaboração em serviços Back-end com Java 17 e Spring Boot",
          ],
          stack: [
            "Angular 17",
            "TypeScript",
            "Micro-Frontend",
            "Java 17",
            "Spring Boot",
            "PostgreSQL",
            "DB2",
            "REST APIs",
            "Git",
            "Scrum",
          ],
        },
        {
          title: "Desenvolvedor Full-Stack",
          period: "Out/2024 – Jun/2025",
          current: false,
          description:
            "Desenvolvimento e manutenção de portais corporativos escaláveis, com foco em interfaces modernas e integração com sistemas back-end.",
          responsibilities: [
            "Desenvolvimento e manutenção de portais corporativos escaláveis",
            "Implementação de interfaces com foco em UX, performance e responsividade",
            "Integração com sistemas back-end em Java + Spring Boot",
            "Aplicação de boas práticas de código e componentização",
          ],
          stack: [
            "Angular",
            "TypeScript",
            "Micro-Frontend",
            "Java",
            "Spring Boot",
            "DB2",
            "PostgreSQL",
            "REST",
            "Git",
            "JIRA",
          ],
        },
      ],
    },
    {
      type: "work",
      title: "Desenvolvedor Full-Stack",
      company: "LeadFinder | SmartCRM IA",
      location: "Dois Vizinhos – PR",
      period: "Mar/2023 – Out/2024",
      current: false,
      description:
        "Atuação no desenvolvimento e evolução de aplicações web e mobile, com foco em Front-end Angular, arquitetura Micro-Frontend e otimização de sistemas existentes.",
      responsibilities: [
        "Desenvolvimento de aplicações web e mobile",
        "Arquitetura Micro-Frontend",
        "Aplicações mobile híbridas com Ionic + Angular",
        "Integração com APIs REST e banco PostgreSQL",
      ],
      stack: ["Angular", "Ionic", "TypeScript", "Micro-Frontend", "Java", "PostgreSQL", "Git", "Scrum", "AWS"],
    },
    {
      type: "education",
      title: "Bacharelado em Engenharia de Software",
      company: "Universidade Tecnológica Federal do Paraná (UTFPR)",
      location: "Dois Vizinhos – PR",
      period: "Mar/2022 – Dez/2025",
      current: false,
      description:
        "Formação sólida em desenvolvimento de software, com foco em estruturas de dados, algoritmos, arquitetura de sistemas e metodologias ágeis.",
      highlights: [
        "Estruturas de Dados e Algoritmos",
        "Engenharia de Software e Arquitetura",
        "Metodologias Ágeis",
        "Banco de Dados e SQL",
        "Gestão de Projetos",
      ],
      stack: [
        "Estruturas de Dados",
        "Análise de Problemas",
        "Liderança",
        "Metodologias Ágeis",
        "SQL",
        "Gestão de Projetos",
      ],
    },
  ]

  return (
    <section id="sobre" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Desenvolvedor Full-Stack com sólida experiência em arquitetura de software moderna e desenvolvimento de
              sistemas escaláveis. Especializado em Front-end com Angular, TypeScript e arquitetura Micro-Frontend, com
              forte atuação também em back-end usando Java e Spring Boot.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Atuo no desenvolvimento de portais corporativos de grande escala, aplicando boas práticas de código,
              componentização e performance. Tenho experiência com metodologias ágeis, integração de APIs REST e
              desenvolvimento de aplicações web e mobile híbridas.
            </p>

            <TechCarousel />
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-center">Experiência & Formação</h3>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className={`p-6 hover:shadow-lg transition-all ${item.current ? "ring-2 ring-primary" : ""}`}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full ${item.current ? "bg-primary" : "bg-primary/10"} flex items-center justify-center`}
                      >
                        {item.type === "work" ? (
                          <Briefcase
                            className={`h-6 w-6 ${item.current ? "text-primary-foreground" : "text-primary"}`}
                          />
                        ) : (
                          <GraduationCap className="h-6 w-6 text-primary" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      {item.positions ? (
                        <>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                            <div>
                              <h4 className="text-xl font-semibold flex items-center gap-2">
                                {item.company}
                                {item.current && (
                                  <Badge variant="default" className="text-xs">
                                    Atual
                                  </Badge>
                                )}
                              </h4>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span className="font-mono">{item.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4 ml-4 border-l-2 border-primary/20 pl-6">
                            {item.positions.map((position, posIdx) => (
                              <motion.div
                                key={posIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + posIdx * 0.1 }}
                                className="relative"
                              >
                                <div
                                  className={`absolute -left-[29px] top-2 w-4 h-4 rounded-full ${
                                    position.current
                                      ? "bg-primary ring-4 ring-primary/20"
                                      : "bg-primary/40 ring-2 ring-primary/10"
                                  }`}
                                />

                                <div
                                  className={`p-4 rounded-lg ${position.current ? "bg-primary/5 border border-primary/20" : "bg-muted/30"}`}
                                >
                                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                                    <h5 className="font-semibold">{position.title}</h5>
                                    <span className="text-sm text-muted-foreground font-mono">{position.period}</span>
                                  </div>

                                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    {position.description}
                                  </p>

                                  {position.responsibilities && (
                                    <ul className="space-y-1.5 mb-3 text-sm text-muted-foreground">
                                      {position.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <span className="text-primary mt-1">•</span>
                                          <span className="leading-relaxed">{resp}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}

                                  <div className="flex flex-wrap gap-2 mt-3">
                                    {position.stack.map((tech, idx) => (
                                      <Badge key={idx} variant="secondary" className="text-xs">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                            <div>
                              <h4 className="text-xl font-semibold flex items-center gap-2">
                                {item.title}
                                {item.current && (
                                  <Badge variant="default" className="text-xs">
                                    Atual
                                  </Badge>
                                )}
                              </h4>
                              <p className="text-primary font-medium mt-1">{item.company}</p>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span className="font-mono">{item.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>

                          {item.responsibilities && (
                            <ul className="space-y-1.5 mb-3 text-sm text-muted-foreground">
                              {item.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {item.highlights && (
                            <ul className="space-y-1.5 mb-3 text-sm text-muted-foreground">
                              {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="leading-relaxed">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          <div className="flex flex-wrap gap-2 mt-3">
                            {item.stack.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
