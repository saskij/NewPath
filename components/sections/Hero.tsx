"use client";


import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-[700px] lg:h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">

            {/* Full Width Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={assetPath("/images/hero-truck-red.jpg")}
                    className="object-cover w-full h-full absolute inset-0 z-0"
                >
                    <source src={assetPath("/videos/hero-video.mp4")} type="video/mp4" />
                </video>

                {/* Fallback Image for when video doesn't load/failed - functionality handled by poster, 
                    but keeping an Image component conditionally or just relying on poster is cleaner. 
                    poster is sufficient for standard HTML5 video fallback until load. 
                */}

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent lg:to-black/30" />
            </div>

            <Container className="relative z-10 w-full">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl mx-auto lg:mx-0">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-lg">
                            Drive Your Business <br />
                            <span className="text-primary-foreground md:text-white">Forward</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-100 max-w-2xl leading-relaxed drop-shadow-md mx-auto lg:mx-0">
                            Reliable trucking and logistics services across North America. We ensure your cargo arrives safely and on time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <Button size="lg" className="h-16 px-10 text-xl gap-3 shadow-2xl bg-primary hover:bg-primary/90 border-2 border-transparent hover:border-white/20 transition-all duration-300">
                                Request a Quote <ArrowRight className="h-6 w-6" />
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
