'use client';

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const projects = [
    {
        title: "enfoCAR",
        role: "Full stack developer",
        description: "Your vehicle management assistant. Keep full control of your vehicles, documents, maintenance, and more — all in one place.",
        tags: ["AI Bot", "Mobile Web"],
        link: "https://enfo-car.vercel.app/auth/login",
        image: "/projects/enfocar.png",
        colSpan: "md:col-span-1",
    },
    {
        title: "Async Distributed ImageNet1k",
        role: "Distributed ML Engineer",
        description: "Designed and implemented an asynchronous distributed training system for ImageNet-1k. Enables scalable deep learning using decentralized workers and non-blocking model updates. Integrated a context-aware chatbot trained on project documentation.",
        tags: ["Cloud Computing", "Deep Learning", "Distributed Computing", "AI Chatbot"],
        link: "https://distrubuted-image-net.vercel.app/",
        image: "/projects/imagenet.png",
        colSpan: "md:col-span-2",
    },
    {
        title: "Universo Arithmental",
        role: "Frontend Developer",
        description: "Built a fully custom mental math platform. Designed interactive calculation games from scratch without external libraries. Developed a unified UI system and delivered a mobile version with shared codebase.",
        tags: ["React", "Front-End Development", "Mobile Web", "JavaScript"],
        link: "https://speedcalculation.com/login",
        image: "/projects/arithmental.png",
        colSpan: "md:col-span-2",
    },
    {
        title: "colombian-plates",
        role: "Open Source Contributor",
        description: "NPM library to validate and format Colombian vehicle license plates. A utility tool for developers working with transportation data in Colombia.",
        tags: ["NPM", "Open Source", "TypeScript", "Library"],
        link: "https://www.npmjs.com/package/colombian-plates",
        image: "/projects/npm-library.png",
        colSpan: "md:col-span-1",
    },
];

export function Projects() {
    return (
        <Section id="projects" className="">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Selected Projects</h2>
                        <p className="text-muted-foreground text-lg text-balance">
                            A collection of work defining my experience in full-stack development, AI, and distributed systems.
                        </p>
                    </div>
                    <a href="https://github.com/pausa11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                        View all on GitHub <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl bg-secondary/50 border border-border/50 flex flex-col justify-between h-[400px] hover:shadow-lg transition-all duration-300",
                                project.colSpan
                            )}
                        >
                            <div className="absolute inset-0 z-0 h-full w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105 transform transition-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                            </div>

                            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-background/50 backdrop-blur-sm border border-border/20 rounded-full text-xs font-medium text-foreground/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm font-medium text-primary/80 mb-3">{project.role}</p>
                                    <p className="text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                                </div>

                                <div className="flex justify-end mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary text-primary-foreground rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-primary/90"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
