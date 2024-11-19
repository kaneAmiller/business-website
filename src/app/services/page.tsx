"use client";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FC } from "react";

interface Package {
  title: string;
  price: string;
  description: string;
  items: string[];
}

const packages: Package[] = [
  {
    title: "Simple Website Package",
    price: "$1,000",
    description: "For businesses needing a basic online presence.",
    items: [
      "Multi-page website (up to 2 pages)",
      "Mobile responsiveness",
      "Basic SEO setup",
      "Contact form integration",
    ],
  },
  {
    title: "Advanced Website Package",
    price: "$2,500",
    description: "For businesses needing a more comprehensive site.",
    items: [
      "Multi-page website (up to 6 pages)",
      "Advanced functionality (e.g., blog, e-commerce)",
      "Mobile responsiveness and performance optimization",
      "SEO and analytics setup",
    ],
  },
  {
    title: "Project Management & Planning Package",
    price: "$1,500",
    description: "For businesses needing help with project organization.",
    items: [
      "Project roadmap creation",
      "Resource allocation and timeline setup",
      "Milestone tracking and reporting",
    ],
  },
  {
    title: "Backup & Disaster Recovery Package",
    price: "$2,000",
    description: "Protect your data and ensure continuity.",
    items: [
      "Data backup setup (local and cloud)",
      "Disaster recovery planning and documentation",
      "Recovery testing and training",
    ],
  },
  {
    title: "Data Backup & Cloud Storage Package",
    price: "$200/year",
    description: "Secure, off-site data storage.",
    items: [
      "Up to 1TB of secure cloud backup",
      "Weekly automatic backups",
      "Quick data recovery support",
    ],
  },
  {
    title: "Media Hosting & Streaming Package",
    price: "$500/year",
    description: "Private video or content hosting.",
    items: [
      "Host and stream media (training videos, presentations)",
      "Unlimited internal streaming",
      "Video uploads up to 500GB",
    ],
  },
  {
    title: "Hourly Rates",
    price: "$75/hour - IT Support\n$100/hour - Custom Consulting",
    description: "Need something unique?",
    items: [
      `<a href="/contact" class="text-blue-600 font-bold underline hover:text-blue-800">Contact us</a> for a custom package tailored to your business.`,
    ],
  },
];

const Services: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Metadata */}
      <Head>
        <title>Services | KM Project Solutions</title>
        <meta
          name="description"
          content="Explore the range of services and packages offered by KM Project Solutions."
        />
        <meta
          name="keywords"
          content="KM Project Solutions, web development, project management, backup solutions"
        />
        <meta property="og:title" content="Services | KM Project Solutions" />
        <meta
          property="og:description"
          content="Explore our comprehensive packages tailored to meet your business needs."
        />
        <meta property="og:image" content="/images/services_bg.png" />
        <meta
          property="og:url"
          content="https://www.kmprojectsolutions.com/services"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow relative">
        <div className="relative w-full h-[70vh] overflow-hidden">
          <Image
            src="/images/services_bg.png"
            alt="Background Image"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="absolute inset-0 w-full h-full -z-10"
          />
          <div className="relative container mx-auto p-8 flex justify-center items-center h-full">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xl text-center">
              <h1 className="text-5xl font-bold mb-4">Our Packages</h1>
              <p className="text-lg">
                Explore tailored solutions to help your business thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Packages Content */}
        <section className="space-y-8 mt-12 p-8 text-center">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="package-category max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold mb-2">{pkg.title}</h2>
              <p className="text-xl font-bold whitespace-pre-line mb-2">
                {pkg.price}
              </p>
              <p className="package-description mb-4 text-lg">
                {pkg.description}
              </p>
              <ul className="list-none space-y-2">
                {pkg.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-base"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Services;
