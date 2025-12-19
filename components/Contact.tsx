'use client';

import { Section } from '@/components/ui/Section';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

export function Contact() {
    return (
        <Section id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="mb-8 flex justify-center">
                    <BlurText
                        text="Ready to work together?"
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white"
                        delay={150}
                        animateBy="words"
                        direction="top"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground mb-12 text-balance"
                >
                    I am currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to contact me.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="mailto:daniel.toro1@utp.edu.co"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:w-64 hover:bg-primary/90"
                    >
                        <div className="inline-flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            <span>Send Email</span>
                        </div>
                        <div className="absolute right-0 translate-x-full opacity-0 transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-100">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </a>

                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/daniel-toro-soto-869a43282" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                            <Linkedin className="w-6 h-6 text-foreground" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://github.com/pausa11" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                            <Github className="w-6 h-6 text-foreground" />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
