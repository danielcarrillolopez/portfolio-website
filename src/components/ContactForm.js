'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: siteConfig.contact.discussionTopics[0],
    message: ''
  });

  // Handle pre-filling from query params (e.g. from a specific project page or blog)
  useEffect(() => {
    const projectSlug = searchParams.get('project');
    const customSubject = searchParams.get('subject');

    if (projectSlug) {
      setFormData(prev => ({
        ...prev,
        subject: "📄 Request Project Documentation (CAD/BOM)",
        message: `I would like to request access to the documentation for the project: ${projectSlug}. 

I intend to use it for: [Your reason here]`
      }));
    } else if (customSubject) {
      setFormData(prev => ({
        ...prev,
        subject: siteConfig.contact.discussionTopics.includes(customSubject) 
          ? customSubject 
          : "🔬 Technical Questions", // Default to tech questions if custom not in list
        message: `Re: ${customSubject}\n\n[Your message here]`
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // If no ID is set, show an helpful error message
    if (!siteConfig.contact.formspreeId || siteConfig.contact.formspreeId === "[YOUR_FORMSPREE_ID]") {
      setError("Email service is not configured. Please add your Formspree ID to siteConfig.js");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.contact.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 rounded-lg text-center animate-in fade-in zoom-in duration-300">
        <div className="text-4xl mb-4">🚀</div>
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
        <p className="text-green-700 dark:text-green-400">
          Thank you for reaching out. I'll review your request and get back to you soon.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm rounded-lg">
          ⚠️ {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition disabled:opacity-50"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition disabled:opacity-50"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Topic of Interest
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition disabled:opacity-50"
        >
          {siteConfig.contact.discussionTopics.map((topic, index) => (
            <option key={index} value={topic}>{topic}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition disabled:opacity-50"
          placeholder="Please describe why you are requesting these files or what you'd like to discuss..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-primary dark:bg-primary-dark text-white font-bold rounded-lg hover:bg-primary-light transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
