"use server";
import { env } from "process";
import { getStockBySymbolResSchema } from "../lib/validation";

export async function getStockBySymbol(symbol: string = "AAPL") {
  const res = await fetch(`
   https://financialmodelingprep.com/stable/search-symbol?query=${symbol}&apikey=${env.FMP_API_KEY}`);
  const data = await res.json();

  //validate data with zod
  const parsedData = getStockBySymbolResSchema.safeParse(data);
  if (!parsedData.success) {
    console.error("Invalid data format", parsedData.error);
    return;
  }

  return parsedData.data;
}
