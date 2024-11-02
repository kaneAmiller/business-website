"use client";
import { useState, useRef } from 'react';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Execute reCAPTCHA
    recaptchaRef.current?.execute();
  };

  const onReCAPTCHAChange = async (token: string | null) => {
    if (!token) {
      setResponseMessage("reCAPTCHA verification failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit form to Formspree with reCAPTCHA token
      const response = await fetch("https://formspree.io/f/xkgnggpz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, "g-recaptcha-response": token }),
      });

      if (response.ok) {
        setResponseMessage("Your message was sent successfully.");
        setForm({ name: '', email: '', message: '' });
      } else {
        const result = await response.json();
        setResponseMessage(result.error || "There was an issue with the submission.");
      }
    } catch (error) {
      setResponseMessage("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
      recaptchaRef.current?.reset(); 
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Metadata */}
      <Head>
        <title>Contact KM Project Solutions | Get in Touch</title>
        <meta name="description" content="Contact KM Project Solutions for inquiries related to IT support, project management, and web development services." />
        <meta name="keywords" content="contact KM Project Solutions, IT support, project management, web development services" />
        <meta property="og:title" content="Contact KM Project Solutions | Get in Touch" />
        <meta property="og:description" content="Reach out to KM Project Solutions for customized IT, project management, and web development services tailored to small businesses." />
        <meta property="og:url" content="https://www.kmprojectsolutions.com/contact" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4" aria-label="Contact form">
          <label htmlFor="name" className="sr-only">Name</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            placeholder="Name" 
            value={form.name} 
            onChange={handleChange} 
            required 
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <label htmlFor="email" className="sr-only">Email</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Email" 
            value={form.email} 
            onChange={handleChange} 
            required 
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea 
            id="message"
            name="message" 
            placeholder="Message" 
            value={form.message} 
            onChange={handleChange} 
            required 
            className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        
        {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}

        {/* reCAPTCHA Component */}
        <ReCAPTCHA
          sitekey="6Ld54HAqAAAAAJdtN7NcplrQnRDcIbdYo0OCPtTB"
          size="invisible"
          ref={recaptchaRef}
          onChange={onReCAPTCHAChange}
        />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
