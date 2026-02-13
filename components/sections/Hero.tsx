"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[90vh] w-full flex items-center justify-center overflow-hidden pb-32">

            {/* Full Width Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={assetPath("/images/hero.jpg")}
                    alt="New Path Logistics Truck"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={85}
                />

                {/* Gradient Overlay for Text Pop */}
                {/* Gradient Overlay for Text Pop */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>

            <Container className="relative z-10 w-full h-full flex flex-col justify-center">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

                    <div className="space-y-8 relative z-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-5xl lg:text-7xl text-white tracking-tighter leading-[0.9] drop-shadow-2xl"
                        >
                            <span className="font-extrabold">Your Cargo</span> <br />
                            <span className="font-normal text-primary md:text-white drop-shadow-2xl">Our Promise</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-medium uppercase tracking-wide drop-shadow-md border-l-4 border-primary pl-6"
                        >
                            Reliable, personal trucking services you can trust. <br />We treat every load like it's our own.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
                        >
                            <Link href="/contact">
                                <Button size="lg" className="h-16 px-10 text-xl font-bold gap-3 shadow-xl bg-primary hover:bg-primary/90 uppercase hover:scale-105 transition-transform duration-300">
                                    GET A QUOTE
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
