"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/JonathanOJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">{t.hero.socialLinks.github}</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jonathan-oleniki-jacobovski-9ba2b8ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">{t.hero.socialLinks.linkedin}</span>
            </Link>
            <Link
              href="mailto:jonathan_jacobovski@hotmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">{t.hero.socialLinks.email}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
