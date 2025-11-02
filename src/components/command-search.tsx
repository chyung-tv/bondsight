"use client";
import { useSearchStocks } from "@/context/search-context";
import {
  CommandEmpty,
  CommandInput,
  Command,
  CommandList,
  CommandGroup,
  CommandItem,
} from "./ui/command";
import { getStockBySymbol } from "@/actions/actions";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { StockBySymbol } from "@/lib/type";

export default function CommandSearch() {
  const {
    searchQuery,
    setSearchQuery,
    stockData,
    setStockData,
    setSelectedStock,
  } = useSearchStocks();

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const handleStockSelect = (selectedStock: StockBySymbol) => {
    setSelectedStock(selectedStock);
    setSearchQuery("");
  };

  useEffect(() => {
    const fetchStockData = async () => {
      if (!debouncedSearchQuery.trim()) {
        setStockData(null);
        return;
      }

      const symbol = debouncedSearchQuery.trim().toUpperCase();
      const result = await getStockBySymbol(symbol);
      setStockData(result || null);
    };

    fetchStockData();
  }, [debouncedSearchQuery, setStockData]);

  return (
    <Command shouldFilter={false} className="max-w-md mx-auto mb-8">
      <CommandInput
        placeholder="Type a command or search..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>Type to search for stocks</CommandEmpty>
        <CommandGroup>
          {stockData &&
            stockData.map((stock, index) => (
              <CommandItem
                key={`${stock.symbol}-${index}`}
                className="flex justify-between cursor-pointer"
                onSelect={() => handleStockSelect(stock)}
              >
                <p>
                  {stock.symbol} - {stock.name}
                </p>
                <p>{stock.exchange}</p>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
