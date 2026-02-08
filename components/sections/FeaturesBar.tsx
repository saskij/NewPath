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
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md mb-4">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
