'use client';

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Bike, Trophy, Timer } from 'lucide-react';
import Image from 'next/image';
import BlurText from './BlurText';

export function OtherExperience() {
    return (
        <Section id="other-experience" className="bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background to-secondary border border-border/40 p-8 md:p-16"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

                        <div className="relative z-10">
                            {/* Header Section */}
                            <div className="text-center mb-12">
                                <div className="p-4 bg-primary/5 rounded-full mb-8 inline-block">
                                    <Bike className="w-10 h-10 text-primary" />
                                </div>
                                <BlurText
                                    text="Competitive Cycling Experience"
                                    className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white"
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                />
                                <BlurText
                                    text="Professional Cyclist in Colombia"
                                    className="text-xl text-primary font-medium mb-8 text-white"
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                />
                            </div>

                            {/* Photo and Skills Grid */}
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                {/* Cycling Photo */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="relative h-[400px] rounded-2xl overflow-hidden border border-border/30 shadow-lg"
                                >
                                    <Image
                                        src="/cycling.jpg"
                                        alt="Daniel Toro Soto cycling"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Skills Cards */}
                                <div className="grid gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30"
                                    >
                                        <Trophy className="w-6 h-6 text-yellow-500 mb-4" />
                                        <h4 className="font-bold mb-2">Goal-Oriented</h4>
                                        <p className="text-sm text-muted-foreground">Strengthened ability to manage long-term objectives and achieve high-performance targets.</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30"
                                    >
                                        <Timer className="w-6 h-6 text-blue-500 mb-4" />
                                        <h4 className="font-bold mb-2">Consistency</h4>
                                        <p className="text-sm text-muted-foreground">Developed strong discipline and habits through rigorous daily training schedules.</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30"
                                    >
                                        <Bike className="w-6 h-6 text-green-500 mb-4" />
                                        <h4 className="font-bold mb-2">Focus</h4>
                                        <p className="text-sm text-muted-foreground">Ability to maintain focus under pressure and stay committed to continuous improvement.</p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Quote */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-center mx-auto"
                            >
                                "This experience directly translates into my work as a software engineer, where discipline, resilience, and the drive to constantly improve are essential for building high-quality systems."
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
