"use client";

import { Clock, MapPin, ShieldCheck } from "lucide-react";
import { FeatureItem } from "@/components/modules/FeatureItem";
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
            title: "Nationwide Coverage",
            description: "Extensive network across the U.S. and Canada."
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
            className="bg-white py-8 border-b border-gray-100 shadow-sm relative z-20 -mt-8 mx-4 lg:mx-auto max-w-7xl rounded-xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 px-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FeatureItem
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
