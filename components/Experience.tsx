'use client';

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const experience = [
    {
        company: "Universo Arithmental",
        role: "Front-End Developer",
        period: "2023 – 2025",
        description: "Designed and developed a fully custom user interface, built mental calculation games from scratch, delivered a mobile version, and applied strong UI/UX principles.",
    },
    {
        company: "Registrap",
        role: "Front-End Developer (React Native)",
        period: "3 Months",
        description: "Contributed to the development of the mobile application using React Native, focusing on implementing key features and ensuring cross-platform compatibility.",
    },
];

export function Experience() {
    return (
        <Section id="experience" className="bg-secondary/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Experience</h2>
                <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >

                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-120 transition-transform" />
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row justify-between mb-2 sm:mb-4">
                                    <h3 className="font-bold text-lg md:text-xl">{job.company}</h3>
                                    <span className="text-sm text-muted-foreground font-mono bg-secondary px-2 py-1 rounded inline-block w-fit mt-2 sm:mt-0">{job.period}</span>
                                </div>
                                <p className="text-primary font-medium mb-2">{job.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
