'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import RevealText from './react-bits/RevealText';
import MagnetButton from './react-bits/MagnetButton';

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                {/* Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-blue-500/50 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                            <Image
                                src="/profile.jpg"
                                alt="Daniel Toro Soto"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                <div className="mb-6 flex justify-center">
                    <RevealText
                        text="Daniel Toro Soto"
                        className="text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 justify-center"
                        delay={0.2}
                    />
                </div>

                <div className="mb-8 flex justify-center">
                    <RevealText
                        text="Computer and Systems Engineer | Full-Stack Developer"
                        className="text-xl md:text-2xl text-muted-foreground text-center text-balance justify-center"
                        delay={0.4}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex gap-4 justify-center"
                >
                    <MagnetButton>
                        <Link href="#projects" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                            View Projects
                        </Link>
                    </MagnetButton>
                    <MagnetButton>
                        <Link href="#contact" className="inline-block px-6 py-3 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors">
                            Contact Me
                        </Link>
                    </MagnetButton>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
            </motion.div>
        </div>
    );
}
