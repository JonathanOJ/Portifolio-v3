export type Language = "pt" | "en";

export const translations = {
  pt: {
    header: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Jonathan Oleniki Jacobovski",
      role: "Desenvolvedor Full-Stack",
      description:
        "Especializado em React, Angular, TypeScript e Node.js. Construindo experiências web modernas e escaláveis.",
      cta: {
        projects: "Ver Projetos",
        contact: "Entrar em Contato",
      },
      socialLinks: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
      },
      scrollDown: "Rolar para baixo",
    },
    about: {
      title: "Sobre Mim",
      intro1:
        "Desenvolvedor full-stack com experiência em construir aplicações web escaláveis e de alta performance. Especializado em arquitetura moderna, micro-frontends e soluções serverless.",
      intro2:
        "Apaixonado por criar soluções elegantes para problemas complexos, com foco em código limpo, performance e experiência do usuário.",
      timelineTitle: "Experiência & Formação",
      badges: {
        current: "Atual",
      },
      experience: "Experiência",
      education: "Formação",
      timeline: {
        ciss: {
          company: "CISS S.A",
          location: "Curitiba, PR",
          current: "Atual",
          positions: {
            pleno: {
              role: "Desenvolvedor Frontend Pleno",
              period: "Dez 2024 - Atualmente",
              responsibilities: [
                "Manutenção e evolução de portais web para grandes redes de varejo",
                "Arquitetura micro-frontend com comunicação entre módulos",
                "Desenvolvimento de features complexas e integrações de APIs",
                "Code review e mentoria de desenvolvedores juniores",
              ],
              stack: ["Angular 17", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "DB2", "Docker", "Kubernetes"],
            },
            junior: {
              role: "Desenvolvedor Frontend Júnior",
              period: "Jan 2024 - Dez 2024",
              responsibilities: [
                "Desenvolvimento de componentes reutilizáveis",
                "Implementação de interfaces responsivas",
                "Integração com APIs REST",
                "Correção de bugs e melhorias de performance",
              ],
              stack: ["Angular 17", "TypeScript", "REST APIs"],
            },
          },
        },
        leadfinder: {
          company: "LeadFinder",
          role: "Desenvolvedor Full-Stack",
          location: "Remoto",
          period: "Fev 2023 - Jan 2024",
          responsibilities: [
            "Desenvolvimento full-stack de portal administrativo",
            "Implementação de arquitetura micro-frontend",
            "Backend com Java e Spring Boot",
            "Integração com sistemas legados",
          ],
          stack: [
            "Angular",
            "TypeScript",
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "Micro-Frontend",
            "Docker",
            "REST APIs",
          ],
        },
        utfpr: {
          institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
          degree: "Software Engineering",
          location: "Dois Vizinhos, PR",
          period: "2022 - 2024",
          description: "Foco em desenvolvimento web, banco de dados, engenharia de software e arquitetura de sistemas.",
          stack: [
            "Estruturas de Dados",
            "Análise de Problemas",
            "Liderança",
            "Metodologias Ágeis",
            "SQL",
            "Gestão de Projetos",
          ],
          highlights: [
            "Estruturas de Dados e Algoritmos",
            "Engenharia de Software e Arquitetura",
            "Metodologias Ágeis",
            "Banco de Dados e SQL",
            "Gestão de Projetos",
          ],
        },
      },
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle:
        "Projetos reais que demonstram experiência em desenvolvimento full-stack, arquitetura serverless e design moderno. Confira mais no",
      github: "GitHub",
      featured: "Destaque",
      private: "Projeto Privado",
      viewProject: "Ver Projeto",
      viewAll: "Ver Todos os Projetos",
      sections: {
        stack: "Stack Técnica",
        features: "Funcionalidades Principais",
        security: "Segurança",
        highlights: "Destaques",
        frontend: "Frontend",
        backend: "Backend / Infraestrutura",
        testing: "Testes",
      },
      items: {
        hopeshare: {
          name: "HopeShare",
          type: "Plataforma Full-Stack",
          description:
            "Plataforma completa de crowdfunding social com arquitetura serverless, autenticação avançada e sistema de pagamentos.",
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
        vidaplan: {
          name: "Vidaplan CRM",
          type: "Sistema CRM Corporativo",
          description:
            "Sistema CRM completo para corretora de seguros, com gestão de clientes, pipeline de vendas em Kanban e alto foco em segurança e performance.",
          features: [
            "Dashboard com KPIs em tempo real e métricas de crescimento",
            "Gestão de Clientes com CRUD completo e filtros avançados",
            "Kanban de Vendas drag-and-drop (Lead → Prospect → Ativo → Cancelado)",
            "Importação CSV com validação automática e tratamento de duplicatas",
          ],
          security: [
            "Autenticação JWT com refresh tokens",
            "Row Level Security em todas as tabelas",
            "Controle de acesso baseado em roles",
          ],
          highlights: [
            "Optimistic UI Updates com rollback automático",
            "Importação inteligente de CSV",
            "Code splitting e lazy loading",
            "Tema claro/escuro",
            "Enterprise-grade",
          ],
        },
        waveodonto: {
          name: "Wave Odonto",
          type: "Site Institucional",
          description:
            "Site institucional moderno para clínica odontológica, focado em presença digital, conversão de pacientes e identidade visual profissional.",
          highlights: ["Layout moderno e profissional", "Performance otimizada", "Foco em UX e identidade visual"],
        },
      },
    },
    skills: {
      title: "Habilidades",
      subtitle: "Não é sobre quanto eu sei, é sobre o que eu já construí com isso.",
      usedIn: "Usado em:",
      sections: {
        coreStack: {
          title: "Core Stack",
          subtitle: "Uso diário / projetos principais",
        },
        architecture: {
          title: "Arquitetura & Padrões",
          subtitle: "Estrutura e organização de código",
        },
        cloud: {
          title: "Cloud, DevOps & Infra",
          subtitle: "Deploy e infraestrutura",
        },
        tools: {
          title: "Ferramentas & Qualidade",
          subtitle: "Produtividade e boas práticas",
        },
      },
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Banco de Dados",
      },
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar!",
      form: {
        title: "Envie uma Mensagem",
        name: "Nome",
        namePlaceholder: "Seu nome completo",
        email: "Email",
        emailPlaceholder: "seu@email.com",
        message: "Mensagem",
        messagePlaceholder: "Sua mensagem...",
        submit: "Enviar Mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada!",
        successDescription: "Obrigado pelo contato. Responderei em breve.",
      },
      info: {
        title: "Informações de Contato",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
      },
      availability: {
        title: "Disponível para Freelance",
        description:
          "Estou disponível para projetos freelance e consultorias. Entre em contato para discutirmos como posso ajudar seu projeto.",
      },
    },
    footer: {
      copyright: "Todos os direitos reservados.",
      builtWith: "Construído com",
      by: "por",
    },
  },
  en: {
    header: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Jonathan Oleniki Jacobovski",
      role: "Full-Stack Developer",
      description:
        "Specialized in React, Angular, TypeScript, and Node.js. Building modern and scalable web experiences.",
      cta: {
        projects: "View Projects",
        contact: "Get in Touch",
      },
      socialLinks: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
      },
      scrollDown: "Scroll down",
    },
    about: {
      title: "About Me",
      intro1:
        "Full-stack developer with experience building scalable, high-performance web applications. Specialized in modern architecture, micro-frontends, and serverless solutions.",
      intro2:
        "Passionate about creating elegant solutions to complex problems, with a focus on clean code, performance, and user experience.",
      timelineTitle: "Experience & Education",
      badges: {
        current: "Current",
      },
      experience: "Experience",
      education: "Education",
      timeline: {
        ciss: {
          company: "CISS S.A",
          location: "Dois Vizinhos, PR",
          current: "Current",
          positions: {
            pleno: {
              role: "Mid-Level Frontend Developer",
              period: "Dec 2024 - Present",
              responsibilities: [
                "Maintenance and evolution of web portals for major retail chains",
                "Micro-frontend architecture with inter-module communication",
                "Development of complex features and API integrations",
                "Code review and mentoring of junior developers",
              ],
              stack: ["Angular 17", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "DB2", "Docker", "Kubernetes"],
            },
            junior: {
              role: "Junior Frontend Developer",
              period: "Jan 2024 - Dec 2024",
              responsibilities: [
                "Development of reusable components",
                "Implementation of responsive interfaces",
                "REST API integration",
                "Bug fixes and performance improvements",
              ],
              stack: ["Angular 17", "TypeScript", "REST APIs"],
            },
          },
        },
        leadfinder: {
          company: "LeadFinder",
          role: "Full-Stack Developer",
          location: "Dois Vizinhos, PR",
          period: "Feb 2023 - Jan 2024",
          responsibilities: [
            "Full-stack development of administrative portal",
            "Implementation of micro-frontend architecture",
            "Backend with Java and Spring Boot",
            "Integration with legacy systems",
          ],
          stack: [
            "Angular",
            "TypeScript",
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "Micro-Frontend",
            "Docker",
            "REST APIs",
          ],
        },
        utfpr: {
          institution: "Federal University of Technology - Paraná (UTFPR)",
          degree: "Software Engineering",
          location: "Dois Vizinhos, PR",
          period: "2022 - 2024",
          description: "Focus on web development, databases, software engineering, and systems architecture.",
          stack: [
            "Data Structures",
            "Problem Analysis",
            "Leadership",
            "Agile Methodologies",
            "SQL",
            "Project Management",
          ],
          highlights: [
            "Data Structures and Algorithms",
            "Software Engineering and Architecture",
            "Agile Methodologies",
            "Database and SQL",
            "Project Management",
          ],
        },
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "Real projects demonstrating experience in full-stack development, serverless architecture, and modern design. Check out more on",
      github: "GitHub",
      featured: "Featured",
      private: "Private Project",
      viewProject: "View Project",
      viewAll: "View All Projects",
      sections: {
        stack: "Tech Stack",
        features: "Key Features",
        security: "Security",
        highlights: "Highlights",
        frontend: "Frontend",
        backend: "Backend / Infrastructure",
        testing: "Testing",
      },
      items: {
        hopeshare: {
          name: "HopeShare",
          type: "Full-Stack Platform",
          description:
            "Complete social crowdfunding platform with serverless architecture, advanced authentication, and payment system.",
          features: [
            "Campaign creation and management",
            "Administrative dashboard with metrics",
            "Financial reports (PDF and CSV)",
            "Authentication with profiles (user, CNPJ, and admin)",
            "Reporting and moderation system",
            "Payment gateway integration",
          ],
          highlights: [
            "Serverless Architecture",
            "200+ unit tests",
            "Secure authentication with encryption",
            "High scalability",
          ],
        },
        vidaplan: {
          name: "Vidaplan CRM",
          type: "Corporate CRM System",
          description:
            "Complete CRM system for insurance broker, with client management, Kanban sales pipeline, and high focus on security and performance.",
          features: [
            "Dashboard with real-time KPIs and growth metrics",
            "Client Management with full CRUD and advanced filters",
            "Drag-and-drop Sales Kanban (Lead → Prospect → Active → Cancelled)",
            "CSV import with automatic validation and duplicate handling",
          ],
          security: [
            "JWT authentication with refresh tokens",
            "Row Level Security on all tables",
            "Role-based access control",
          ],
          highlights: [
            "Optimistic UI Updates with automatic rollback",
            "Intelligent CSV import",
            "Code splitting and lazy loading",
            "Light/dark theme",
            "Enterprise-grade",
          ],
        },
        waveodonto: {
          name: "Wave Odonto",
          type: "Institutional Website",
          description:
            "Modern institutional website for dental clinic, focused on digital presence, patient conversion, and professional visual identity.",
          highlights: ["Modern and professional layout", "Optimized performance", "Focus on UX and visual identity"],
        },
      },
    },
    skills: {
      title: "Skills",
      subtitle: "It's not about how much I know, it's about what I've already built with it.",
      usedIn: "Used in:",
      sections: {
        coreStack: {
          title: "Core Stack",
          subtitle: "Daily use / main projects",
        },
        architecture: {
          title: "Architecture & Patterns",
          subtitle: "Code structure and organization",
        },
        cloud: {
          title: "Cloud, DevOps & Infra",
          subtitle: "Deployment and infrastructure",
        },
        tools: {
          title: "Tools & Quality",
          subtitle: "Productivity and best practices",
        },
      },
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "I'm always open to new opportunities and collaborations. Let's talk!",
      form: {
        title: "Send a Message",
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Your message...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent!",
        successDescription: "Thank you for contacting me. I'll respond soon.",
      },
      info: {
        title: "Contact Information",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
      },
      availability: {
        title: "Available for Freelance",
        description:
          "I'm available for freelance projects and consulting. Get in touch to discuss how I can help your project.",
      },
    },
    footer: {
      copyright: "All rights reserved.",
      builtWith: "Built with",
      by: "by",
    },
  },
} as const;
