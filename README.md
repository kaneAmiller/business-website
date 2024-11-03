# KM Project Solutions Website

This repository contains the code for the [KM Project Solutions](https://www.kmprojectsolutions.com/) website. KM Project Solutions provides specialized services in IT support, project management, and web development for small businesses.

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

KM Project Solutions offers tailored IT support, project management, and web development services designed to empower small businesses. This website provides clients with a clear overview of our offerings, capabilities, and completed projects.

## Features

- **Responsive Design**: Optimized for a seamless experience on both desktop and mobile.
- **Service Portfolio**: Details about IT support, project management, and web development services.
- **Project Portfolio**: Showcases successful projects across various industries.
- **Contact Form**: Allows potential clients to easily reach out.
- **Blog**: Updated with industry insights, project tips, and trends.

## Technologies Used

- **Next.js**: A React framework that supports static site generation (SSG), allowing for efficient static HTML.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and customizable designs.
- **TypeScript**: Adds type safety, enhancing the developer experience with JavaScript.
- **Creative Commons License**: Licensed under CC BY-SA 4.0, allowing sharing and adaptation with attribution.

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
   This starts a local server for testing and development.

4. **Build the project**:
   ```bash
   npm run build
   ```
   This command generates optimized static HTML files and places them in an `out` directory in the project root.

## Static Export & Deployment

Once built, the static site is ready for deployment from the `out` directory.

### Deploying to Cloudflare Pages

To deploy the static site, go to Cloudflare Pages, create a new project, and upload the `out` folder. Cloudflare Pages will handle the deployment and serve the website globally for optimal performance.

## Update Steps

To keep dependencies current, follow these steps:

1. **Check for Outdated Packages**:
   ```bash
   npm outdated
   ```
   
2. **Update Dependencies**:
   - For specific packages:
     ```bash
     npm install <package-name>@latest
     ```
   - For suggested replacements, install the alternatives as specified:
     ```bash
     npm install @eslint/config-array @eslint/object-schema
     ```
   
3. **Bulk Update**:
   - For a bulk update:
     ```bash
     npm update
     ```
   - Review release notes to avoid any breaking changes.

4. **Test Updates**:
   - After updates, test to confirm everything works as expected:
     ```bash
     npm run dev
     ```

## License

This project is licensed under **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**, allowing you to:

- **Share**: Copy and redistribute the material.
- **Adapt**: Remix, transform, and build upon the material.

**Terms**:

- **Attribution**: Credit KM Project Solutions, link to the license, and indicate changes.
- **ShareAlike**: Distribute any adaptations under the same license.

For more details, see the [LICENSE-CC-BY-SA.txt](LICENSE-CC-BY-SA.txt).

## Contributing

We welcome contributions! To contribute:

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
- Retain the **Creative Commons Attribution-ShareAlike 4.0 International** license in any published adaptations.
- Share any changes under the same license.
