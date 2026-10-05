import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import QuickResults from "@/components/portfolio/QuickResults";
import CaseStudies from "@/components/portfolio/CaseStudies";
import WhatIDo from "@/components/portfolio/WhatIDo";
import Workflow from "@/components/portfolio/Workflow";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <QuickResults />
        <CaseStudies />
        <WhatIDo />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}