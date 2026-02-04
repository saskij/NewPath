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
            imageSrc: "https://images.unsplash.com/photo-1605218427306-dd83d11b052e?q=80&w=2940&auto=format&fit=crop",
            href: "/services/ftl"
        },
        {
            title: "Less Than Truckload (LTL)",
            description: "Cost-effective shipping for smaller freight. Consolidate your cargo without compromising on speed.",
            imageSrc: "https://images.unsplash.com/photo-1566232392379-afd9298e6a46?q=80&w=2940&auto=format&fit=crop",
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
        <section id="services" className="py-24 bg-gray-50/50">
            <Container>
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-2">Comprehensive Logistics Services</h2>
                        <p className="text-gray-600 max-w-2xl">Tailored transportation solutions to meet all of your shipping needs.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Services Cards Column - Left Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <ServiceCard
                                    {...service}
                                    className="shadow-sm hover:shadow-md transition-shadow duration-300"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Visual Column - Peterbilt Truck Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-7 relative h-[500px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-100"
                    >
                        <div className="absolute inset-0 m-4 rounded-xl overflow-hidden">
                            <Image
                                src={assetPath("/images/services-truck.png")}
                                alt="New Path Logistics Peterbilt Fleet"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        {/* Overlay Content */}
                        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur top-auto left-auto p-6 rounded-lg shadow-lg max-w-sm border border-white/50">
                            <div className="flex items-center space-x-4 mb-2">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h4 className="font-bold text-secondary">Verified Excellence</h4>
                            </div>
                            <p className="text-sm text-gray-600">Our fleet features top-of-the-line Peterbilt trucks, inspected daily for safety and reliability.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Integrated Trust Bar at Bottom of Section */}
                <div className="mt-20">
                    <TrustBar />
                </div>
            </Container>
        </section>
    );
}
