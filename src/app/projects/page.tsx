"use client";
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Define the Project type
interface Project {
  id: number;
  position: [number, number, number];
  title: string;
  organization: string;
  industry: string;
  startDate: string;
  endDate: string;
  processGroupBreakdown: { group: string; percentage: string }[];
  description: string;
  keyActions: string[];
  keyDeliverables: string[];
}

// Full list of projects
const projects: Project[] = [
  {
    id: 1,
    position: [-4, 2, 0],
    title: 'Restaurant Menu Overhaul',
    organization: 'The Nest Pub & Grill',
    industry: 'Hospitality',
    startDate: '2022-01-01',
    endDate: '2022-03-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '10%' },
      { group: 'Planning', percentage: '30%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Led a comprehensive redesign of the restaurant menu to enhance customer satisfaction and improve operational efficiency.',
    keyActions: [
      'Conducted extensive market research to identify popular dishes and customer preferences.',
      'Collaborated with chefs to develop new recipes, resulting in a menu that appealed to a broader audience.',
    ],
    keyDeliverables: [
      'Successfully launched the new menu, resulting in a slight increase in sales and a reduction in food waste.',
    ],
  },
  {
    id: 2,
    position: [0, 2, 0],
    title: 'POS System Implementation with GetUnion',
    organization: 'The Nest Pub & Grill',
    industry: 'Hospitality',
    startDate: '2024-04-01',
    endDate: '2024-06-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '15%' },
      { group: 'Planning', percentage: '25%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Managed the implementation of the GetUnion POS system to streamline operations.',
    keyActions: [
      'Conducted in-depth research on POS systems and coordinated with the vendor for installation and configuration.',
      'Developed and conducted training sessions for staff.',
    ],
    keyDeliverables: [
      'Slightly reduced transaction times, increased order accuracy, and incorporated a new online ordering system.',
    ],
  },
  {
    id: 3,
    position: [4, 2, 0],
    title: 'Employee Training Program Development',
    organization: 'The Nest Pub & Grill',
    industry: 'Hospitality',
    startDate: '2021-10-01',
    endDate: '2021-12-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '10%' },
      { group: 'Planning', percentage: '30%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Developed and executed a comprehensive training program for kitchen staff.',
    keyActions: [
      'Created training materials and conducted hands-on sessions.',
      'Established a mentorship program for new hires.',
    ],
    keyDeliverables: [
      'Staff received training on how to perform their jobs properly.',
    ],
  },
  {
    id: 4,
    position: [-4, -2, 0],
    title: 'Safety Protocol Implementation and Kitchen Deep Cleaning',
    organization: 'The Nest Pub & Grill',
    industry: 'Hospitality',
    startDate: '2021-06-01',
    endDate: '2021-10-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '15%' },
      { group: 'Planning', percentage: '25%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Implemented safety protocols and managed a deep cleaning project for the kitchen.',
    keyActions: [
      'Conducted a thorough assessment of existing safety practices.',
      'Managed the deep cleaning project to ensure compliance with health regulations.',
    ],
    keyDeliverables: [
      'Achieved compliance with health regulations and conducted training sessions for all kitchen staff.',
    ],
  },
  {
    id: 5,
    position: [0, -2, 0],
    title: 'Recipe Standardization Project',
    organization: 'The Nest Pub & Grill',
    industry: 'Hospitality',
    startDate: '2023-01-01',
    endDate: '2023-02-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '10%' },
      { group: 'Planning', percentage: '30%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Led an initiative to create a standardized recipe book for the kitchen.',
    keyActions: [
      'Collaborated with staff to document and standardize recipes.',
      'Implemented a review system for seasonal ingredients.',
    ],
    keyDeliverables: [
      'Improved food consistency across all menu items.',
    ],
  },
  {
    id: 6,
    position: [4, -2, 0],
    title: 'NAS Setup Project',
    organization: 'Personal Project',
    industry: 'Home Technology',
    startDate: '2020-09-01',
    endDate: '2020-11-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '15%' },
      { group: 'Planning', percentage: '30%' },
      { group: 'Executing', percentage: '35%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Designed and implemented a NAS system for centralized data management.',
    keyActions: [
      'Conducted extensive research to select appropriate hardware and configure the NAS for optimal performance.',
      'Performed most of the labor for installation and setup.',
    ],
    keyDeliverables: [
      'Enhanced data management and security at home.',
    ],
  },
  {
    id: 7,
    position: [-4, -4, 0],
    title: 'Business Website Creation',
    organization: 'Personal Project',
    industry: 'Personal Branding',
    startDate: '2023-08-01',
    endDate: '2024-11-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '15%' },
      { group: 'Planning', percentage: '30%' },
      { group: 'Executing', percentage: '35%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Developed a business website to showcase skills and projects.',
    keyActions: [
      'Spent significant time on research and planning due to unfamiliarity with web development tools.',
      'Performed most of the labor involved in designing and coding the website.',
    ],
    keyDeliverables: [
      'Increased professional visibility and networking opportunities.',
    ],
  },
  {
    id: 8,
    position: [0, -4, 0],
    title: 'Shed Transformation into Gym',
    organization: 'Personal Project',
    industry: 'Home Improvement',
    startDate: '2022-03-01',
    endDate: '2022-07-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '10%' },
      { group: 'Planning', percentage: '30%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Managed the project of transforming a shed into a functional gym space.',
    keyActions: [
      'Planned the layout and design, selecting appropriate equipment.',
      'Performed much of the labor for renovation.',
    ],
    keyDeliverables: [
      'Successfully created a functional gym, demonstrating project management skills.',
    ],
  },
  {
    id: 9,
    position: [4, -4, 0],
    title: 'Fireplace Construction Project',
    organization: 'Personal Project',
    industry: 'Home Improvement',
    startDate: '2023-04-01',
    endDate: '2023-05-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '10%' },
      { group: 'Planning', percentage: '30%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Led the construction of a fireplace, managing all aspects of the project from design to execution.',
    keyActions: [
      'Designed the fireplace layout, selecting materials that complemented home décor and adhered to safety standards.',
      'Performed most of the labor involved in construction, coordinating with contractors for specific tasks as needed.',
    ],
    keyDeliverables: [
      'Successfully completed the project, enhancing the home’s aesthetic and functionality.',
    ],
  },
  {
    id: 10,
    position: [4, -4, 0],
    title: 'Security Camera Setup Project',
    organization: 'The Nest Pub & Grill',
    industry: 'Hospitality',
    startDate: '2022-07-01',
    endDate: '2022-09-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '15%' },
      { group: 'Planning', percentage: '25%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Installed a security camera system throughout the restaurant to improve safety and surveillance.',
    keyActions: [
      'Researched various security camera systems and selected one that met budget and security needs.',
      'Coordinated the installation of cameras and ensured all areas were covered.',
      'Trained staff on the use of the new security system.',
    ],
    keyDeliverables: [
      'Enhanced restaurant security and improved staff awareness of security protocols.',
    ],
  },
  {
    id: 11,
    position: [4, 4, 0],
    title: 'Arcade Machine using Raspberry Pi 4 and Anbernic RG351V',
    organization: 'Personal Project',
    industry: 'Gaming Technology',
    startDate: '2023-06-01',
    endDate: '2023-07-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '10%' },
      { group: 'Planning', percentage: '30%' },
      { group: 'Executing', percentage: '40%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Built a custom arcade machine using a Raspberry Pi 4 and Anbernic RG351V to run classic games.',
    keyActions: [
      'Researched emulator software and compatible hardware.',
      'Configured the Raspberry Pi and Anbernic RG351V for optimal gaming performance.',
    ],
    keyDeliverables: [
      'Successfully created a functional arcade machine with a collection of classic games.',
    ],
  },
  {
    id: 12,
    position: [-4, 4, 0],
    title: 'Asana Integration Project',
    organization: 'KM Project Solutions LLC',
    industry: 'Project Management Automation',
    startDate: '2024-10-01',
    endDate: '2024-11-01',
    processGroupBreakdown: [
      { group: 'Initiating', percentage: '10%' },
      { group: 'Planning', percentage: '20%' },
      { group: 'Executing', percentage: '50%' },
      { group: 'Monitoring and Controlling', percentage: '10%' },
      { group: 'Closing', percentage: '10%' },
    ],
    description: 'Developed an integration with Asana’s API to fetch project and task data, with export options in multiple formats.',
    keyActions: [
      'Implemented error handling and unit tests for reliability.',
      'Developed functions for exporting documents in PDF, Markdown, and HTML formats.',
    ],
    keyDeliverables: [
      'Enhanced project reporting capabilities with Asana integration and custom templates for exporting.',
    ],
  }
  
];

// Get unique industries from projects
const uniqueIndustries = Array.from(new Set(projects.map((project) => project.industry)));

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const sortedProjects = projects
      .filter((project) => (filter ? project.industry === filter : true))
      .sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
    setFilteredProjects(sortedProjects);
  }, [filter, sortOrder]);

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* SEO Metadata */}
      <Head>
        <title>Project Portfolio | KM Project Solutions</title>
        <meta name="description" content="Explore the diverse project portfolio of KM Project Solutions, showcasing successful projects across various industries, from hospitality to personal branding." />
        <meta name="keywords" content="project portfolio, KM Project Solutions, hospitality projects, IT solutions, project management" />
        <meta property="og:title" content="Project Portfolio | KM Project Solutions" />
        <meta property="og:description" content="Explore completed and ongoing projects at KM Project Solutions, highlighting impactful work in project management and IT solutions." />
        <meta property="og:image" content="/images/project-portfolio-thumbnail.jpg" />
        <meta property="og:url" content="https://www.kmprojectsolutions.com/projects" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />

      <main className="flex-grow relative p-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Project Portfolio</h1>
          <p className="text-lg text-gray-700">
            Explore my completed and ongoing projects across various industries.
          </p>
        </div>

        {/* Filters Section */}
        <section className="text-center mb-8">
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter(null)} 
              className={`px-4 py-2 ${!filter ? "bg-blue-800" : "bg-blue-600"} text-white rounded hover:bg-blue-700`}
            >
              All
            </button>
            {uniqueIndustries.map((industry) => (
              <button
                key={industry}
                onClick={() => setFilter(industry)}
                className={`px-4 py-2 ${filter === industry ? "bg-blue-800" : "bg-blue-600"} text-white rounded hover:bg-blue-700`}
              >
                {industry}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Sort by Start Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
          </button>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white p-6 rounded-lg shadow-md border transition-all duration-200 ease-in-out ${
                expandedProject === project.id ? "border-blue-600" : "border-gray-200 hover:shadow-lg hover:border-gray-300"
              }`}
              onClick={() => toggleExpand(project.id)}
            >
              <h3 className="text-2xl font-semibold mb-2 cursor-pointer">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Organization:</strong> {project.organization}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Industry:</strong> {project.industry}</p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Start Date:</strong> {project.startDate} | <strong>End Date:</strong> {project.endDate}
              </p>
              <p className="mt-4 text-gray-800"><strong>Project Description:</strong> {project.description}</p>
              
              {/* Expandable Project Details */}
              {expandedProject === project.id && (
                <div className="mt-4">
                  <p className="text-gray-800"><strong>Key Actions:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 mb-2">
                    {project.keyActions.map((action, index) => (
                      <li key={index}>{action}</li>
                    ))}
                  </ul>
                  <p className="text-gray-800"><strong>Key Deliverables:</strong></p>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.keyDeliverables.map((deliverable, index) => (
                      <li key={index}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-blue-500 mt-4 cursor-pointer">
                {expandedProject === project.id ? "Show Less" : "Show More"}
              </p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
