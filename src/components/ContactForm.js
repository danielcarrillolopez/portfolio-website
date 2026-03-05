'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: siteConfig.contact.discussionTopics[0],
    message: ''
  });

  // Handle pre-filling from query params (e.g. from a specific project page)
  useEffect(() => {
    const projectSlug = searchParams.get('project');
    if (projectSlug) {
      setFormData(prev => ({
        ...prev,
        subject: "📄 Request Project Documentation (CAD/BOM)",
        message: `I would like to request access to the documentation for the project: ${projectSlug}. \n\nI intend to use it for: [Your reason here]`
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically send to an API or service like Formspree
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
        <p className="text-green-700 dark:text-green-400">
          Thank you for reaching out. I'll review your request and get back to you soon.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm font-medium text-green-800 dark:text-green-300 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            className="w-full px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition"
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
            className="w-full px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition"
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
          className="w-full px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition"
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
          className="w-full px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition"
          placeholder="Please describe why you are requesting these files or what you'd like to discuss..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-primary dark:bg-primary-dark text-white font-bold rounded-lg hover:bg-primary-light transition-all shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}
