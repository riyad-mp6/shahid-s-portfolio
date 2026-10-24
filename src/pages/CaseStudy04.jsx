import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import HikocoWhatWeDid from "@/components/portfolio/caseStudy/HikocoWhatWeDid";
import CaseProcess from "@/components/portfolio/caseStudy/CaseProcess";
import HikocoResults from "@/components/portfolio/caseStudy/HikocoResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";

// Add later, e.g. "/image/hikoco/website.png"
const HERO_IMG = "/image/Hikoco/hikoco-website.png";
const GOOGLE_IMG = "/image/Hikoco/google-ads4.png";
const META_IMG = "/image/Hikoco/Screenshot 2025-10-24 113830.png";

// Empty hides the button
const WEBSITE_URL = "https://hikoco.co.nz/";

const TITLE = (
  <>
    Skincare Sales
    <br />
    Growth
  </>
);

const DETAILS = [
  { label: "Client", value: "Hikoco" },
  { label: "Industry", value: "Retail Skincare" },
  { label: "Role", value: "Paid Ads & Organic Growth" },
  { label: "Market", value: "New Zealand" },
  { label: "Duration", value: "3 Months" },
  { label: "Platforms", value: "Google Ads & Meta Ads" },
  { label: "Year", value: "Mar – May 2025" },
];

const OBJECTIVE =
  "Increase online skincare sales in New Zealand by combining paid advertising with organic growth to attract relevant shoppers and turn product interest into purchases.";

const CHALLENGE =
  "The challenge was to attract high-intent skincare shoppers, convert website traffic into purchases, and maintain efficient acquisition costs across multiple marketing channels.";

const WHAT_WE_DID = [
  {
    title: "Google Ads",
    text: "Targeted high-intent product searches to capture shoppers ready to buy.",
  },
  {
    title: "Meta Ads",
    text: "Used product-focused campaigns to drive discovery, retarget interested shoppers, and encourage purchases.",
  },
  {
    title: "Organic Growth",
    text: "Focused on improving search visibility, product-page relevance, and organic product discovery.",
  },
  {
    title: "Performance Optimization",
    text: "Reviewed campaign performance and adjusted acquisition efforts to improve purchase efficiency.",
  },
];

const PROCESS_STEPS = [
  "Research",
  "Channel Strategy",
  "Campaign Setup",
  "Optimize",
  "Measure",
];

const PROCESS_TEXT =
  "We combined search-led acquisition, social advertising, and organic discovery, then evaluated performance using purchases, cost per purchase, and return on ad spend.";

const STATS = [
  { value: "7,000", label: "Unique Store Purchases" },
  { value: "$45,190", label: "Total Ad Spend" },
  { value: "$189,800", label: "Platform-Attributed Revenue" },
  { value: "4.20×", label: "Platform-Attributed ROAS" },
];

const PLATFORMS = [
  {
    name: "Google Ads",
    metrics: [
      { label: "Ad Spend", value: "$24,940" },
      { label: "Purchases", value: "4,000" },
      { label: "Cost per Purchase", value: "$6.24" },
    ],
    image: GOOGLE_IMG,
    imageAlt: "Google Ads dashboard performance",
  },
  {
    name: "Meta Ads",
    metrics: [
      { label: "Ad Spend", value: "$20,250" },
      { label: "Purchases", value: "2,500" },
      { label: "Cost per Purchase", value: "$8.10" },
    ],
    image: META_IMG,
    imageAlt: "Meta Ads dashboard performance",
  },
];

const CONCLUSION =
  "The combined marketing approach supported 7,000 unique store purchases over three months, with an average order value of $29.20.";

export default function CaseStudy04() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />
      <main>
        <CaseHero
          title={TITLE}
          subtitle="Hikoco"
          image={HERO_IMG}
          imageAlt="Hikoco website screenshot"
          details={DETAILS}
          websiteUrl={WEBSITE_URL}
        />
        <CaseObjective text={OBJECTIVE} />
        <CaseObjective title="Challenge" text={CHALLENGE} />
        <HikocoWhatWeDid items={WHAT_WE_DID} />
        <CaseProcess steps={PROCESS_STEPS} text={PROCESS_TEXT} />
        <HikocoResults stats={STATS} platforms={PLATFORMS} />
        <CaseConclusion>{CONCLUSION}</CaseConclusion>
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}