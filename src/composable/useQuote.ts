import type { Quote } from "@/models/Quote";

const BASE_API_URL_QUOTES = "https://dummyjson.com/quotes/";
const RANDOM_QUOTES = `${BASE_API_URL_QUOTES}/random`;

export default async function(): Promise<Quote> {
  const resultFetch = await fetch(RANDOM_QUOTES);
  const result = await resultFetch.json();
  return result;
}
