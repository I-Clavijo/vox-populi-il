import Link from "next/link";
import Hero from "./components/Hero";
import BillsList from "./components/BillsList";
import CategoryGrid from "./components/CategoryGrid";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <BillsList title="Recent Bills" />
      <BillsList title="Trending Bills" />
      <CategoryGrid />
    </main>
  );
}
