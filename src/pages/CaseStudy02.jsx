import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import CaseWhatWeDid from "@/components/portfolio/caseStudy/CaseWhatWeDid";
import CaseProcess from "@/components/portfolio/caseStudy/CaseProcess";
import CaseResults from "@/components/portfolio/caseStudy/CaseResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";

// Put images in public/images/true-story/ and set the paths.
const HERO_IMG = "";   // e.g. "/images/true-story/website.png"
const GOOGLE_IMG = ""; // e.g. "/images/true-story/google-ads.jpg"
const META_IMG = "";   // e.g. "/images/true-story/meta-ads.jpg"

// Add the real website URL when known. Empty hides the button.
const WEBSITE_URL = "";

const TITLE = (
  <>
    Real Estate Lead
    <br />
    Generation
  </>
);

const DETAILS = [
  { label: "Client", value: "True Story Realty" },
  { label: "Role", value: "Paid Ads Manager" },
  { label: "Market", value: "Los Angeles, United States" },
  { label: "Duration", value: "3 Months" },
  { label: "Platforms", value: "Google Ads & Meta Ads" },
  { label: "Year", value: "2026" },
];

const OBJECTIVE =
  "The main objective was to generate qualified real-estate leads in the Los Angeles market through paid advertising on Google Ads and Meta Ads.";

const WHAT_WE_DID = [
  "Paid campaign management",
  "Lead generation",
  "Campaign optimization",
  "Performance monitoring",
  "Cost-per-lead analysis",
];

const PROCESS_STEPS = [
  "Research",
  "Campaign Setup",
  "Launch",
  "Monitor",
  "Optimize",
  "Measure Results",
];

const PROCESS_TEXT =
  "The campaigns were monitored throughout the 3-month period and performance was evaluated based on lead volume, cost per lead, qualified leads, and sales.";

const STATS = [
  { value: "$5,050", label: "Total Ad Spend" },
  { value: "310", label: "Total Leads" },
  { value: "$16.29", label: "Average CPL" },
  { value: "44", label: "Qualified Leads" },
  { value: "14", label: "Sales" },
];

const PLATFORMS = [
  {
    name: "Google Ads",
    summary: "214 Leads · $13.41 CPL",
    image: GOOGLE_IMG,
    imageAlt: "Google Ads dashboard performance",
  },
  {
    name: "Meta Ads",
    summary: "96 Leads · $22.71 CPL",
    image: META_IMG,
    imageAlt: "Meta Ads dashboard performance",
  },
];

const CONCLUSION =
  "Over a 3-month paid advertising campaign, we generated 310 leads through Google Ads and Meta Ads, including 44 qualified leads and 14 sales, with a total advertising spend of $5,050.";

export default function CaseStudy02() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />
      <main>
        <CaseHero
          title={TITLE}
          subtitle="True Story Realty"
          image={HERO_IMG}
          imageAlt="True Story Realty website screenshot"
          details={DETAILS}
          websiteUrl={WEBSITE_URL}
        />
        <CaseObjective text={OBJECTIVE} />
        <CaseWhatWeDid items={WHAT_WE_DID} />
        <CaseProcess steps={PROCESS_STEPS} text={PROCESS_TEXT} />
        <CaseResults stats={STATS} platforms={PLATFORMS} />
        <CaseConclusion>{CONCLUSION}</CaseConclusion>
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}