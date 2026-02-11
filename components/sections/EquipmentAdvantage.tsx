"use client";

import { Container } from "@/components/ui/Container";

export function EquipmentAdvantage() {
    const stats = [
        {
            value: "99%",
            label: "On-Time Performance"
        },
        {
            value: "24/7",
            label: "Direct Dispatch"
        },
        {
            value: "Zero",
            label: "Safety Violations"
        }
    ];

    return (
        <section className="py-24 bg-secondary text-white overflow-hidden">
            <Container className="text-center">

                <div className="max-w-4xl mx-auto mb-16 space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none">
                        Modern Fleet. Reliable Results.
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed">
                        Breakdowns cause delays. That's why we invest in 2024-2025 equipment to ensure your cargo keeps moving.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center p-6 transition-transform hover:-translate-y-1 duration-300">
                            <span className="text-6xl lg:text-7xl font-black text-primary mb-4 tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="text-lg lg:text-xl font-bold uppercase tracking-widest text-gray-400">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}
