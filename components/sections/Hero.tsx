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
        <section className="relative h-[700px] lg:h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">

            {/* Full Width Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={assetPath("/images/hero.jpg")}
                    alt="New Path Logistics Truck"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>

            <Container className="relative z-10 w-full">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl mx-auto lg:mx-0">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                            Your Cargo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Our Promise</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl leading-relaxed font-medium uppercase tracking-wide drop-shadow-md mx-auto lg:mx-0 border-l-4 border-primary pl-6">
                            Reliable, personal trucking services you can trust. <br />We treat every load like it's our own.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <Link href="/contact">
                                <Button size="lg" className="h-14 px-8 text-base font-bold gap-3 shadow-xl bg-primary hover:bg-primary/90 uppercase">
                                    Request a Quote
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
