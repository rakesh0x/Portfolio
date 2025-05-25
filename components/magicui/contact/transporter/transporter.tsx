"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-30 p-6 rounded-xl bg-white/10 max-w-2xl mx-auto"> 
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Get In Touch</h2>
      <p className="text-center mb-8 text-white/80">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
            Your Name 
          </label>
          <input
            id="name"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none transition text-white placeholder-white/40"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none transition text-white placeholder-white/40"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hello! I'd like to talk about..."
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none transition text-white placeholder-white/40"
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>
        
        {status && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg text-center ${status.includes("successfully") ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
          >
            {status}
          </motion.div>
        )}
      </form>
    </div>
  );
}