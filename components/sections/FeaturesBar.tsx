"use client";

import { Clock, MapPin, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesBar() {
    const features = [
        {
            icon: Clock,
            title: "On-Time Deliveries",
            description: "Punctual and efficient freight services."
        },
        {
            icon: MapPin,
            title: "Reliable Transport",
            description: "Safe and timely delivery across all 48 contiguous states."
        },
        {
            icon: ShieldCheck,
            title: "24/7 Support",
            description: "Committed to secure and safe transportation."
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50/80 py-12 border-y border-gray-200 relative z-20"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-white border-4 border-primary text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-black text-secondary uppercase tracking-wider mb-3">{feature.title}</h3>
                            <p className="text-base text-gray-600 font-medium leading-relaxed max-w-xs">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
