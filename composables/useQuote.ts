const BASE_API_URL_QUOTES = "https://api.quotable.io";
const RANDOM_QUOTES = `${BASE_API_URL_QUOTES}/random`;

export default async function (): Quote {
  const resultFetch = await fetch(RANDOM_QUOTES);
  const result = await resultFetch.json();
  return result;
}
