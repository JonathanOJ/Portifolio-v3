"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export function Hero() {
  const { t } = useI18n();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
              #000000
            `,
          }}
          animate={{
            backgroundPosition: ["20% 50%, 80% 80%, 40% 20%", "25% 45%, 75% 85%, 45% 15%", "20% 50%, 80% 80%, 40% 20%"],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto text-center">
          <motion.div variants={item} className="mb-4">
            <span className="text-sm font-mono text-primary">{t.hero.greeting}</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-4 text-balance">
            {t.hero.name}
          </motion.h1>

          <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-6 text-muted-foreground">
            {t.hero.role}
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            {t.hero.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#projetos">{t.hero.cta.projects}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
              <Link href="#contato">{t.hero.cta.contact}</Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/JonathanOJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">{t.hero.socialLinks.github}</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jonathan-oleniki-jacobovski-9ba2b8ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">{t.hero.socialLinks.linkedin}</span>
            </Link>
            <Link
              href="mailto:jonathan_jacobovski@hotmail.com"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">{t.hero.socialLinks.email}</span>
            </Link>
          </motion.div>

          <motion.div variants={item} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <Link href="#sobre" className="block animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
              <span className="sr-only">{t.hero.scrollDown}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
