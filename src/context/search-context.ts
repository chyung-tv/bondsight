import { StockBySymbol, StocksBySymbol, StockFinancialScore } from "@/lib/type";
import { create } from "zustand";

type SearchState = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  stockData: StocksBySymbol | null;
  setStockData: (data: StocksBySymbol | null) => void;
  selectedStock: StockBySymbol | null;
  setSelectedStock: (stock: StockBySymbol | null) => void;
  selectedStockFinancialScore: StockFinancialScore | null;
  setSelectedStockFinancialScore: (score: StockFinancialScore | null) => void;
};

export const useSearchStocks = create<SearchState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  stockData: null,
  setStockData: (data: StocksBySymbol | null) => set({ stockData: data }),
  selectedStock: null,
  setSelectedStock: (stock: StockBySymbol | null) =>
    set({ selectedStock: stock }),
  selectedStockFinancialScore: null,
  setSelectedStockFinancialScore: (score: StockFinancialScore | null) =>
    set({ selectedStockFinancialScore: score }),
}));
