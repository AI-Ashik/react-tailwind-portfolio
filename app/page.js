import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <h2 className="text-white">
        <HeroSection />
      </h2>
    </main>
  );
}