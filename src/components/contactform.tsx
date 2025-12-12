"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) setStatus("Thank you! We’ll reply within 24h");
    else setStatus("Error — try again");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <input name="name" placeholder="Name" required className="w-full p-4 border rounded-lg" />
      <input name="email" type="email" placeholder="Email" required className="w-full p-4 border rounded-lg" />
      <input name="website" type="url" placeholder="Website (optional)" className="w-full p-4 border rounded-lg" />
      <textarea name="message" rows={6} placeholder="Your project..." required className="w-full p-4 border rounded-lg"></textarea>
      <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700">
        Send Message
      </button>
      {status && <p className="text-center text-lg font-medium">{status}</p>}
    </form>
  );
}
