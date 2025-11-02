import CommandSearch from "@/components/command-search";
import SearchRes from "@/components/search-res";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-8 max-w-4xl">
      <Head />
      <CommandSearch />
      <SearchRes />
    </main>
  );
}

export function Head() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        BondSight
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Get the Analysis You Need to Make Informed Investment Decisions
      </p>
    </div>
  );
}
