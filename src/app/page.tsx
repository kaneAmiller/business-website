"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Metadata */}
      <Head>
        <title>KM Project Solutions | IT Support, Computer Repair, Project Management & Web Development in Kingston, NH</title>
        <meta name="description" content="KM Project Solutions LLC offers small businesses in Kingston, NH, expert computer repair, IT support, comprehensive project management, backup solutions, and web development services to help businesses succeed and grow." />
        <link rel="canonical" href="https://www.kmprojectsolutions.com/" />
        <meta name="keywords" content="KM Project Solutions, Kane Miller, IT support Kingston NH, computer repair Kingston NH, project management Kingston NH, web development services NH, backup solutions for small businesses, small business IT consulting, business optimization Kingston NH, tech support for small businesses, data recovery Kingston NH, Kingston computer repair, NH project management, custom website development Kingston, disaster recovery solutions, business process improvement NH, IT troubleshooting, Kingston web design, cloud solutions for small business, New Hampshire IT services, digital transformation for small businesses, KM Project Solutions Kingston NH, Kane Miller consulting" />
        
        {/* Open Graph Metadata for Social Media Sharing */}
        <meta property="og:title" content="KM Project Solutions | IT, Computer Repair, Project Management & Web Development" />
        <meta property="og:description" content="Small business support with computer repair, IT, project management, backup solutions, and web development services." />
        <meta property="og:image" content="/images/home_bg.jpg" />
        <meta property="og:url" content="https://www.kmprojectsolutions.com" />
        <meta property="og:type" content="website" />

        {/* Robots Tag to Guide Search Engine Crawling */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data for Organization and LocalBusiness Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "KM Project Solutions LLC",
              "url": "https://www.kmprojectsolutions.com",
              "logo": "https://www.kmprojectsolutions.com/images/primary-logo.png",
              "image": "https://www.kmprojectsolutions.com/images/home_bg.jpg",
              "description": "KM Project Solutions LLC provides computer repair, IT support, project management, web development, and backup solutions for small businesses in Kingston, NH.",
              "telephone": "+1-603-275-4036",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Kingston",
                "addressRegion": "NH",
                "postalCode": "03848",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-603-275-4036",
                "contactType": "Customer Service",
                "areaServed": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/km-project-solutions-llc",
                "https://github.com/kaneAmiller",
                "https://instagram.com/kmprojectsolutions"
              ],
              "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
              "areaServed": {
                "@type": "Place",
                "name": "United States"
              },
              "keywords": ["KM Project Solutions", "Kane Miller", "IT support", "computer repair", "backup solutions", "project management", "web development", "business optimization", "Kingston NH"]
            }
          `}
        </script>
      </Head>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow relative">
        {/* Hero Section with Background Image */}
        <section className="relative w-full h-[70vh] overflow-hidden" aria-label="Hero section">
          <Image 
            src="/images/home_bg.jpg" 
            alt="Office setting representing business solutions"
            fill
            quality={85}
            priority
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full -z-10"
          />
          
          {/* Slogan and Welcome Message */}
          <div className="relative container mx-auto p-8 flex justify-center items-center h-full">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xl text-center">
              <h1 className="text-5xl font-bold mb-4">Where Ideas Become Reality</h1>
              <p className="text-lg">
                Welcome to KM Project Solutions LLC – supporting small businesses with impactful computer repair, IT support, project management, and web development services that drive success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="services-overview text-center mt-12 p-8 bg-gray-100" aria-label="Overview of services offered">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <p className="text-lg mb-6">
            From reliable computer repair and IT support to end-to-end project management and custom web development, KM Project Solutions LLC is your partner in achieving tech-driven business goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Computer Repair and Maintenance */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service1-title">
              <h3 id="service1-title" className="text-2xl font-bold mb-2">Computer Repair & Maintenance</h3>
              <p className="text-gray-700">
                Professional computer repair, troubleshooting, and system maintenance to ensure your business operations run smoothly.
              </p>
            </div>

            {/* IT Support */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service2-title">
              <h3 id="service2-title" className="text-2xl font-bold mb-2">IT Support for Small Businesses</h3>
              <p className="text-gray-700">
                Comprehensive IT solutions, from technical troubleshooting to network support, tailored for small business needs.
              </p>
            </div>

            {/* Project Management */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service3-title">
              <h3 id="service3-title" className="text-2xl font-bold mb-2">Project Management Services</h3>
              <p className="text-gray-700">
                Complete project lifecycle management to keep projects on time and within budget, delivering impactful results.
              </p>
            </div>

            {/* Web Development */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service4-title">
              <h3 id="service4-title" className="text-2xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-700">
                Custom, responsive websites that enhance your digital presence and engage clients effectively.
              </p>
            </div>

            {/* Backup and Disaster Recovery Solutions */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service5-title">
              <h3 id="service5-title" className="text-2xl font-bold mb-2">Backup and Disaster Recovery Solutions</h3>
              <p className="text-gray-700">
                Protect your data with comprehensive backup and disaster recovery plans, ensuring business continuity and data security.
              </p>
            </div>

            {/* Business Process Optimization */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service6-title">
              <h3 id="service6-title" className="text-2xl font-bold mb-2">Business Process Optimization</h3>
              <p className="text-gray-700">
                Streamline your business operations with process optimization solutions designed to boost efficiency and reduce costs.
              </p>
            </div>
          </div>
          <Link href="/services" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Explore Our Services
          </Link>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section text-center mt-12 p-8" aria-label="Call to action">
          <h2 className="text-3xl font-semibold mb-4">Let's Bring Your Ideas to Life</h2>
          <p className="text-lg mb-6">
            Ready to take your business to the next level? Contact us to discuss how KM Project Solutions LLC can help transform your vision into reality.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Get in Touch
          </Link>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
