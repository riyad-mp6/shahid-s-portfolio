{/* RESULTS */}
<section className="px-8 py-12">
  <h2 className="text-sm font-bold uppercase mb-6">Results</h2>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
    {[
      ['$4,583', 'Total Ad Spend'],
      ['282', 'Total Leads'],
      ['$16.25', 'Average CPL'],
      ['38', 'Qualified Leads'],
      ['12', 'Sales'],
    ].map(([stat, label]) => (
      <div key={label}>
        <div className="text-3xl md:text-5xl font-bold">{stat}</div>
        <div className="text-gray-400 text-xs uppercase mt-2">{label}</div>
      </div>
    ))}
  </div>

  <h3 className="text-xs font-bold uppercase mt-12 mb-4">Platform Performance</h3>
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
