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
  "The primary objective was to drive e-commerce sales for Hape Toys over a four-month period, from August to November 2025, using Google Ads and Meta Ads. The campaign focused on attracting potential customers, driving product-page traffic, and converting shopping interest into purchases while monitoring advertising costs and sales performance.";

const WHAT_WE_DID = [
  {
    title: "Paid Campaign Management",
    text: "Managed paid advertising campaigns across Google Ads and Meta Ads to support online sales.",
  },
  {
    title: "Product Promotion",
    text: "Used paid advertising to bring relevant audiences to Hape Toys' product offerings.",
  },
  {
    title: "Campaign Monitoring",
    text: "Monitored campaign performance, advertising spend, traffic, and purchase activity.",
  },
  {
    title: "Campaign Optimization",
    text: "Reviewed performance data to identify opportunities to improve campaign efficiency and purchase acquisition.",
  },
  {
    title: "Sales Performance Analysis",
    text: "Evaluated advertising performance using purchases, cost per purchase, attributed revenue, and return on ad spend (ROAS).",
  },
];

const PROCESS_STEPS = [
  {
    title: "Product & Audience Research",
    text: "Reviewed product offerings, customer interests, and potential audiences to guide campaign planning.",
  },
  {
    title: "Channel & Campaign Planning",
    text: "Structured Google Ads and Meta Ads campaigns around product discovery, shopping intent, and purchase acquisition.",
  },
  {
    title: "Campaign & Creative Launch",
    text: "Set up campaigns, organized product promotions, and prepared advertising assets to attract potential buyers.",
  },
  {
    title: "Performance & Purchase Optimization",
    text: "Monitored clicks, purchase activity, cost per purchase, and campaign efficiency to identify opportunities for improvement.",
  },
  {
    title: "Budget & Product Performance Review",
    text: "Evaluated campaign performance across advertising platforms to understand which products and campaigns justified further investment.",
  },
  {
    title: "Revenue & Attribution Analysis",
    text: "Compared platform-reported results with available store sales data to assess advertising performance and avoid double-counting purchases.",
  },
];

const PROCESS_TEXT = "Research → Plan → Build → Test → Optimize → Analyze";

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
  "Over the four-month campaign from August to November 2025, Google Ads and Meta Ads were used to support Hape Toys' e-commerce customer acquisition and sales efforts. The campaign focused on driving product interest, generating purchases, and evaluating advertising efficiency through cost-per-purchase and return-on-ad-spend metrics.";

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