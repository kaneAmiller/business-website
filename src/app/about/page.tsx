"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link"; // Ensure Link is imported here

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Metadata */}
      <Head>
        <title>About Kane Miller | KM Project Solutions LLC</title>
        <meta name="description" content="Learn more about Kane Miller, founder of KM Project Solutions LLC, a freelance technical project management service helping small businesses achieve tech-driven goals." />
        <meta name="keywords" content="Kane Miller, KM Project Solutions, project management, IT solutions, freelance project management, small business solutions" />
        <meta property="og:title" content="About Kane Miller | KM Project Solutions LLC" />
        <meta property="og:description" content="Providing customized project management solutions for small businesses with a focus on innovation and growth." />
        <meta property="og:image" content="/images/about_bg.png" />
        <meta property="og:url" content="https://www.kmprojectsolutions.com/about" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data for "Person" Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kane Miller",
              "jobTitle": "Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "KM Project Solutions LLC"
              },
              "url": "https://www.kmprojectsolutions.com/about",
              "sameAs": [
                "https://www.linkedin.com/company/km-project-solutions-llc",
                "https://github.com/kaneAmiller",
                "https://instagram.com/kmprojectsolutions",
                "https://www.kmprojectsolutions.com"
              ]
            }
          `}
        </script>
      </Head>

      {/* Header Component */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[70vh] overflow-hidden" aria-label="About KM Project Solutions">
        <Image 
          src="/images/about_bg.png" 
          alt="Background representing KM Project Solutions"
          fill
          quality={85}
          priority
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg"
          className="absolute inset-0 w-full h-full -z-10"
        />
        
        {/* Overlay Text */}
        <div className="relative container mx-auto p-8 flex justify-center items-center h-full">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xl text-center">
            <h1 className="text-5xl font-bold mb-4">About KM Project Solutions</h1>
            <p className="text-lg">
              Welcome to KM Project Solutions – providing customized project management solutions to drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8">
        {/* About Section */}
        <section className="about-section text-center" aria-label="Company background and services">
          <div className="about-text max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              KM Project Solutions LLC, based in Kingston, NH, is a freelance technical project management service led by a committed and detail-oriented professional, Kane Miller. Through online freelancing platforms like Fiverr and Upwork, I partner with tech-driven companies to streamline their operations, optimize resources, and transform visions into reality with precision and excellence.
            </p>
            <p className="text-lg mb-4">
              Specializing in small business project management and practical IT solutions, I provide value by tailoring each project to fit my clients’ unique needs. From coordinating small-scale IT setups to managing end-to-end project workflows, I ensure that every detail is meticulously handled, allowing businesses to focus on growth and innovation in today’s competitive tech landscape. With KM Project Solutions, small businesses can expect customized, results-oriented project management designed to drive progress and productivity.
            </p>
            <p className="text-lg mb-4">
              Let’s collaborate to create effective, personalized solutions that advance your business goals.
            </p>
          </div>

          {/* Profile Image with Founder Caption */}
          <div className="profile-image my-8 text-center" aria-label="Kane Miller, Founder of KM Project Solutions">
            <Image 
              src="/images/profile.jpg" 
              alt="Kane Miller, Founder of KM Project Solutions LLC"
              width={200}
              height={200}
              quality={80}
              placeholder="blur"
              blurDataURL="/images/profile_placeholder.jpg"
              className="rounded-full mx-auto shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2">Kane Miller, Founder of KM Project Solutions LLC</p>
          </div>
        </section>

        {/* CTA Link to Contact Page */}
        <div className="text-center mt-8">
          <Link href="/contact">
            <a className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
              Connect with Kane Miller
            </a>
          </Link>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
