'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * GoogleAdsConversion — fires the Google Ads conversion event on mount.
 * Used on /agradecimiento to track form submission conversions.
 * Renders no visible UI.
 */
export default function GoogleAdsConversion() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18011718561',
      });
    }
  }, []);

  return null;
}
