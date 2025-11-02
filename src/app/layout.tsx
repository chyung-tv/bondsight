import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/app/globals.css";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explore Next.js",
  description: "Trying out Next.js features and API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} antialiased flex flex-col min-h-screen`}
      >
        <NavigationBar className="max-h-12 text-2xl font-semibold border-b w-full" />
        <div className="flex-1">{children}</div>
        <Footer className="border-t" />
      </body>
    </html>
  );
}
