const services = [
  { title: "Search Engine Optimization", desc: "Rank #1 on Google with technical + content SEO", icon: "Search" },
  { title: "Paid Advertising", desc: "Google Ads, Meta & TikTok campaigns with positive ROAS", icon: "Chart" },
  { title: "Web & App Development", desc: "Fast Next.js sites, Shopify stores, custom apps", icon: "Rocket" },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
              <div className="text-6xl mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
