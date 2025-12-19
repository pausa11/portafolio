'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300',
                scrolled ? 'py-4' : 'py-6'
            )}
        >
            <nav
                className={cn(
                    'flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md',
                    scrolled
                        ? 'bg-background/80 border border-border/50 shadow-sm'
                        : 'bg-transparent border border-transparent'
                )}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </motion.header>
    );
}
