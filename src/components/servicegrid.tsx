const services = [
  {
    title: "SEO That Ranks",
    desc: "Technical + On-Page + Content strategy to dominate Google.",
    icon: "🔍",
  },
  {
    title: "Paid Ads (Google/FB/TikTok)",
    desc: "ROAS-focused campaigns that scale profitably.",
    icon: "📈",
  },
  {
    title: "Web & App Development",
    desc: "Blazing-fast Next.js, Shopify, custom apps.",
    icon: "🚀",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-6xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
