import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          GrowthWave
        </Link>
        <nav className="hidden md:flex space-x-10">
          {["Home", "Services", "Portfolio", "Blog", "SEO Audit", "Contact"].map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
            return (
              <Link
                key={item}
                href={href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item}
              </Link>
            );
          })}
        </nav>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Get Free Audit
        </button>
      </div>
    </header>
  );
}
