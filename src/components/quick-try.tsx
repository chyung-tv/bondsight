"use client";
import { useSearchStocks } from "@/context/search-context";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Input } from "./ui/input";
import { getStockBySymbol } from "@/actions/actions";

export default function QuickTry() {
  // states
  const { searchQuery, setSearchQuery, setStockData } = useSearchStocks();

  // handlers
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here, e.g., fetch stock data based on searchQuery
    const symbol = searchQuery.trim().toUpperCase();
    const data = await getStockBySymbol(symbol);
    if (data) {
      setStockData(data);
    }
  };
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight">A Quick Try</h2>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Stock Search</CardTitle>
          <CardDescription>
            Enter a stock symbol to get information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSearch}>
            <Input
              placeholder="Enter stock symbol (e.g., AAPL)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
            <Button type="submit" className="w-full">
              Search
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
