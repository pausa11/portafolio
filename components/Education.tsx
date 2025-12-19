'use client';

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import BlurText from './BlurText';

export function Education() {
    return (
        <Section id="education" className="">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-12 justify-center">
                        <div className="p-3 bg-secondary rounded-full">
                            <GraduationCap className="w-8 h-8 text-primary" />
                        </div>
                        <BlurText
                            text="Education"
                            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
                            delay={150}
                            animateBy="words"
                            direction="top"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 md:gap-12">
                            <div className="md:w-1/3">
                                <BlurText
                                    text="Universidad Tecnológica de Pereira"
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                    className="text-2xl font-bold mb-2 text-white"
                                />
                                <div className="flex items-center gap-2 text-muted-foreground font-medium mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span>2021 – 2026</span>
                                </div>
                                <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                                    <BlurText
                                        text="Computer Systems Engineering"
                                        delay={150}
                                        animateBy="words"
                                        direction="top"
                                        className="text-sm font-medium text-white"
                                    />
                                </div>
                            </div>

                            <div className="md:w-2/3">
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    Bachelor’s degree focused on software engineering, distributed systems, computer architecture, and networking.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Hands-on experience building full-stack web applications, distributed computing projects for neural network training, and systems integrating AI agents. Strong foundations in databases, operating systems, and network fundamentals (CCNA).
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
