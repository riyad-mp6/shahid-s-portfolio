import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import CaseWhatWeDid from "@/components/portfolio/caseStudy/CaseWhatWeDid";
import CaseProcess from "@/components/portfolio/caseStudy/CaseProcess";
import CaseResults from "@/components/portfolio/caseStudy/CaseResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import CaseDivider from "@/components/portfolio/caseStudy/CaseDivider";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";

const HERO_IMG = "/images/align/website.png";
const GOOGLE_IMG = "/images/align/google.ad.1.jpg";
const META_IMG = "/images/align/facebook.ad.1.jpg";
const WEBSITE_URL = "https://alignagents.com/";

const TITLE = (
  <>
    Real Estate Lead
    <br />
    Generation
  </>
);

const DETAILS = [
  { label: "Client", value: "Align Real Estate" },
  { label: "Role", value: "Paid Ads Manager" },
  { label: "Market", value: "Florida, United States" },
  { label: "Duration", value: "3 Months" },
  { label: "Platforms", value: "Google Ads & Meta Ads" },
  { label: "Year", value: "2026" },
];

const OBJECTIVE =
  "The main objective was to generate qualified real-estate leads in the Florida market through paid advertising on Google Ads and Meta Ads.";

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
  { value: "$4,584.80", label: "Total Ad Spend" },
  { value: "282", label: "Total Leads" },
  { value: "$16.26", label: "Average CPL" },
  { value: "38", label: "Qualified Leads" },
  { value: "12", label: "Sales" },
];

const PLATFORMS = [
  {
    name: "Google Ads",
    summary: "193 Leads · $12.60 CPL",
    image: GOOGLE_IMG,
    imageAlt: "Google Ads dashboard performance",
  },
  {
    name: "Meta Ads",
    summary: "89 Leads · $24.20 CPL",
    image: META_IMG,
    imageAlt: "Meta Ads dashboard performance",
  },
];

const CONCLUSION =
  "Over a 3-month paid advertising campaign, we generated 282 leads through Google Ads and Meta Ads, including 38 qualified leads and 12 sales. The campaign generated leads through both advertising platforms and was evaluated based on lead volume, cost per lead, lead quality, and sales performance.";

export default function CaseStudy01() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />

      <main>
        <CaseHero
          title={TITLE}
          subtitle="Align Real Estate"
          image={HERO_IMG}
          imageAlt="Align Real Estate website screenshot"
          details={DETAILS}
          websiteUrl={WEBSITE_URL}
        />
        <CaseDivider />
        <CaseObjective text={OBJECTIVE} />
        <CaseDivider />
        <CaseWhatWeDid items={WHAT_WE_DID} />
        <CaseDivider />
        <CaseProcess steps={PROCESS_STEPS} text={PROCESS_TEXT} />
        <CaseDivider />
        <CaseResults stats={STATS} platforms={PLATFORMS} />
        <CaseDivider />
        <CaseConclusion>{CONCLUSION}</CaseConclusion>
      </main>

      <Footer />
      <UpButton />
    </div>
  );
}