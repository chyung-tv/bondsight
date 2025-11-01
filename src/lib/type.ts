import z from "zod";
import { getStockBySymbolResSchema } from "./validation";
export type StockBySymbol = z.infer<typeof getStockBySymbolResSchema>;
