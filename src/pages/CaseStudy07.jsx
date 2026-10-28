import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import RoofWhatWeDid from "@/components/portfolio/caseStudy/RoofWhatWeDid";
import RoofProcess from "@/components/portfolio/caseStudy/RoofProcess";
import RoofResults from "@/components/portfolio/caseStudy/RoofResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";


const HERO_IMG = "/image/roofing/website roofing.png";
const GOOGLE_IMG = "/image/roofing/Screenshot112436.png";
const META_IMG = "/image/roofing/Screenshot103623.png";

const WEBSITE_URL = "https://actionroofing.com/";

const TITLE = (
  <>
    Roofing Lead
    <br />
    Generation
  </>
);

const DETAILS = [
  { label: "Client", value: "Action Roofing" },
  { label: "Industry", value: "Construction · Roofing Services" },
  { label: "Service Area", value: "Florida, US" },
  { label: "Duration", value: "6 Months" },
  { label: "Period", value: "May 1 – Oct 31, 2024" },
  { label: "Channels", value: "Google Ads · Meta Ads · Local SEO" },
];

const OBJECTIVE =
  "Generate qualified roofing leads and inspection bookings in Florida during peak season while keeping advertising costs measurable.";

const CHALLENGE =
  "The campaign needed to reach Florida homeowners, capture high-intent roofing searches, generate additional demand through social advertising, and turn incoming leads into qualified opportunities and booked inspections.";

const WHAT_WE_DID = [
  {
    title: "Google Ads",
    text: "Targeted homeowners searching for roofing services, roof replacements, and roof repairs.",
  },
  {
    title: "Meta Ads",
    text: "Used location-focused campaigns to reach homeowners and generate additional leads through Facebook and Instagram.",
  },
  {
    title: "Local SEO",
    text: "Supported local search visibility by improving the discoverability of roofing services and relevant business information.",
  },
  {
    title: "Lead Tracking & Optimization",
    text: "Monitored lead volume, cost per lead, qualification, and booked appointments to evaluate campaign performance.",
  },
];

const PROCESS_STEPS = [
  "Market Research",
  "Florida Location Targeting",
  "Campaign Setup",
  "Lead Tracking",
  "Optimization",
  "Results Review",
];

const PROCESS_TEXT =
  "Campaign performance was evaluated using lead volume, qualified leads, booked appointments, completed jobs, and estimated job revenue.";

const STATS = [
  { value: "$48,300", label: "Total Ad Spend" },
  { value: "756", label: "Total Leads" },
  { value: "$63.89", label: "Average Cost per Lead" },
  { value: "189", label: "Qualified Leads" },
  { value: "113", label: "Booked Appointments" },
  { value: "$486,370", label: "Estimated Revenue" },
];

const JOBS = [
  { count: "14", label: "Complete Roof Replacements", value: "$16,543" },
  { count: "58", label: "Major Roof Repairs", value: "$4,076" },
  { count: "40", label: "Minor Roof Repairs", value: "$459" },
];

const PLATFORMS = [
  {
    name: "Google Ads",
    metrics: [
      { label: "Ad Spend", value: "$28,300" },
      { label: "Clicks", value: "14,150" },
      { label: "Leads", value: "320" },
      { label: "Cost per Lead", value: "$88.44" },
    ],
    image: GOOGLE_IMG,
    imageAlt: "Google Ads dashboard performance",
  },
  {
    name: "Meta Ads",
    metrics: [
      { label: "Ad Spend", value: "$20,000" },
      { label: "Link Clicks", value: "26,670" },
      { label: "Leads", value: "436" },
      { label: "Cost per Lead", value: "$45.87" },
    ],
    image: META_IMG,
    imageAlt: "Meta Ads dashboard performance",
  },
];

const CONCLUSION =
  "Over the six-month campaign, the strategy generated 756 leads, 189 qualified leads, and 113 booked appointments from $48,300 in paid advertising spend.";

export default function CaseStudy07() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />
      <main>
        <CaseHero
          title={TITLE}
          subtitle="Action Roofing"
          image={HERO_IMG}
          imageAlt="Action Roofing website screenshot"
          details={DETAILS}
          websiteUrl={WEBSITE_URL}
        />
        <CaseObjective text={OBJECTIVE} />
        <CaseObjective title="Challenge" text={CHALLENGE} />
        <RoofWhatWeDid items={WHAT_WE_DID} />
        <RoofProcess steps={PROCESS_STEPS} text={PROCESS_TEXT} />
        <RoofResults stats={STATS} jobs={JOBS} platforms={PLATFORMS} />
        <CaseConclusion>{CONCLUSION}</CaseConclusion>
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}