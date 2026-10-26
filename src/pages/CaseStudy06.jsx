import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import NutraHero from "@/components/portfolio/caseStudy/NutraHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import NutraWhatWeDid from "@/components/portfolio/caseStudy/NutraWhatWeDid";
import NutraProcess from "@/components/portfolio/caseStudy/NutraProcess";
import NutraResults from "@/components/portfolio/caseStudy/NutraResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";

const HERO_IMG = "/image/nutracheck/website5.png";
const GOOGLE_IMG = "/image/nutracheck/Screenshot293922.png";
const META_IMG = "/image/nutracheck/Screenshot181058.png";

const WEBSITE_URL = "https://www.nutracheck.co.uk/";

const TITLE = (
  <>
    App Growth
    <br />
    &amp; User Acquisition
  </>
);

const DETAILS = [
  { label: "Brand", value: "Nutracheck" },
  { label: "App", value: "Calorie Counter +" },
  { label: "Industry", value: "Health & Fitness" },
  { label: "Market", value: "United Kingdom" },
  { label: "Platforms", value: "Google Ads & Meta Ads" },
   { label: "Year", value: "2024" },
];

const OBJECTIVE =
  "Acquire new users for Nutracheck's Calorie Counter + app by reaching people interested in calorie tracking, nutrition, and weight management, while supporting premium subscription growth.";

const CHALLENGE =
  "The challenge was to acquire relevant users at scale and convert app installs into premium subscribers in a competitive health and fitness market.";

const WHAT_WE_DID = [
  {
    title: "Google Ads Campaigns",
    text: "Promoted the app to reach potential users and drive installations.",
  },
  {
    title: "Meta Ads Campaigns",
    text: "Used mobile app install campaigns to expand reach and acquire additional users.",
  },
  {
    title: "Conversion Optimization",
    text: "Focused on improving the journey from app installation to meaningful in-app activity and premium subscriptions.",
  },
  {
    title: "Performance Monitoring",
    text: "Evaluated installs, acquisition costs, and subscription-related performance to understand campaign efficiency.",
  },
];

const PROCESS_STEPS = [
  "Audience Research",
  "Campaign Setup",
  "App Promotion",
  "Optimization",
  "Performance Analysis",
];

const PROCESS_TEXT =
  "The approach combined paid acquisition across Google Ads and Meta Ads, with performance evaluated through installs, acquisition costs, and premium subscription outcomes.";

const STATS = [
  { value: "50K+", label: "Total App Installs" },
  { value: "34.6%", label: "Premium Subscription Conversion Rate" },
  { value: "$9.20", label: "Average Value per Premium Subscriber" },
  { value: "~$160K", label: "Estimated Revenue Over 3 Months" },
];

const PLATFORMS = [
  {
    name: "Google Ads",
    metrics: [
      { label: "Clicks", value: "76.9K" },
      { label: "Installs", value: "18.45K" },
      { label: "Cost per Install", value: "$1.56" },
      { label: "Total Ad Spend", value: "$28.79K" },
    ],
    image: GOOGLE_IMG,
    imageAlt: "Google Ads dashboard performance",
  },
  {
    name: "Meta Ads",
    metrics: [
      { label: "App Installs", value: "30.15K" },
      { label: "Cost per Install", value: "$0.54" },
      { label: "Total Ad Spend", value: "$16.2K" },
    ],
    image: META_IMG,
    imageAlt: "Meta Ads dashboard performance",
  },
];

const CONCLUSION =
  "The acquisition strategy focused on growing Nutracheck's user base through Google Ads and Meta Ads while supporting premium subscription growth.";

export default function CaseStudy06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />
      <main>
<NutraHero
  title={TITLE}
  subtitle="Nutracheck"
  image={HERO_IMG}
  imageAlt="Nutracheck website screenshot"
  details={DETAILS}
  websiteUrl={WEBSITE_URL}
/>
        <CaseObjective text={OBJECTIVE} />
        <CaseObjective title="Challenge" text={CHALLENGE} />
        <NutraWhatWeDid items={WHAT_WE_DID} />
        <NutraProcess steps={PROCESS_STEPS} text={PROCESS_TEXT} />
        <NutraResults stats={STATS} platforms={PLATFORMS} />
        <CaseConclusion>{CONCLUSION}</CaseConclusion>
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}