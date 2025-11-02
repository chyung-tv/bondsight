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

export const getFinancialScoreResSchema = z.array(
  z.object({
    symbol: z.string(),
    reportedCurrency: z.string(),
    altmanZScore: z.number(),
    piotroskiScore: z.number(),
    workingCapital: z.number(),
    totalAssets: z.number(),
    retainedEarnings: z.number(),
    ebit: z.number(),
    marketCap: z.number(),
    totalLiabilities: z.number(),
    revenue: z.number(),
  })
);
