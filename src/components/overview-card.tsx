import { StockBySymbol, StockFinancialScore } from "@/lib/type";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

type OverviewCardProps = {
  stock: StockBySymbol | null;
  financialScore: StockFinancialScore | null;
};

export default function OverviewCard({
  stock,
  financialScore,
}: OverviewCardProps) {
  if (!stock) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">
            Select a stock to see detailed analysis
          </p>
        </CardContent>
      </Card>
    );
  }

  const formatCurrency = (amount: number, currency: string = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{stock.name}</span>
          <span className="text-lg font-mono bg-blue-100 px-2 py-1 rounded">
            {stock.symbol}
          </span>
        </CardTitle>
        <CardDescription>
          {stock.currency} • {stock.exchange} • {stock.exchangeFullName}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {financialScore ? (
          <>
            {/* Key Financial Scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-700">
                  {financialScore.altmanZScore.toFixed(2)}
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  Altman Z-Score
                </div>
                <div className="text-xs text-blue-500 mt-1">
                  {financialScore.altmanZScore > 3
                    ? "Strong Financial Health"
                    : financialScore.altmanZScore > 1.8
                    ? "Moderate Risk"
                    : "High Distress Risk"}
                </div>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="text-3xl font-bold text-green-700">
                  {financialScore.piotroskiScore}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  Piotroski Score
                </div>
                <div className="text-xs text-green-500 mt-1">
                  {financialScore.piotroskiScore >= 7
                    ? "High Quality"
                    : financialScore.piotroskiScore >= 4
                    ? "Medium Quality"
                    : "Low Quality"}
                </div>
              </div>
            </div>

            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-purple-700">
                    Market & Size
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Market Cap
                    </span>
                    <span className="font-medium">
                      {formatCurrency(
                        financialScore.marketCap,
                        financialScore.reportedCurrency
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Total Assets
                    </span>
                    <span className="font-medium">
                      {formatCurrency(
                        financialScore.totalAssets,
                        financialScore.reportedCurrency
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Revenue
                    </span>
                    <span className="font-medium">
                      {formatCurrency(
                        financialScore.revenue,
                        financialScore.reportedCurrency
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">EBIT</span>
                    <span className="font-medium">
                      {formatCurrency(
                        financialScore.ebit,
                        financialScore.reportedCurrency
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-orange-700">
                    Financial Position
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Working Capital
                    </span>
                    <span
                      className={`font-medium ${
                        financialScore.workingCapital >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formatCurrency(
                        financialScore.workingCapital,
                        financialScore.reportedCurrency
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Retained Earnings
                    </span>
                    <span
                      className={`font-medium ${
                        financialScore.retainedEarnings >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formatCurrency(
                        financialScore.retainedEarnings,
                        financialScore.reportedCurrency
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Total Liabilities
                    </span>
                    <span className="font-medium">
                      {formatCurrency(
                        financialScore.totalLiabilities,
                        financialScore.reportedCurrency
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Reporting Currency
                    </span>
                    <span className="font-medium">
                      {financialScore.reportedCurrency}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Ratios */}
            <Card className="border-l-4 border-l-indigo-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-indigo-700">
                  Key Financial Ratios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-indigo-50 rounded-lg">
                    <div className="text-lg font-semibold text-indigo-700">
                      {(
                        (financialScore.workingCapital /
                          financialScore.totalAssets) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div className="text-sm text-indigo-600">
                      Working Capital/Assets
                    </div>
                  </div>
                  <div className="text-center p-3 bg-indigo-50 rounded-lg">
                    <div className="text-lg font-semibold text-indigo-700">
                      {(
                        (financialScore.retainedEarnings /
                          financialScore.totalAssets) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div className="text-sm text-indigo-600">
                      Retained Earnings/Assets
                    </div>
                  </div>
                  <div className="text-center p-3 bg-indigo-50 rounded-lg">
                    <div className="text-lg font-semibold text-indigo-700">
                      {(
                        (financialScore.ebit / financialScore.totalAssets) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div className="text-sm text-indigo-600">EBIT/Assets</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Score Summary */}
            <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
              <CardHeader>
                <CardTitle className="text-base">
                  Financial Health Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Altman Z-Score</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-300 ${
                            financialScore.altmanZScore > 3
                              ? "bg-gradient-to-r from-green-400 to-green-600"
                              : financialScore.altmanZScore > 1.8
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                              : "bg-gradient-to-r from-red-400 to-red-600"
                          }`}
                          style={{
                            width: `${Math.min(
                              100,
                              Math.max(
                                10,
                                (financialScore.altmanZScore / 5) * 100
                              )
                            )}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-lg font-bold">
                        {financialScore.altmanZScore.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Piotroski Quality Score
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-300 ${
                            financialScore.piotroskiScore >= 7
                              ? "bg-gradient-to-r from-green-400 to-green-600"
                              : financialScore.piotroskiScore >= 4
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                              : "bg-gradient-to-r from-red-400 to-red-600"
                          }`}
                          style={{
                            width: `${
                              (financialScore.piotroskiScore / 9) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-lg font-bold">
                        {financialScore.piotroskiScore}/9
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Analysis based on {financialScore.symbol} financial data
                  reported in {financialScore.reportedCurrency}
                </p>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="border-dashed border-gray-300">
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">
                Loading financial analysis for {stock.symbol}...
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
