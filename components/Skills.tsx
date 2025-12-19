'use client';

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BlurText from './BlurText';

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
            { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
            { name: "UI/UX Design", icon: "https://cdn.simpleicons.org/figma/F24E1E" }, // Using Figma icon as proxy
            { name: "PWA", icon: "https://cdn.simpleicons.org/pwa/5A0FC8" },
        ],
    },
    {
        title: "Backend & Cloud",
        skills: [
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
            { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
            { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
            { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
            { name: "Render", icon: "https://cdn.simpleicons.org/render/white" }, // Render icon might need specific check, using white for dark mode
        ],
    },
    {
        title: "Systems, AI & Tools",
        skills: [
            { name: "AI Integration", icon: "https://cdn.simpleicons.org/openai" },
            { name: "Neural Networks", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
            { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
            { name: "macOS", icon: "https://cdn.simpleicons.org/apple/white" },
            { name: "Networking (CCNA)", icon: "https://cdn.simpleicons.org/cisco/1BA0D7" },
            { name: "Agile", icon: "https://cdn.simpleicons.org/jira/0052CC" }, // Jira as proxy for Agile
        ],
    },
];

export function Skills() {
    return (
        <Section id="skills" className="bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="mb-16 flex justify-center">
                    <BlurText
                        text="Technical Skills"
                        className="text-3xl md:text-5xl font-bold tracking-tight text-center justify-center text-white"
                        delay={150}
                        animateBy="words"
                        direction="top"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white border-b border-border/50 pb-2">{category.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="relative w-6 h-6 shrink-0">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
