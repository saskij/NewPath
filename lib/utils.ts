import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Helper function to handle asset paths with basePath for GitHub Pages
 */
export function assetPath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/NewPath' : '';
    return `${basePath}${path}`;
}

