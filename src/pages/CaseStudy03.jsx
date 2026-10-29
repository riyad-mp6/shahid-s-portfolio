import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import HapeWhatWeDid from "@/components/portfolio/caseStudy/HapeWhatWeDid";
import HapeProcess from "@/components/portfolio/caseStudy/HapeProcess";
import HapeResults from "@/components/portfolio/caseStudy/HapeResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";


const HERO_IMG = "/image/hapetoys/website.3.png";
const GOOGLE_IMG = "/image/hapetoys/Screenshot184129.png";
const META_IMG = "/image/hapetoys/Screenshot204658.png";

const WEBSITE_URL = "https://toys.hape.com/";

const TITLE = (
  <>
    E-commerce Sales
    <br />
    Generation
  </>
);

const DETAILS = [
  { label: "Client", value: "Hape Holding AG" },
  { label: "Industry", value: "Children's & Educational Toys" },
  { label: "Role", value: "Paid Ads Manager" },
  { label: "Market", value: "United States" },
  { label: "Duration", value: "4 Months" },
  { label: "Platforms", value: "Google Ads & Meta Ads" },
  { label: "Year", value: "2025" },
];

const OBJECTIVE =
  "Focused on attracting potential customers, driving product-page traffic, and converting shopping interest into purchases while monitoring advertising costs and sales performance.";

const WHAT_WE_DID = [
  {
    title: "Paid Campaign Management",
  },
  {
    title: "Product Promotion",
  },
  {
    title: "Campaign Monitoring",

  },
  {
    title: "Campaign Optimization",
  
  },
  {
    title: "Sales Performance Analysis",

  },
];

const PROCESS_STEPS = [
  {
    title: "Product & Audience Research",
  },
  {
    title: "Channel & Campaign Planning",
  },
  {
    title: "Campaign & Creative Launch",
  },
  {
    title: "Performance & Purchase Optimization",
  },
  {
    title: "Budget & Product Performance Review",
  },
  {
    title: "Revenue & Attribution Analysis",
  },
];

const PROCESS_TEXT = "";

const STATS = [
  { value: "$32,000", label: "Total Ad Spend" },
  { value: "2,050", label: "Unique Store Orders" },
  { value: "$123,000", label: "Store Revenue" },
  { value: "3.84×", label: "Revenue / Ad Spend" },
];

const PLATFORMS = [
  {
    name: "Google Ads",
    summary: "$18,000 Spend · 4.67× ROAS",
    metrics: [
      { label: "Ad Spend", value: "$18,000" },
      { label: "Purchases", value: "1,400" },
      { label: "Cost per Purchase", value: "$12.86" },
      { label: "Attributed Revenue", value: "$84,000" },
    ],
    image: GOOGLE_IMG,
    imageAlt: "Google Ads dashboard performance",
  },
  {
    name: "Meta Ads",
    summary: "$14,000 Spend · 4.29× ROAS",
    metrics: [
      { label: "Ad Spend", value: "$14,000" },
      { label: "Purchases", value: "1,000" },
      { label: "Cost per Purchase", value: "$14.00" },
      { label: "Attributed Revenue", value: "$60,000" },
    ],
    image: META_IMG,
    imageAlt: "Meta Ads dashboard performance",
  },
];

const CONCLUSION =
  "The campaign focused on driving product interest, generating purchases, and evaluating advertising efficiency through cost-per-purchase and return-on-ad-spend metrics.";

export default function CaseStudy03() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />
      <main>
        <CaseHero
          title={TITLE}
          subtitle="Hape Holding AG"
          image={HERO_IMG}
          imageAlt="Hape Toys website screenshot"
          details={DETAILS}
          websiteUrl={WEBSITE_URL}
        />
        <CaseObjective text={OBJECTIVE} />
        <HapeWhatWeDid items={WHAT_WE_DID} />
        <HapeProcess steps={PROCESS_STEPS} text={PROCESS_TEXT} />
        <HapeResults stats={STATS} platforms={PLATFORMS} />
        <CaseConclusion>{CONCLUSION}</CaseConclusion>
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}