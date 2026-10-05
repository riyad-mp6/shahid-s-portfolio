import CaseHeader from "@/components/portfolio/caseStudy/CaseHeader";
import CaseHero from "@/components/portfolio/caseStudy/CaseHero";
import CaseObjective from "@/components/portfolio/caseStudy/CaseObjective";
import CaseWhatWeDid from "@/components/portfolio/caseStudy/CaseWhatWeDid";
import CaseProcess from "@/components/portfolio/caseStudy/CaseProcess";
import CaseResults from "@/components/portfolio/caseStudy/CaseResults";
import CaseConclusion from "@/components/portfolio/caseStudy/CaseConclusion";
import Footer from "@/components/portfolio/Footer";
import UpButton from "@/components/portfolio/UpButton";

// Project 02 — True Story Realty.
// These 3 screenshots must be supplied by the user (no images are generated).
const HERO_IMG = "";   // IMAGE 1 — True Story Realty website screenshot
const GOOGLE_IMG = ""; // IMAGE 2 — Google Ads dashboard screenshot
const META_IMG = "";    // IMAGE 3 — Meta Ads dashboard screenshot

// The real True Story Realty website URL was not provided — add it here once known.
const WEBSITE_URL = "";

const DETAILS = [
  { label: "Client", value: "True Story Realty" },
  { label: "Role", value: "Paid Ads Manager" },
  { label: "Market", value: "Los Angeles, United States" },
  { label: "Duration", value: "3 Months" },
  { label: "Platforms", value: "Google Ads & Meta Ads" },
  { label: "Year", value: "2026" },
];

const STATS = [
  { value: "$5,050", label: "Total Ad Spend" },
  { value: "310", label: "Total Leads" },
  { value: "$16.29", label: "Average CPL" },
  { value: "44", label: "Qualified Leads" },
  { value: "14", label: "Sales" },
];

const OBJECTIVE =
  "The main objective was to generate qualified real-estate leads in the Los Angeles market through paid advertising on Google Ads and Meta Ads.";

const CONCLUSION =
  "Over a 3-month paid advertising campaign, we generated 310 leads through Google Ads and Meta Ads, including 44 qualified leads and 14 sales, with a total advertising spend of $5,050.";

export default function CaseStudy02() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseHeader />
      <main>
        <CaseHero
          subtitle="True Story Realty"
          image={HERO_IMG}
          imageAlt="True Story Realty website screenshot"
          details={DETAILS}
          websiteUrl={WEBSITE_URL}
        />
        <CaseObjective text={OBJECTIVE} />
        <CaseWhatWeDid />
        <CaseProcess />
        <CaseResults
          stats={STATS}
          google={{ leads: "214", cpl: "$13.41", image: GOOGLE_IMG }}
          meta={{ leads: "96", cpl: "$22.71", image: META_IMG }}
        />
        <CaseConclusion text= "The main objective was to generate qualified real-estate leads in the Los Angeles market through paid advertising on Google Ads and Meta Ads."; />
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}
