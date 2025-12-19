'use client';

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Bike, Trophy, Timer, Target } from 'lucide-react';
import BlurText from './BlurText';
import DecayCard from './DecayCard';
import CardSwap, { Card } from './CardSwap';

export function OtherExperience() {
    return (
        <Section id="other-experience" className="bg-background">
            <div id="other-experience-main-container" className="container mx-auto px-4 py-20">
                <div id="other-experience-container" className="max-w-7xl mx-auto">

                    <motion.div
                        id="other-experience-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="p-4 bg-primary/10 rounded-full mb-6 inline-block">
                            <Bike className="w-12 h-12 text-primary" />
                        </div>
                        <BlurText
                            text="Beyond Software Engineering"
                            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
                            delay={150}
                            animateBy="words"
                            direction="top"
                        />
                        <BlurText
                            text="Professional Cyclist in Colombia"
                            className="text-xl md:text-2xl text-muted-foreground font-medium"
                            delay={200}
                            animateBy="words"
                            direction="top"
                        />
                    </motion.div>


                    <div id="other-experience-cards" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="w-full" >
                            <div className="w-full h-[400px] md:h-[600px]">
                                <DecayCard width="100%" height="100%" image="/cycling.jpg">
                                    <div className="px-[10vw] h-full flex flex-col justify-end">
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white  drop-shadow-lg">
                                            Competitive<br />Cycling
                                        </h2>
                                        <p className="text-white/90 text-base md:text-lg drop-shadow-md">
                                            Years of professional racing experience
                                        </p>
                                    </div>
                                </DecayCard>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-full flex items-center justify-center"
                        >
                            <div className="relative w-full max-w-[500px] h-[450px] sm:h-[500px] md:h-[600px]">
                                <div className="block lg:hidden w-full h-full">
                                    <CardSwap
                                        width="100%"
                                        height="100%"
                                        cardDistance={30}
                                        verticalDistance={40}
                                        delay={3000}
                                        pauseOnHover={true}
                                        skewAmount={4}
                                    >
                                        <Card>
                                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 p-6 sm:p-8 flex flex-col justify-center backdrop-blur-sm">
                                                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-3 sm:mb-4" />
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Goal-Oriented</h3>
                                                <p className="text-white/80 text-sm sm:text-base">Strengthened ability to manage long-term objectives and achieve high-performance targets.</p>
                                            </div>
                                        </Card>
                                        <Card>
                                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 p-6 sm:p-8 flex flex-col justify-center backdrop-blur-sm">
                                                <Timer className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mb-3 sm:mb-4" />
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Consistency</h3>
                                                <p className="text-white/80 text-sm sm:text-base">Developed strong discipline and habits through rigorous training schedules.</p>
                                            </div>
                                        </Card>
                                        <Card>
                                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 p-6 sm:p-8 flex flex-col justify-center backdrop-blur-sm">
                                                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-3 sm:mb-4" />
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Focus</h3>
                                                <p className="text-white/80 text-sm sm:text-base">Ability to maintain focus under pressure and stay committed to improvement.</p>
                                            </div>
                                        </Card>
                                        <Card>
                                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 p-6 sm:p-8 flex flex-col justify-center backdrop-blur-sm">
                                                <Bike className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mb-3 sm:mb-4" />
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Resilience</h3>
                                                <p className="text-white/80 text-sm sm:text-base">Built mental toughness to overcome challenges and push through difficult moments.</p>
                                            </div>
                                        </Card>
                                    </CardSwap>
                                </div>

                                <div id="desktop" className="hidden lg:block w-full h-full">
                                    <CardSwap
                                        width={500}
                                        height={400}
                                        cardDistance={60}
                                        verticalDistance={70}
                                        delay={3000}
                                        pauseOnHover={true}
                                        skewAmount={6}
                                    >
                                        <Card>
                                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 p-8 flex flex-col justify-center backdrop-blur-sm">
                                                <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
                                                <h3 className="text-3xl font-bold text-white mb-3">Goal-Oriented</h3>
                                                <p className="text-white/80 text-base">Strengthened ability to manage long-term objectives and achieve high-performance targets through years of competitive racing.</p>
                                            </div>
                                        </Card>
                                        <Card>
                                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 p-8 flex flex-col justify-center backdrop-blur-sm">
                                                <Timer className="w-12 h-12 text-blue-400 mb-4" />
                                                <h3 className="text-3xl font-bold text-white mb-3">Consistency</h3>
                                                <p className="text-white/80 text-base">Developed strong discipline and habits through rigorous daily training schedules and commitment to excellence.</p>
                                            </div>
                                        </Card>
                                        <Card>
                                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 p-8 flex flex-col justify-center backdrop-blur-sm">
                                                <Target className="w-12 h-12 text-green-400 mb-4" />
                                                <h3 className="text-3xl font-bold text-white mb-3">Focus</h3>
                                                <p className="text-white/80 text-base">Ability to maintain focus under pressure and stay committed to continuous improvement in challenging environments.</p>
                                            </div>
                                        </Card>
                                        <Card>
                                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 p-8 flex flex-col justify-center backdrop-blur-sm">
                                                <Bike className="w-12 h-12 text-purple-400 mb-4" />
                                                <h3 className="text-3xl font-bold text-white mb-3">Resilience</h3>
                                                <p className="text-white/80 text-base">Built mental toughness and the ability to overcome challenges, setbacks, and push through difficult moments.</p>
                                            </div>
                                        </Card>
                                    </CardSwap>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        id="other-experience-quote"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                            "This experience directly translates into my work as a software engineer, where discipline, resilience, and the drive to constantly improve are essential for building high-quality systems."
                        </blockquote>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
}
