export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Skyrocket Your Online Presence
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
          Expert SEO • Paid Ads • Custom Web & App Development
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/seo-audit" className="bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100">
            Free Instant SEO Audit
          </Link>
          <Link href="/contact" className="border-2 border-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-blue-600">
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
