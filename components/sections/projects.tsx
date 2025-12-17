"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "HopeShare",
    type: "Plataforma Full-Stack",
    description:
      "Plataforma completa de crowdfunding social com arquitetura serverless, autenticação avançada e sistema de pagamentos.",
    longDescription:
      "HopeShare é uma plataforma web de crowdfunding social que conecta pessoas, empresas e organizações a causas solidárias. O sistema permite criação, gerenciamento e doação para campanhas, com controle administrativo, relatórios financeiros e alto nível de segurança.",
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
    features: [
      "Criação e gerenciamento de campanhas",
      "Dashboard administrativo com métricas",
      "Relatórios financeiros (PDF e CSV)",
      "Autenticação com perfis (usuário, CNPJ e admin)",
      "Sistema de denúncias e moderação",
      "Integração com gateway de pagamento",
    ],
    highlights: [
      "Arquitetura Serverless",
      "Mais de 200 testes unitários",
      "Autenticação segura com criptografia",
      "Alta escalabilidade",
    ],
  },
  {
    id: 2,
    name: "Vidaplan CRM",
    type: "Sistema CRM Corporativo",
    description:
      "Sistema CRM completo para corretora de seguros, com gestão de clientes, pipeline de vendas em Kanban e alto foco em segurança e performance.",
    longDescription:
      "O Vidaplan CRM é um sistema de Customer Relationship Management desenvolvido sob medida para uma corretora de seguros, permitindo o gerenciamento completo do ciclo de vida dos clientes — desde a captação de leads até o acompanhamento pós-venda. A aplicação foi projetada com foco em experiência do usuário, segurança a nível de banco de dados, arquitetura serverless e alta performance, atendendo demandas reais de um ambiente corporativo.",
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
    features: [
      "Dashboard com KPIs em tempo real e métricas de crescimento",
      "Gestão de Clientes com CRUD completo e filtros avançados",
      "Kanban de Vendas drag-and-drop (Lead → Prospect → Ativo → Cancelado)",
      "Importação CSV com validação automática e tratamento de duplicatas",
      "Exportação CSV de dados padronizados para relatórios",
      "Histórico de Contatos (ligações, e-mails e reuniões)",
      "Gestão de Usuários com controle de acesso por roles (RBAC)",
      "Onboarding interativo para novos usuários",
    ],
    security: [
      "Autenticação JWT com refresh tokens",
      "Row Level Security em todas as tabelas",
      "Controle de acesso baseado em roles",
      "Validação de domínio corporativo",
      "Sanitização de dados sensíveis (CPF, telefone, dados bancários)",
    ],
    highlights: [
      "Optimistic UI Updates com rollback automático",
      "Importação inteligente de CSV",
      "Code splitting e lazy loading",
      "Tema claro/escuro",
      "Enterprise-grade",
    ],
  },
  {
    id: 3,
    name: "Wave Odonto",
    type: "Site Institucional",
    description:
      "Site institucional moderno para clínica odontológica, focado em presença digital, conversão de pacientes e identidade visual profissional.",
    longDescription:
      "Desenvolvimento de um site institucional moderno para uma clínica odontológica, com foco em design limpo, performance e experiência do usuário. O projeto valoriza a marca do cliente, apresenta serviços de forma clara e otimiza a conversão de visitantes em pacientes.",
    link: "https://waveodonto.com.br/",
    featured: false,
    stack: {
      frontend: ["React", "JavaScript", "TypeScript", "CSS moderno"],
    },
    highlights: ["Layout moderno e profissional", "Performance otimizada", "Foco em UX e identidade visual"],
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projetos" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projetos reais que demonstram experiência em desenvolvimento full-stack, arquitetura serverless e design
            moderno. Confira mais no{" "}
            <Link href="https://github.com/JonathanOJ" target="_blank" className="text-primary hover:underline">
              GitHub
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
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  {/* Stack Técnica */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Stack Técnica</h4>
                    <div className="space-y-3">
                      {project.stack.frontend && (
                        <div>
                          <p className="text-xs text-muted-foreground mb-2">Frontend</p>
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
                          <p className="text-xs text-muted-foreground mb-2">Backend / Infraestrutura</p>
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
                          <p className="text-xs text-muted-foreground mb-2">Testes</p>
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

                  {/* Features (apenas para projetos destacados) */}
                  {project.features && (
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Funcionalidades Principais</h4>
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
                      <h4 className="font-semibold mb-3 text-sm">Segurança</h4>
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

                  {/* Highlights */}
                  {project.highlights && (
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Destaques</h4>
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
                        Ver Projeto
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                  {project.link === "#" && (
                    <Badge variant="secondary" className="text-xs">
                      Projeto Privado
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
              Ver Todos os Projetos
              <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
