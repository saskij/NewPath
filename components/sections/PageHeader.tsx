"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description?: string;
    imageSrc?: string;
}

export function PageHeader({
    title,
    description,
    imageSrc = assetPath("/images/new-path-truck-white.jpg")
}: PageHeaderProps) {
    return (
        <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            <Container className="relative z-10 w-full">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
                            {title}
                        </h1>

                        {description && (
                            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-sm">
                                {description}
                            </p>
                        )}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
