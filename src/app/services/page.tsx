"use client";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FC } from "react";

interface Service {
  title: string;
  description: string;
  items: { title: string; description: string }[];
}

const services: Service[] = [
  {
    title: "Computer Repair & Maintenance",
    description:
      "Offering professional computer repair and maintenance services to keep your systems reliable and efficient. Our solutions help reduce downtime and improve operational stability.",
    items: [
      {
        title: "Hardware & Software Troubleshooting",
        description: "Quick diagnosis and resolution of issues to ensure your systems run smoothly.",
      },
      {
        title: "System Optimization & Updates",
        description: "Routine maintenance and updates to keep your systems secure and efficient.",
      },
      {
        title: "Data Backup & Recovery",
        description: "Ensuring data protection and providing solutions for data recovery in case of loss.",
      },
    ],
  },
  {
    title: "IT Support for Small Businesses",
    description:
      "Providing essential IT support to keep your operations running smoothly. We handle troubleshooting, system maintenance, and offer scalable solutions tailored to your business needs.",
    items: [
      {
        title: "Technical Troubleshooting",
        description: "Swift resolution of IT issues to minimize downtime and maintain productivity.",
      },
      {
        title: "System Maintenance",
        description: "Ongoing support for network stability, secure data management, and efficient workflows.",
      },
      {
        title: "Cloud and Data Solutions",
        description: "Scalable cloud options to support growth and ensure data security.",
      },
    ],
  },
  {
    title: "Project Management Services",
    description:
      "End-to-end project management for smooth execution of your business goals. We handle planning, resource allocation, and risk management to ensure timely, cost-effective results.",
    items: [
      {
        title: "Complete Project Lifecycle Management",
        description: "From initiation to closure, managing every stage to achieve quality outcomes.",
      },
      {
        title: "Resource Allocation and Budgeting",
        description: "Optimizing resources to keep projects on track and within budget.",
      },
      {
        title: "Stakeholder Engagement",
        description: "Regular communication and updates to keep everyone aligned and informed.",
      },
    ],
  },
  {
    title: "Web Development",
    description:
      "Designing and developing user-friendly, responsive websites to enhance your digital presence. Our web solutions are customized to reflect your brand and engage clients.",
    items: [
      {
        title: "Custom Website Design",
        description: "Building responsive websites that align with your brand and engage users.",
      },
      {
        title: "Performance Optimization",
        description: "Ensuring your website is fast, accessible, and search-engine optimized.",
      },
      {
        title: "Mobile Responsiveness",
        description: "Creating sites that look and function great on any device.",
      },
    ],
  },
  {
    title: "Backup and Disaster Recovery Solutions",
    description:
      "Protect your business data and ensure continuity with robust backup and disaster recovery plans.",
    items: [
      {
        title: "Automated Backups",
        description: "Regular, automatic backups to safeguard critical data.",
      },
      {
        title: "Disaster Recovery Planning",
        description: "Comprehensive plans to recover data and systems quickly after a disruption.",
      },
      {
        title: "Data Restoration Services",
        description: "Fast data recovery to minimize business interruption in case of data loss.",
      },
    ],
  },
  {
    title: "Business Process Optimization",
    description:
      "Streamline operations to boost productivity and reduce costs with tailored process optimization strategies.",
    items: [
      {
        title: "Workflow Analysis",
        description: "Identifying and optimizing inefficient processes for smoother operations.",
      },
      {
        title: "Time Management Tools",
        description: "Implementing tools to enhance productivity and efficiency.",
      },
      {
        title: "Resource Optimization",
        description: "Effective resource management to maximize output and minimize waste.",
      },
    ],
  },
];

const Services: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Metadata */}
      <Head>
        <title>Services | KM Project Solutions</title>
        <meta name="description" content="Explore the range of services offered by KM Project Solutions, including computer repair, IT support, project management, web development, and more for small businesses in Kingston, NH." />
        <meta name="keywords" content="KM Project Solutions, computer repair, IT support, project management, web development, tech maintenance, backup solutions, business optimization, Kingston NH" />
        <meta property="og:title" content="Services | KM Project Solutions" />
        <meta property="og:description" content="Empowering small businesses with essential computer repair, IT support, project management, web development, and more services to achieve tech-driven goals." />
        <meta property="og:image" content="/images/services_bg.png" />
        <meta property="og:url" content="https://www.kmprojectsolutions.com/services" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow relative">
        {/* Hero Section with Background Image */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <Image 
            src="/images/services_bg.png" 
            alt="Background Image"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="absolute inset-0 w-full h-full -z-10"
          />
          
          {/* Slogan and Welcome Message */}
          <div className="relative container mx-auto p-8 flex justify-center items-center h-full">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xl text-center">
              <h1 className="text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-lg">
                Empowering small businesses with essential computer repair, IT support, project management, web development, and more to help you achieve your technology-driven goals.
              </p>
            </div>
          </div>
        </div>

        {/* Main Services Content */}
        <section className="space-y-12 mt-12 p-8">
          {services.map((service) => (
            <div key={service.title} className="service-category section-container">
              <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
              <p className="service-description mb-4">{service.description}</p>
              <ul className="list-disc list-inside space-y-4">
                {service.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong> - {item.description}
                  </li>
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
