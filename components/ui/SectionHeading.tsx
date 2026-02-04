import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
    light?: boolean; // For use on dark backgrounds
}

export function SectionHeading({
    title,
    subtitle,
    align = "center",
    light = false,
    className,
    ...props
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "flex flex-col mb-12",
                {
                    "items-center text-center": align === "center",
                    "items-start text-left": align === "left",
                    "items-end text-right": align === "right",
                },
                className
            )}
            {...props}
        >
            <h2
                className={cn(
                    "text-3xl font-bold tracking-tight sm:text-4xl",
                    light ? "text-white" : "text-secondary"
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "mt-4 text-lg max-w-2xl",
                        light ? "text-gray-300" : "text-gray-600"
                    )}
                >
                    {subtitle}
                </p>
            )}
            <div
                className={cn(
                    "mt-4 h-1 w-20 rounded-full",
                    light ? "bg-white/30" : "bg-primary"
                )}
            />
        </div>
    );
}
