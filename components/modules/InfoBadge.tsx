import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoBadgeProps {
    label: string;
    value: string;
    icon?: LucideIcon;
    className?: string;
    variant?: "dark" | "light";
}

export function InfoBadge({ label, value, icon: Icon, className, variant = "light" }: InfoBadgeProps) {
    const isDark = variant === "dark";

    return (
        <div className={cn(
            "inline-flex items-center space-x-2 px-4 py-2 rounded-full border",
            isDark ? "bg-secondary text-white border-white/20" : "bg-white text-secondary border-gray-200",
            className
        )}>
            {Icon && <Icon className={cn("h-4 w-4", isDark ? "text-primary-foreground" : "text-primary")} />}
            <span className={cn("text-xs uppercase font-bold tracking-wider opacity-80")}>{label}:</span>
            <span className="font-mono font-medium">{value}</span>
        </div>
    );
}
