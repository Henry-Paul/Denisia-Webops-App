export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Client Love</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Sarah K.", text: "Traffic up 340% in 4 months. Best investment ever!" },
            { name: "Mike R.", text: "Finally getting leads instead of crickets. Game changer." },
            { name: "Emma L.", text: "Beautiful site + real results. Couldn’t be happier." },
          ].map((t) => (
            <div key={t.name} className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-lg italic mb-6">“{t.text}”</p>
              <p className="font-bold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
