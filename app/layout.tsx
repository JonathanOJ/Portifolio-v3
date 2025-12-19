import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/context";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Oleniki Jacobovski | Full-Stack Developer",
  description:
    "Portfólio profissional de Jonathan Oleniki Jacobovski, desenvolvedor full-stack especializado em React, Angular, Vue, Java, Node.js e arquiteturas modernas.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Angular",
    "Java",
    "Vue",
    "DynamoDB",
    "Serverless",
    "AWS Lambda",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "DB2",
    "Micro-Frontend",
  ],
  authors: [{ name: "Jonathan Oleniki Jacobovski" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <I18nProvider>{children}</I18nProvider>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
