"use client";

import { getFinancialScore } from "@/actions/actions";
import { useSearchStocks } from "@/context/search-context";
import { useEffect } from "react";
import OverviewCard from "./overview-card";

export default function SearchRes() {
  const {
    selectedStock,
    selectedStockFinancialScore,
    setSelectedStockFinancialScore,
  } = useSearchStocks();

  useEffect(() => {
    const fetchFinancialScore = async () => {
      if (!selectedStock) {
        setSelectedStockFinancialScore(null);
        return;
      }

      try {
        const data = await getFinancialScore(selectedStock.symbol);
        // Destructure the first item from the array
        const financialScore = data?.[0] || null;
        setSelectedStockFinancialScore(financialScore);
      } catch (error) {
        console.error("Error fetching financial score:", error);
        setSelectedStockFinancialScore(null);
      }
    };

    fetchFinancialScore();
  }, [selectedStock, setSelectedStockFinancialScore]);

  console.log("Selected Stock Financial Score:", selectedStockFinancialScore);

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Search Results
        </h2>
      </div>

      <div className="grid gap-4 grid-cols-1">
        <OverviewCard
          stock={selectedStock}
          financialScore={selectedStockFinancialScore}
        />
      </div>
    </section>
  );
}
