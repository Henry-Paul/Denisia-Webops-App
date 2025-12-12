import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600">Denisia</Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
        <Link href="/seo-audit" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700">
          Free SEO Audit
        </Link>
      </div>
    </header>
  );
}
