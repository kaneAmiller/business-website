"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header relative flex items-center">
      {/* Logo */}
      <div className="logo">
        <Image 
          src="/images/secondary-logo.png" 
          alt="KM Project Solutions Logo" 
          width={90}
          height={60}
        />
      </div>

      {/* Title */}
      <h1 className="site-title">KM Project Solutions</h1>

      {/* Hamburger */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`site-navigation ${isOpen ? 'open' : ''}`} ref={navRef}>
        <ul className="nav-list">
          <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link href="/services" onClick={handleLinkClick}>Services</Link></li>
          <li><Link href="/projects" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link href="/blog" onClick={handleLinkClick}>Blog</Link></li>
          <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </nav>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
};

export default Header;
