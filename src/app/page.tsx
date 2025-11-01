import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-8 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Hello, Next.js!
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          What this app might do
        </p>
      </div>

      {/* Quick Try Section */}
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
            <form className="space-y-4">
              <Input
                placeholder="Enter stock symbol (e.g., AAPL)"
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Search
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Data Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Data of the Day
          </h2>
        </div>

        <div className="grid gap-2 grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sample Data 1</CardTitle>
              <CardDescription>Description of the data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Some sample content here
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sample Data 2</CardTitle>
              <CardDescription>Description of the data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Some sample content here
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sample Data 3</CardTitle>
              <CardDescription>Description of the data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Some sample content here
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
