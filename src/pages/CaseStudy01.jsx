import { Link } from 'react-router-dom';

export default function CaseStudy01() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-xs uppercase leading-tight">
          SHAHIDUL<br />PORTFOLIO
        </div>
        <Link
          to="/"
          className="border border-white text-white text-xs uppercase px-4 py-2 rounded-full"
        >
          Back to Home
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="px-8 py-16">
        <h1 className="text-4xl md:text-6xl uppercase font-bold">
          Real Estate Lead Generation
        </h1>
        <p className="text-gray-400 uppercase text-sm mt-2">Align Real Estate</p>

        <img
          src="/images/project01-website.png"
          alt="Align Real Estate website"
          className="rounded-xl mt-8 w-full max-w-2xl"
        />

        {/* Project details table */}
        <div className="mt-8 max-w-md border-t border-gray-700">
          {[
            ['Client', 'Align Real Estate'],
            ['Role', 'Paid Ads Manager'],
            ['Market', 'Florida, United States'],
            ['Duration', '3 Months'],
            ['Platforms', 'Google Ads & Meta Ads'],
            ['Year', '2024'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between py-3 border-b border-gray-700 text-sm"
            >
              <span className="uppercase text-gray-400">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        <a
          href="https://alignagents.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-black text-xs uppercase px-6 py-3 rounded-full"
        >
          Visit Website &gt;
        </a>
      </section>

      <hr className="border-gray-800" />

      {/* OBJECTIVE */}
      <section className="px-8 py-12">
        <h2 className="text-sm font-bold uppercase mb-4">Objective</h2>
        <p className="text-gray-400 text-sm max-w-2xl">
          The main objective was to generate qualified real-estate leads in
          the Florida market through paid advertising on Google Ads and Meta Ads.
        </p>
      </section>

      {/* WHAT WE DID */}
      <section className="px-8 py-12">
        <h2 className="text-sm font-bold uppercase mb-4">What We Did</h2>
        <ol className="text-gray-400 text-sm list-decimal list-inside space-y-1">
          <li>Paid campaign management</li>
          <li>Lead generation</li>
          <li>Campaign optimization</li>
          <li>Performance monitoring</li>
          <li>Cost-per-lead analysis</li>
        </ol>
      </section>

      <hr className="border-gray-800" />

      {/* PROCESS */}
      <section className="px-8 py-12">
        <h2 className="text-sm font-bold uppercase mb-6">Process</h2>
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase">
          {['Research', 'Campaign Setup', 'Launch', 'Monitor', 'Optimize', 'Measure Results'].map(
            (step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="border border-gray-600 rounded-full px-4 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-gray-500">→</span>}
              </span>
            )
          )}
        </div>
        <p className="text-gray-400 text-sm mt-6 max-w-2xl">
          The campaigns were monitored throughout the 3-month period and
          performance was evaluated based on lead volume, cost per lead,
          qualified leads, and sales.
        </p>
      </section>

      <hr className="border-gray-800" />

      {/* RESULTS */}
      <section className="px-8 py-12">
        <h2 className="text-sm font-bold uppercase mb-6">Results</h2>
        <img
          src="/images/project01-infographic.png"
          alt="Campaign results infographic"
          className="w-full rounded-xl mb-8"
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            ['$4,583', 'Total Ad Spend'],
            ['282', 'Total Leads'],
            ['$16.25', 'Average CPL'],
            ['38', 'Qualified Leads'],
            ['12', 'Sales'],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-bold">{stat}</div>
              <div className="text-gray-400 text-xs uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-bold uppercase mt-10 mb-4">Platform Performance</h3>
        <div className="grid grid-cols-2 gap-6 max-w-md text-sm">
          <div>
            <div className="font-bold">Google Ads</div>
            <div className="text-gray-400">193 Leads · $12.60 CPL</div>
          </div>
          <div>
            <div className="font-bold">Meta Ads</div>
            <div className="text-gray-400">89 Leads · $24.20 CPL</div>
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* CAMPAIGN PROOF */}
      <section className="px-8 py-12">
        <h2 className="text-sm font-bold uppercase mb-6">Campaign Proof</h2>

        <h3 className="text-xs font-bold uppercase mb-3">Google Ads</h3>
        <img
          src="/images/project01-google-ads.png"
          alt="Google Ads dashboard"
          className="w-full rounded-xl mb-10"
        />

        <h3 className="text-xs font-bold uppercase mb-3">Meta Ads</h3>
        <img
          src="/images/project01-meta-ads.png"
          alt="Meta Ads dashboard"
          className="w-full rounded-xl"
        />
      </section>

      <hr className="border-gray-800" />

      {/* CONCLUSION */}
      <section className="px-8 py-12">
        <h2 className="text-sm font-bold uppercase mb-4">Conclusion</h2>
        <p className="text-gray-400 text-sm max-w-2xl">
          Over a 3-month paid advertising campaign, we generated 282 leads
          from Google Ads and Meta Ads, including 38 qualified leads and 12
          sales, with a total advertising spend of $4,583. The project
          demonstrates experience managing paid acquisition campaigns and
          measuring performance from lead generation through sales.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-12">
        <div className="text-6xl md:text-8xl font-bold">© 2026</div>
        <p className="text-gray-500 text-xs uppercase mt-2">
          Shahidul — Digital & Performance Marketer
        </p>
      </footer>
    </div>
  );
}
