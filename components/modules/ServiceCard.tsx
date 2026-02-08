import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    href: string;
    className?: string;
}

export function ServiceCard({ title, description, imageSrc, href, className }: ServiceCardProps) {
    return (
        <div className={cn("group overflow-hidden rounded-xl bg-white transition-all hover:shadow-2xl border border-gray-100 flex flex-col h-full", className)}>
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{description}</p>
                <Link href={href} className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
