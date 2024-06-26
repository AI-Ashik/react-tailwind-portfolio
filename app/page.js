import AboutSections from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-8 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSections />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
