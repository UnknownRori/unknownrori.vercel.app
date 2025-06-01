import type { Quote } from "@/models/Quote";

const BASE_API_URL_QUOTES = "https://quoteslate.vercel.app";
const RANDOM_QUOTES = `${BASE_API_URL_QUOTES}/api/quotes/random`;

export default async function(): Promise<Quote> {
  const resultFetch = await fetch(RANDOM_QUOTES);
  const result = await resultFetch.json();
  return result;
}
