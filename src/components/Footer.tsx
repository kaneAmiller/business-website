import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer p-4 bg-blue-900 text-white flex flex-col items-center text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} KM Project Solutions. All rights reserved.</p>
      
      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://linkedin.com/company/km-project-solutions-llc" target="_blank" rel="noopener noreferrer">
          <Image src="/images/LI-In-Bug-white.png" alt="LinkedIn" width={24} height={24} />
        </a>
        <a href="https://github.com/kaneAmiller" target="_blank" rel="noopener noreferrer">
          <Image src="/images/github-mark-white.svg" alt="GitHub" width={24} height={24} />
        </a>
        <a href="https://instagram.com/kmprojectsolutions" target="_blank" rel="noopener noreferrer">
          <Image src="/images/Instagram_Glyph_White.svg" alt="Instagram" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
}
