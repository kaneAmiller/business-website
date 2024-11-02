"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner(): JSX.Element | null {
  const [isBannerVisible, setBannerVisible] = useState<boolean>(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookieAccepted');
    if (!hasAcceptedCookies) {
      setBannerVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p>
        We use cookies to improve your experience. By using our site, you agree to our{' '}
        <Link href="/cookie-policy" className="underline">
          Cookie Policy
        </Link>.
      </p>
      <button
        onClick={handleAccept}
        className="ml-4 bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
      >
        Accept
      </button>
    </div>
  );
}
