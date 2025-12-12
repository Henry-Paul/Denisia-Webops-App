"use client";
import { useState } from "react";

export default function SEOTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // Free public PageSpeed API (no key needed for basic test)
    const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile`);
    const data = await res.json();
    const score = data.lighthouseResult?.categories?.performance?.score * 100 || 0;

    setResult({ score: Math.round(score) });
    setLoading(false);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Free Instant SEO Audit</h2>
        <form onSubmit={runAudit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="url"
            placeholder="https://yourwebsite.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100"
          >
            {loading ? "Analyzing..." : "Audit My Site"}
          </button>
        </form>

        {result && (
          <div className="mt-12 p-10 bg-white/10 rounded- rounded-3xl">
            <p className="text-6xl font-bold mb-4"
              style={{ color: result.score >= 90 ? "#34d399" : result.score >= 50 ? "#fbbf24" : "#ef4444" }}
            >
              {result.score}/100
            </p>
            <p className="text-2xl">We’ll email you a full 20-point audit for free</p>
          </div>
        )}
      </div>
    </section>
  );
}
