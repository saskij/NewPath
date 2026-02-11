"use client";

import { ShieldCheck, Truck, Radio } from "lucide-react"; // Importing icons
import { Container } from "@/components/ui/Container";

export function SafetySection() {
    return (
        <section className="py-24 bg-gray-900 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[600px]">

                    {/* Item 1: Main Feature (Large Left Block - Rich Visual) */}
                    <div className="relative group overflow-hidden rounded-2xl lg:row-span-2 shadow-2xl h-[400px] lg:h-full">
                        {/* Background Image - High Quality Placeholder */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549463953-b452809e078a?q=80&w=2755&auto=format&fit=crop')" }} // GPS/Tech Dashboard concept
                        />
                        {/* Dark Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

                        <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm text-primary border border-primary/30">
                                <Radio className="w-6 h-6 animate-pulse" />
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tight">
                                Real-Time Visibility
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                Never wonder where your freight is. Our fleet is equipped with advanced ELD and GPS tracking, giving you 24/7 location updates and complete peace of mind.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Stacked Items */}
                    <div className="flex flex-col gap-6 h-full">

                        {/* Item 2: Secondary Feature (Top Right Small Block) */}
                        <div className="flex-1 bg-gray-800/50 rounded-2xl p-8 lg:p-10 border border-white/5 hover:border-primary/50 hover:bg-gray-800 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                <ShieldCheck className="w-32 h-32 text-white" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-bold text-white uppercase mb-3 tracking-wide">
                                    Safety First Culture
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Strict maintenance schedules and seasoned drivers mean fewer delays and safer cargo arrival. We don't cut corners on safety.
                                </p>
                            </div>
                        </div>

                        {/* Item 3: Tertiary Feature (Bottom Right Small Block) */}
                        <div className="flex-1 bg-gray-800/50 rounded-2xl p-8 lg:p-10 border border-white/5 hover:border-primary/50 hover:bg-gray-800 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                <Truck className="w-32 h-32 text-white" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <Truck className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-bold text-white uppercase mb-3 tracking-wide">
                                    Modern Equipment
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    We operate 2024-2025 Kenworth & Peterbilt models to minimize breakdown risks and ensure on-time delivery for every load.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
