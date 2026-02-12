"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/utils";

export function NationwideOTR() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                        <Image
                            src={assetPath("/images/new-path-truck-white.jpg")}
                            alt="Nationwide OTR Trucking"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            <span className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                Nationwide OTR Service
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-secondary uppercase tracking-tight leading-none">
                                Coast to Coast.<br />No Lane Too Long.
                            </h2>
                        </div>

                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            We are a true Over-The-Road (OTR) carrier. From the Pacific Northwest to the East Coast, we operate across all lower 48 states with precision and reliability.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Full 48-State Coverage",
                                "Long-Haul Specialists",
                                "Real-Time Load Tracking"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check className="h-4 w-4 stroke-[3]" />
                                    </div>
                                    <span className="text-lg text-gray-700 font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Link href="/services">
                                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold uppercase shadow-lg hover:shadow-xl transition-all duration-300">
                                    See Our Lanes
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
