import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Helper function to handle asset paths with basePath for GitHub Pages
 * Always uses basePath to match next.config.ts configuration
 */
export function assetPath(path: string): string {
    const basePath = '/NewPath';
    return `${basePath}${path}`;
}

