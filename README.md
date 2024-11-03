# KM Project Solutions Website

Welcome to the code repository for the [KM Project Solutions](https://www.kmprojectsolutions.com/) website. KM Project Solutions empowers small businesses with tailored IT support, project management, and web development services.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Static Export & Deployment](#static-export--deployment)
- [Update Steps](#update-steps)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## About

KM Project Solutions provides customized IT support, project management, and web development services designed to meet the specific needs of small businesses. This website showcases our services, projects, and expertise, offering potential clients a centralized platform for learning more about what we do.

## Features

- **Responsive Design**: Optimized for a seamless experience on both desktop and mobile.
- **Service Portfolio**: Detailed descriptions of IT support, project management, and web development offerings.
- **Project Portfolio**: Highlights successful projects across various sectors.
- **Contact Form**: An easy way for potential clients to reach out.
- **Blog**: Updated with industry insights, project tips, and trends.

## Technologies Used

- **Next.js**: A powerful React framework that enables static site generation (SSG) for fast and efficient static HTML files.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and customizable designs.
- **TypeScript**: Adds type safety and enhances the developer experience with JavaScript.
- **Creative Commons License**: Licensed under CC BY-SA 4.0, encouraging sharing and adaptation with attribution.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kaneAmiller/business-website.git
   ```
   
2. **Install dependencies**:
   ```bash
   cd business-website
   npm install
   ```
   
3. **Run the development server**:
   ```bash
   npm run dev
   ```
   This starts the local server for testing and development.

4. **Build the project**:
   ```bash
   npm run build
   ```
   This command prepares the project for production by generating optimized, static HTML files.

## Static Export & Deployment

After building, the Next.js framework enables exporting the website as static HTML, making it easy to host on Cloudflare Pages or any static hosting service.

### Steps to Export and Deploy on Cloudflare Pages

1. **Export the project as a static website**:
   ```bash
   npm run export
   ```
   The export creates an `out` directory containing static HTML files that represent the entire site.

2. **Deploy to Cloudflare Pages**:
   - Link your Cloudflare Pages project to this repository.
   - Configure the build to pull the `out` directory for deployment.
   - Cloudflare Pages will automatically serve your website, providing fast, global distribution for optimal performance.

## Update Steps

To ensure the project is up-to-date, follow these steps to manage dependencies:

1. **Check for Outdated Packages**:
   ```bash
   npm outdated
   ```
   
2. **Update Dependencies**:
   - For specific packages:
     ```bash
     npm install <package-name>@latest
     ```
   - For packages with replacement suggestions, follow the specified recommendations:
     ```bash
     npm install @eslint/config-array @eslint/object-schema
     ```
   
3. **Bulk Update**:
   - To update all dependencies at once:
     ```bash
     npm update
     ```
   - Caution: Review release notes to avoid breaking changes.

4. **Test Updates**:
   - After updates, test the project to ensure functionality:
     ```bash
     npm run dev
     ```

## License

This project is licensed under **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**, allowing you to:

- **Share**: Copy and redistribute the material in any medium or format.
- **Adapt**: Remix, transform, and build upon the material for any purpose, even commercially.

**Terms**:

- **Attribution**: Credit KM Project Solutions, link to the license, and indicate changes made.
- **ShareAlike**: Distribute any adapted material under the same license.

For details, see the [LICENSE-CC-BY-SA.txt](LICENSE-CC-BY-SA.txt).

## Contributing

We welcome community contributions! To contribute:

1. **Fork this repository**.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/business-website.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
4. **Make your changes**.
5. **Commit and push**:
   ```bash
   git commit -m "Add your message here"
   git push origin feature/YourFeatureName
   ```
6. **Submit a pull request** with a description of your changes.

### Important Notice for Forks

If you use this project for your own purposes, you **must**:

- Attribute KM Project Solutions.
- Retain the **Creative Commons Attribution-ShareAlike 4.0 International** license in any adapted versions.
- Share any changes under the same license.
