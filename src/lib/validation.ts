import z from "zod";

export const getStockBySymbolResSchema = z.array(
  z.object({
    symbol: z.string(),
    name: z.string(),
    currency: z.string(),
    exchangeFullName: z.string(),
    exchange: z.string(),
  })
);

export const stockBySumbolSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  currency: z.string(),
  exchangeFullName: z.string(),
  exchange: z.string(),
});
