"use client";

import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
      className="rounded-full"
      title={locale === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only ml-2 text-xs font-mono">{locale === "pt" ? "EN" : "PT"}</span>
    </Button>
  );
}
