import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const splitCamelCaseToWords = (input: string) => {
  return input.replace(/([A-Z])/g, " $1").trim();
};

export const convertToReadableNumber = (number: number) => {
  if (number < 999)
    return number;
  else if (number <= 999000)
    return (number / 1000).toPrecision(2) + 'k';
  else if (number <= 999000000)
    return (number / 1000000).toPrecision(2) + 'm';
  else if (number <= 999000000000)
    return (number / 1000000000).toPrecision(2) + 'B';
  else (number <= 999000000000000)
  return (number / 1000000000000).toPrecision(2) + 'T';
}

export const convertToReadableTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  if (hours === 0) {
    return `${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}

export const newsletterFormSchema = () =>
  z.object({
    email: z.string().email({ message: 'Must be a valid email eg. myname@example.com' })
  });

export const searchFormSchema = () =>
  z.object({
    search: z.string().min(2, { message: "Search cannot be less than two characters" })
  });


export const commentFormSchema = (state: 'comment' | 'reply') =>
  z.object({
    postId: z.string(),
    comment: state === 'comment' ? z.string().min(1, { message: 'This field cannot be empty' }) : z.string().optional(),
    commentId: state === 'reply' ? z.string() : z.string().optional(),
    reply: state === 'reply' ? z.string().min(1, { message: 'This field cannot be empty' }) : z.string().optional(),
    replyTo: state === 'reply' ? z.string() : z.string().optional(),
  });

export const reviewFormSchema = () =>
  z.object({
    review: z.string().min(3, { message: "Review must have at least 3 characters" }),
    rating: z.number()
  });
