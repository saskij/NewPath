"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/utils";

export function OurExpertise() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={assetPath("/images/new-path-truck-white.jpg")}
                            alt="New Path Logistics Truck on Highway"
                            fill
                            className="object-cover"
                        />
                        {/* Subtle Overlay to ensure image sits well */}
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            <span className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                Our Expertise
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-secondary uppercase tracking-tight leading-none">
                                Regional & Long-Haul Excellence
                            </h2>
                        </div>

                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            We aren't just moving freight; we are delivering peace of mind. As a dedicated carrier, we focus on Dry Van transport with precision and care.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Nationwide Coverage (48 States)",
                                "Real-Time GPS Tracking",
                                "Strict Safety Protocols",
                                "Professional, Experienced Drivers"
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
                                <Button variant="outline" size="lg" className="h-14 px-8 text-base border-2 font-bold uppercase transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary">
                                    View Services
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
