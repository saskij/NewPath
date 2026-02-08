"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/modules/ServiceCard";
import { TrustBar } from "@/components/sections/TrustBar";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/utils";

export function Services() {
    const services = [
        {
            title: "Full Truckload (FTL)",
            description: "Dedicated, timely transport for large shipments. We provide exclusive trailer use for maximum efficiency.",
            imageSrc: assetPath("/images/services-truck.png"),
            href: "/services/ftl"
        },
        {
            title: "Less Than Truckload (LTL)",
            description: "Cost-effective shipping for smaller freight. Consolidate your cargo without compromising on speed.",
            imageSrc: assetPath("/images/services-truck-professional.png"),
            href: "/services/ltl"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="services" className="py-20 bg-white">
            <Container>


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Header + Services Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col justify-center"
                    >
                        <div className="mb-10">
                            <h2 className="text-4xl font-extrabold text-secondary mb-4 tracking-tight">
                                Comprehensive Logistics Services
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Tailored transportation solutions to meet all of your shipping needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <ServiceCard
                                        {...service}
                                        className="shadow-sm hover:shadow-xl transition-all duration-300 border-none bg-white"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual Column - White Peterbilt Truck Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={assetPath("/images/new-path-truck-white.jpg")}
                            alt="New Path Logistics Professional Fleet"
                            fill
                            className="object-cover object-center"
                            unoptimized
                        />
                    </motion.div>
                </div>

                {/* Integrated Trust Bar at Bottom of Section */}
                <div className="mt-16">
                    <TrustBar />
                </div>
            </Container>
        </section>
    );
}
