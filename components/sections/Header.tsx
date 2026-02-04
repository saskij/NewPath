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
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header className={`sticky top-0 w-full transition-all duration-200 ${isOpen ? 'hidden lg:flex lg:z-50' : 'z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'}`}>
                <Container className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`items-center group relative z-50 ${isOpen ? 'hidden' : 'flex'}`}
                    >
                        <div className="relative translate-y-6 bg-white/95 p-3 rounded-b-xl shadow-lg border border-gray-100 transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={assetPath("/logo.png")}
                                alt="New Path Logistics"
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex items-center gap-2 text-secondary font-medium">
                            <div className="bg-gray-100 p-2 rounded-full">
                                <Phone className="h-4 w-4 text-primary" />
                            </div>
                            <a href="tel:+18001234567" className="hover:text-primary transition-colors">(800) 123-4567</a>
                        </div>
                        <Link href="/careers">
                            <Button variant="outline">Driver Application</Button>
                        </Link>
                        <Button variant="primary">Get a Quote</Button>
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
                                        className="text-2xl font-medium text-gray-800 hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="pt-6 border-t border-gray-100 flex flex-col gap-6">
                                <div className="flex items-center gap-2 text-secondary font-medium">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <a href="tel:+18001234567" className="hover:text-primary transition-colors">(800) 123-4567</a>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link href="/careers" onClick={() => setIsOpen(false)}>
                                        <Button variant="outline" className="w-full justify-center">Driver Application</Button>
                                    </Link>
                                    <Button variant="primary" className="w-full justify-center">Get a Quote</Button>
                                </div>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
