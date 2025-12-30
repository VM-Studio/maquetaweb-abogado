import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

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
  title: "AUGUSTO Filí & Asociados | Estudio Jurídico en Buenos Aires",
  description: "Estudio jurídico con más de 20 años de experiencia. Asesoramiento legal integral en derecho civil, comercial, laboral, penal y más. Primera consulta incluida en el costo del trabajo.",
  keywords: "abogados, estudio jurídico, asesoramiento legal, buenos aires, derecho civil, derecho comercial, derecho laboral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${robotoSlab.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
