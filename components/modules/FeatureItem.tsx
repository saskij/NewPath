import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItemProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function FeatureItem({ icon: Icon, title, description, className }: FeatureItemProps) {
    return (
        <div className={cn("flex flex-row items-center p-4", className)}>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg mr-6">
                <Icon className="h-8 w-8" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl font-bold text-secondary mb-1">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{description}</p>
            </div>
        </div>
    );
}
