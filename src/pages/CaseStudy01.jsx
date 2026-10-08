import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import CaseWhatWeDid from "@/components/portfolio/caseStudy/CaseWhatWeDid";
import CaseProcess from "@/components/portfolio/caseStudy/CaseProcess";
import CaseResults from "@/components/portfolio/caseStudy/CaseResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";

export default function CaseStudy01() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />
      <main>
        <CaseHero />
        <CaseObjective />
        <CaseWhatWeDid />
        <CaseProcess />
        <CaseResults />
        <CaseConclusion />
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}