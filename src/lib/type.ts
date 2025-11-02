import z from "zod";
import {
  getFinancialScoreResSchema,
  getStockBySymbolResSchema,
} from "./validation";
export type StocksBySymbol = z.infer<typeof getStockBySymbolResSchema>;

// type for a single stock data
export type StockBySymbol = StocksBySymbol[number];

export type StocksFinancialScore = z.infer<typeof getFinancialScoreResSchema>;

// type for a single financial score data
export type StockFinancialScore = StocksFinancialScore[number];
