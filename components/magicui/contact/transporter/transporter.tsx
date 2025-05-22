"use client";
import { useState, FormEvent, ChangeEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto p-4">
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="mb-2 p-2 border rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="mb-2 p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="mb-2 p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">Send</button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
