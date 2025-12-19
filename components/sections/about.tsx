"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { TechCarousel } from "@/components/tech-carousel";
import { useI18n } from "@/lib/i18n/context";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  const timeline = [
    {
      type: "work",
      company: t.about.timeline.ciss.company,
      location: t.about.timeline.ciss.location,
      period: `${t.about.timeline.ciss.positions.junior.period.split(" - ")[0]} – ${t.about.timeline.ciss.current}`,
      current: true,
      positions: [
        {
          title: t.about.timeline.ciss.positions.pleno.role,
          period: t.about.timeline.ciss.positions.pleno.period,
          current: true,
          description: t.about.timeline.ciss.positions.pleno.responsibilities[0],
          responsibilities: t.about.timeline.ciss.positions.pleno.responsibilities,
          stack: t.about.timeline.ciss.positions.pleno.stack,
        },
        {
          title: t.about.timeline.ciss.positions.junior.role,
          period: t.about.timeline.ciss.positions.junior.period,
          current: false,
          description: t.about.timeline.ciss.positions.junior.responsibilities[0],
          responsibilities: t.about.timeline.ciss.positions.junior.responsibilities,
          stack: t.about.timeline.ciss.positions.junior.stack,
        },
      ],
    },
    {
      type: "work",
      title: t.about.timeline.leadfinder.role,
      company: t.about.timeline.leadfinder.company,
      location: t.about.timeline.leadfinder.location,
      period: t.about.timeline.leadfinder.period,
      current: false,
      description: t.about.timeline.leadfinder.responsibilities[0],
      responsibilities: t.about.timeline.leadfinder.responsibilities,
      stack: t.about.timeline.leadfinder.stack,
    },
    {
      type: "education",
      title: t.about.timeline.utfpr.degree,
      company: t.about.timeline.utfpr.institution,
      location: t.about.timeline.utfpr.location,
      period: t.about.timeline.utfpr.period,
      current: false,
      description: t.about.timeline.utfpr.description,
      stack: t.about.timeline.utfpr.stack,
      highlights: t.about.timeline.utfpr.highlights,
    },
  ];

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t.about.intro1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.about.intro2}</p>

            <TechCarousel />
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.about.timelineTitle}</h3>

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
                        className={`w-12 h-12 rounded-full ${
                          item.current ? "bg-primary" : "bg-primary/10"
                        } flex items-center justify-center`}
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
                                    {t.about.badges.current}
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
                                  className={`p-4 rounded-lg ${
                                    position.current ? "bg-primary/5 border border-primary/20" : "bg-muted/30"
                                  }`}
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
                                    {t.about.badges.current}
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
  );
}
