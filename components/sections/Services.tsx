"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/modules/ServiceCard";
import { TrustBar } from "@/components/sections/TrustBar";
import { assetPath } from "@/lib/utils";
import { motion } from "framer-motion";

export function Services() {
    return (
        <section className="py-24 bg-gray-50 text-secondary relative overflow-hidden" id="services">
            {/* Background Texture/Pattern - Concrete/Industrial feel */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url(${assetPath("/images/background-pattern.png")})` }}></div>

            <Container className="relative z-10">
                {/* Section Header - Industrial Style */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 border-b-4 border-gray-200 pb-8">
                    <div className="max-w-3xl">
                        <span className="block text-primary font-black tracking-widest uppercase text-sm mb-2">
                            Our Services
                        </span>
                        <h2 className="text-5xl lg:text-6xl font-black text-secondary uppercase tracking-tight leading-none">
                            Comprehensive<br />Logistics
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-md font-medium mb-2">
                        Real trucks. Real drivers. <br />
                        <span className="text-secondary font-bold">Real results.</span>
                    </p>
                </div >

                {/* Service Cards Grid - Boxy & Bold */}
                < div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                    {/* FTL Card */}
                    < Link href="/services/ftl" className="group relative block bg-white h-[500px] shadow-lg hover:shadow-2xl transition-all duration-300 border-b-8 border-primary" >
                        <div className="relative h-2/3 w-full overflow-hidden">
                            <Image
                                src={assetPath("/images/services-truck.png")}
                                alt="Full Truckload Services"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="p-8 h-1/3 flex flex-col justify-between relative bg-white">
                            <div>
                                <h3 className="text-3xl font-black text-secondary uppercase mb-2 group-hover:text-primary transition-colors">
                                    Full Truckload
                                </h3>
                                <div className="h-1 w-12 bg-gray-300 group-hover:bg-primary transition-colors mb-4"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Nationwide Service</span>
                                <span className="h-10 w-10 bg-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link >

                    {/* LTL Card */}
                    < Link href="/services/ltl" className="group relative block bg-white h-[500px] shadow-lg hover:shadow-2xl transition-all duration-300 border-b-8 border-gray-800" >
                        <div className="relative h-2/3 w-full overflow-hidden">
                            <Image
                                src={assetPath("/images/services-truck-professional.png")}
                                alt="Less Than Truckload Services"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="p-8 h-1/3 flex flex-col justify-between relative bg-white">
                            <div>
                                <h3 className="text-3xl font-black text-secondary uppercase mb-2 group-hover:text-gray-800 transition-colors">
                                    Less Than Truckload
                                </h3>
                                <div className="h-1 w-12 bg-gray-300 group-hover:bg-gray-800 transition-colors mb-4"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Flexible Options</span>
                                <span className="h-10 w-10 bg-gray-100 flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link >
                </div >

                {/* Integrated Trust Bar - Industrial Style */}
                < div className="mt-20 border-t-2 border-gray-200 pt-8" >
                    <TrustBar className="bg-transparent border-none p-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                </div >
            </Container >
        </section >
    );
}
