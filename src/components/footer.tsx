import { cn } from "@/lib/utils";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("p-2 text-center text-sm text-gray-500", className)}>
      © 2024 BondSight. All rights reserved.
    </footer>
  );
}
