'use client';

import { trackWhatsAppConversion } from './GoogleAdsTracking';
import { ReactNode } from 'react';

interface WhatsAppLinkProps {
  message: string;
  children: ReactNode;
  className?: string;
}

export default function WhatsAppLink({ message, children, className = '' }: WhatsAppLinkProps) {
  
  const handleClick = () => {
    // Disparar evento de conversión de Google Ads
    trackWhatsAppConversion();
  };

  return (
    <a
      href={`https://wa.me/5493515186325?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}