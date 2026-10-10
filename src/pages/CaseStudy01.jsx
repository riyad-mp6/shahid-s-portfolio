import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import CaseWhatWeDid from "@/components/portfolio/caseStudy/CaseWhatWeDid";
import CaseProcess from "@/components/portfolio/caseStudy/CaseProcess";
import CaseResults from "@/components/portfolio/caseStudy/CaseResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";
import image from "@public/images/align/website.pngScreenshot 2026-10-02 183352.png";
import image from "@public/images/align/Gemini_Generated_Image_cmdo9ycmdo9ycmdo.jpg";
import image from "@public/images/align/Gemini_Generated_Image_fvttkufvttkufvtt.jpg";

// Project 01 — Align Real Estate.
// Replace these empty strings with the paths to your actual screenshots.
const HERO_IMG = "/images/align/website.pngScreenshot 2026-10-02 183352.png";
const GOOGLE_IMG = "Gemini_Generated_Image_cmdo9ycmdo9ycmdo.jpg";
const META_IMG = "Gemini_Generated_Image_fvttkufvttkufvtt.jpg";
// Official client website
const WEBSITE_URL = "https://alignagents.com/";

// Project information
const DETAILS = [
  { label: "Client", value: "Align Real Estate" },
  { label: "Role", value: "Paid Ads Manager" },
  { label: "Market", value: "Florida, United States" },
  { label: "Duration", value: "3 Months" },
  { label: "Platforms", value: "Google Ads & Meta Ads" },
  { label: "Year", value: "2026" },
];

// Campaign results
const STATS = [
  { value: "$4,584.80", label: "Total Ad Spend" },
  { value: "282", label: "Total Leads" },
  { value: "$16.26", label: "Average CPL" },
  { value: "38", label: "Qualified Leads" },
  { value: "12", label: "Sales" },
];

// Campaign objective
const OBJECTIVE =
  "The main objective was to generate qualified real-estate leads in the Florida market through paid advertising on Google Ads and Meta Ads.";

// Conclusion content for this project
const CONCLUSION =
  "Over a 3-month paid advertising campaign, we generated 282 leads through Google Ads and Meta Ads, including 38 qualified leads and 12 sales. The campaign generated leads through both advertising platforms and was evaluated based on lead volume, cost per lead, lead quality, and sales performance.";

export default function CaseStudy01() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />

      <main>
        <CaseHero
          subtitle="Align Real Estate"
          image={HERO_IMG}
          imageAlt="Align Real Estate website screenshot"
          details={DETAILS}
          websiteUrl={WEBSITE_URL}
        />

        <CaseObjective text={OBJECTIVE} />

        <CaseWhatWeDid />

        <CaseProcess />

        <CaseResults
          stats={STATS}
          google={{
            leads: "193",
            cpl: "$12.60",
            image: GOOGLE_IMG,
          }}
          meta={{
            leads: "89",
            cpl: "$24.20",
            image: META_IMG,
          }}
        />

        <CaseConclusion>
          {CONCLUSION}
        </CaseConclusion>
      </main>

      <Footer />

      <UpButton />
    </div>
  );
}