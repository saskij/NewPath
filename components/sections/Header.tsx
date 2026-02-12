"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Truck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Equipment", href: "/equipment" },
        { name: "Safety", href: "/safety" },
        { name: "Careers", href: "/join-our-team" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header className={`sticky top-0 w-full transition-all duration-200 ${isOpen ? 'hidden lg:flex lg:z-50' : 'z-50 bg-white border-b border-gray-200'}`}>
                <Container className="flex h-20 items-center justify-between">
                    {/* Logo - Industrial Box */}
                    <Link
                        href="/"
                        className={`items-center group relative z-50 h-full ${isOpen ? 'hidden' : 'flex'}`}
                    >
                        <div className="relative h-full flex items-center bg-white px-8 shadow-sm border-b-4 border-primary/20 hover:border-primary transition-colors duration-300">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={assetPath("/logo.png")}
                                alt="New Path Logistics"
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex gap-8 items-center h-full">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-secondary uppercase tracking-wider hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions (Desktop) */}
                    <div className="hidden lg:flex items-center gap-2">
                        <a href="tel:+18001234567" className="flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>1-800-123-4567</span>
                        </a>
                        <Link href="/contact">
                            <Button variant="secondary" className="bg-secondary text-white hover:bg-secondary/90">GET A QUOTE</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle - Only show when menu is closed */}
                    {!isOpen && (
                        <button
                            className="lg:hidden relative z-50 p-2 text-gray-600 hover:text-primary transition-colors ml-auto"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    )}

                </Container>
            </header>

            {/* Mobile Menu Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-white lg:hidden"
                    >
                        {/* Close Button at Top */}
                        <div className="flex justify-end p-2">
                            <button
                                className="p-2 text-gray-600 hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Menu Content */}
                        <Container className="flex flex-col gap-8 pt-2">
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-2xl font-medium text-gray-800 hover:text-primary transition-colors py-4 block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="pt-6 border-t border-gray-100 flex flex-col gap-6">
                                <a href="tel:+18001234567" className="flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors py-2">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <span>1-800-123-4567</span>
                                </a>
                                <div className="flex flex-col gap-3">
                                    <Button variant="secondary" className="w-full justify-center bg-secondary text-white hover:bg-secondary/90">GET A QUOTE</Button>
                                </div>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
