import Link from "next/link";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <Hero />
    </main>
  );
}
