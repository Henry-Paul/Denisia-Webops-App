"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("Thanks! We'll be in touch within 24h 🚀");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-6 text-left">
      <input type="text" name="name" placeholder="Your Name" required className="w-full p-4 border rounded-lg" />
      <input type="email" name="email" placeholder="Business Email" required className="w-full p-4 border rounded-lg" />
      <input type="url" name="website" placeholder="Your Website (optional)" className="w-full p-4 border rounded-lg" />
      <textarea name="message" rows={5} placeholder="Tell us about your project..." required className="w-full p-4 border rounded-lg"></textarea>
      <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700">
        Send Message
      </button>
      {status && <p className="text-center text-lg">{status}</p>}
    </form>
  );
}
