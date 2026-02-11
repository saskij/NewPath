"use client";

import { Container } from "@/components/ui/Container";

export function ReliabilityStats() {
    const stats = [
        {
            value: "Nationwide",
            label: "Serving all 48 contiguous states"
        },
        {
            value: "24/7 Dispatch",
            label: "Always reachable, day or night"
        },
        {
            value: "Modern Fleet",
            label: "Minimizing downtime on long trips"
        }
    ];

    return (
        <section className="py-24 bg-secondary text-white overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <Container className="text-center relative z-10">

                <div className="max-w-4xl mx-auto mb-20 space-y-6">
                    <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        Built for the Long Haul.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center p-4 group">
                            <span className="text-4xl lg:text-5xl font-black text-primary mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-300">
                                {stat.value}
                            </span>
                            <span className="text-lg font-medium text-gray-400 max-w-[200px]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}
