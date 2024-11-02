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
        <title>KM Project Solutions | IT, Project Management, and Web Development</title>
        <meta name="description" content="Supporting small businesses with impactful IT solutions, project management, and web development services to drive success." />
        <meta name="keywords" content="IT support, project management, web development, KM Project Solutions, small business solutions" />
        <meta property="og:title" content="KM Project Solutions | Where Ideas Become Reality" />
        <meta property="og:description" content="Supporting small businesses with impactful IT, project management, and web development services that drive success." />
        <meta property="og:image" content="/images/home_bg.jpg" />
        <meta property="og:url" content="https://www.kmprojectsolutions.com" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data for Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KM Project Solutions LLC",
              "url": "https://www.kmprojectsolutions.com",
              "logo": "https://www.kmprojectsolutions.com/images/home_bg.jpg",
              "sameAs": [
                "https://linkedin.com/company/km-project-solutions-llc",
                "https://github.com/kaneAmiller",
                "https://instagram.com/kmprojectsolutions",
                "https://www.kmprojectsolutions.com"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-603-275-4036",
                "contactType": "Customer Service",
                "areaServed": "US"
              }
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
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
            className="absolute inset-0 w-full h-full -z-10"
          />
          
          {/* Slogan and Welcome Message */}
          <div className="relative container mx-auto p-8 flex justify-center items-center h-full">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xl text-center">
              <h1 className="text-5xl font-bold mb-4">Where Ideas Become Reality</h1>
              <p className="text-lg">
                Welcome to KM Project Solutions LLC – supporting small businesses with impactful IT, project management, and web development services that drive success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="services-overview text-center mt-12 p-8 bg-gray-100" aria-label="Overview of services offered">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <p className="text-lg mb-6">
            From IT support to end-to-end project management and custom web development, KM Project Solutions LLC is your partner in achieving tech-driven business goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Service 1 */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service1-title">
              <h3 id="service1-title" className="text-2xl font-bold mb-2">IT Support for Small Businesses</h3>
              <p className="text-gray-700">
                Reliable IT solutions, from troubleshooting to system maintenance, designed to keep your business running smoothly.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service2-title">
              <h3 id="service2-title" className="text-2xl font-bold mb-2">Project Management Services</h3>
              <p className="text-gray-700">
                Comprehensive project planning and execution to meet goals on time and within budget, maximizing impact.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-item p-6 bg-white rounded-lg shadow-md" aria-labelledby="service3-title">
              <h3 id="service3-title" className="text-2xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-700">
                Custom, responsive websites that elevate your digital presence and engage clients effectively.
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
