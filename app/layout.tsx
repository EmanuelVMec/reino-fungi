import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reino Fungi UTEQ | Catálogo Científico de Hongos",
  description: "Explora el catálogo micológico de la Universidad Técnica de Quevedo. Descubre especies como Panus neostrigosus y Coprinellus micaceus con taxonomía, imágenes y detalles científicos.",
  keywords: ["hongos", "reino fungi", "micología", "UTEQ", "catálogo científico", "Panus neostrigosus", "especies fúngicas", "uteq", "reino fungi uteq", "reino fungi", "reinofungi", "clasificacion de hongos uteq"],
  openGraph: {
    title: "Reino Fungi UTEQ | Catálogo de Hongos",
    description: "Colección académica de especies de hongos con información taxonómica y fotografías.",
    url: "https://reinofungi.site",
    siteName: "Reino Fungi",
    images: [
      {
        url: "https://reinofungi.site/uteq.png",
        width: 1200,
        height: 630,
        alt: "Logo Reino Fungi UTEQ",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reino Fungi UTEQ",
    description: "Catálogo científico de hongos de la Universidad Técnica de Quevedo",
    images: ["https://reinofungi.site/uteq.png"],
  },
  metadataBase: new URL("https://reinofungi.site"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Schema Markup para SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Catálogo de Hongos UTEQ",
            "description": "Colección científica de especies fúngicas documentadas por la Universidad Técnica de Quevedo",
            "url": "https://reinofungi.site",
            "publisher": {
              "@type": "Organization",
              "name": "Universidad Técnica de Quevedo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://reinofungi.site/uteq.png"
              }
            }
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <GoogleAnalytics gaId="G-FT41T539QW" />
      </body>
    </html>
  );
}