import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import NaturWhatWeDid from "@/components/portfolio/caseStudy/NaturWhatWeDid";
import NaturProcess from "@/components/portfolio/caseStudy/NaturProcess";
import NaturResults from "@/components/portfolio/caseStudy/NaturResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";

// Add later, e.g. "/image/naturbummler/hero.png"
const HERO_IMG = "/image/naturebummler/website-5.png";
const RESULTS_IMG = "/image/naturebummler/amazon-ad5.png";

// Empty hides the button
const WEBSITE_URL = "https://naturbummler.de/";

const TITLE = (
  <>
    Amazon PPC
    <br />
    &amp; Growth
  </>
);

const DETAILS = [
  { label: "Brand", value: "NATURBUMMLER" },
  { label: "Industry", value: "E-commerce — Outdoor Gear and Rooftop Tents" },
  { label: "Role", value: "Amazon Brand PPC" },
  { label: "Platform", value: "Amazon" },
  { label: "Duration", value: "6 Months" },
  { label: "Period", value: "Sep 2024 – Feb 2025" },
];

const OBJECTIVE =
  "Scale Amazon sales by improving advertising efficiency, increasing product visibility, and strengthening conversion performance.";

const CHALLENGE =
  "High ACoS, low click-through and conversion rates, and weak organic rankings were limiting advertising efficiency and growth.";

const WHAT_WE_DID = [
  {
    title: "PPC Campaign Restructuring",
    text: "Restructured campaigns to improve targeting, budget allocation, and advertising efficiency.",
  },
  {
    title: "Listing Optimization",
    text: "Improved product listings to support stronger click-through and conversion rates.",
  },
  {
    title: "External Traffic Integration",
    text: "Integrated external traffic strategies to expand product visibility beyond Amazon advertising.",
  },
  {
    title: "Performance Optimization",
    text: "Focused on reducing ACoS while improving conversion rates and overall sales performance.",
  },
];

const PROCESS_STEPS = [
  "Audit",
  "Restructure",
  "Optimize Listings",
  "Integrate Traffic",
  "Measure & Scale",
];

const PROCESS_TEXT =
  "Over six months, the approach combined advertising optimization, listing improvements, and external traffic to address performance bottlenecks and support marketplace growth.";

const STATS = [
  { value: "6,550", label: "Total Order Items" },
  { value: "€250.1k", label: "Ordered Product Sales" },
  { value: "€38.18", label: "Average Sales / Order Item" },
];

const CONCLUSION =
  "Over the six-month period from September 2024 to February 2025, the strategy focused on improving Amazon PPC efficiency, optimizing product listings, and strengthening conversion performance to support six-figure sales growth.";

export default function CaseStudy05() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />
      <main>
        <CaseHero
          title={TITLE}
          subtitle="NATURBUMMLER"
          image={HERO_IMG}
          imageAlt="NATURBUMMLER Amazon listing screenshot"
          details={DETAILS}
          websiteUrl={WEBSITE_URL}
        />
        <CaseObjective text={OBJECTIVE} />
        <CaseObjective title="Challenge" text={CHALLENGE} />
        <NaturWhatWeDid items={WHAT_WE_DID} />
        <NaturProcess steps={PROCESS_STEPS} text={PROCESS_TEXT} />
        <NaturResults
          stats={STATS}
          image={RESULTS_IMG}
          imageAlt="Amazon sales dashboard results"
        />
        <CaseConclusion>{CONCLUSION}</CaseConclusion>
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}