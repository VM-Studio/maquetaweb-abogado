'use client';

import Script from 'next/script';

// IDs de Google Ads - Estudio Filí
const GA_TRACKING_ID = 'AW-11208424849';
const CONVERSION_ID = 'AW-11208424849/zRpDCJWlkNobEJH7y-Ap';

export default function GoogleAdsTracking() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
}

// Función para disparar evento de conversión
export function trackWhatsAppConversion() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': CONVERSION_ID,
      'event_callback': () => {
        console.log('Conversión de WhatsApp registrada');
      }
    });
  }
}