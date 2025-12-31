import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import GoogleAdsTracking from "./components/GoogleAdsTracking";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sucesiones y Declaratorias de Herederos en Córdoba | AUGUSTO Filí & Asociados",
  description: "Estudio jurídico con más de 20 años de experiencia en sucesiones y declaratorias de herederos. Tramitamos más de 50 casos por año. 100% online.",
  keywords: "sucesiones córdoba, declaratoria de herederos, abogado sucesiones, herencias córdoba, tracto abreviado",
  icons: {
    icon: [
      { url: '/fav.png' },
      { url: '/fav.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Ads Tracking */}
        <GoogleAdsTracking />
      </head>
      <body
        className={`${montserrat.variable} ${robotoSlab.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}