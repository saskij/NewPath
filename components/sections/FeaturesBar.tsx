"use client";

import { Clock, MapPin, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesBar() {
    const features = [
        {
            icon: Clock,
            title: "On-Time Guarantee",
            description: "Punctual, efficient freight services you can count on."
        },
        {
            icon: MapPin,
            title: "Nationwide Coverage",
            description: "Seamless delivery across all 48 contiguous states."
        },
        {
            icon: ShieldCheck,
            title: "Secure Transport",
            description: "24/7 monitoring and safety-first protocols for every load."
        }
    ];

    return (
        <section className="relative z-30 -mt-24 pb-32 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 shadow-xl border-t-4 border-primary relative group"
                        >
                            <div className="flex flex-col items-start space-y-4">
                                <div className="p-3 bg-secondary/5 rounded-lg text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <feature.icon className="h-8 w-8" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium text-[1.1rem] leading-[1.6]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
