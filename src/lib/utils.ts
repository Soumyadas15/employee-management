import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


/**
 * Creates a class name from a list of class values.
 * @param inputs - A list of class values.
 * @returns A single class name composed of all the class values.
 */


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}