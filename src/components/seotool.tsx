"use client";
import { useState } from "react";

export default function SEOTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkSEO = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const res = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyDX...YOUR_KEY_HERE`
    );
    const data = await res.json();
    const score = data.lighthouseResult.categories.performance.score * 100;

    setResult({ score: Math.round(score), url });
    setLoading(false);
  };

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4 mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Free Instant SEO Audit</h2>
        <form onSubmit={checkSEO} className="max-w-xl mx-auto flex gap-4">
          <input
            type="url"
            placeholder="https://yoursite.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full text-gray-900"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100"
          >
            {loading ? "Analyzing..." : "Audit My Site"}
          </button>
        </form>

        {result && (
          <div className="mt-10 p-8 bg-white/10 rounded-2xl">
            <p className="text-2xl">Performance Score: <strong className={result.score >= 90 ? "text-green-300" : result.score >= 50 ? "text-yellow-300" : "text-red-300"}>{result.score}/100</strong></p>
            <p className="mt-4">We'll email you a full 20-point audit for free!</p>
          </div>
        )}
      </div>
    </section>
  );
}
