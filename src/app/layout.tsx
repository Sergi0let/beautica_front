import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

import { baseUrl } from "@/constants";

import { robotoCondensed, sourceSerifPro } from "@/config/fonts";
import Head from "next/head";
import { ReactNode } from "react";
import "../styles/globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Beautica | Косметологія у Києві";
  const description = "Ін’єкційна косметологія: контурна пластика, ботокс, біоревіталізація, мезотерапія та більше.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    icons: {
      icon: "/favicon/favicon.ico",
      apple: "/favicon/apple-icon.png",
      shortcut: "/favicon/favicon.ico",
      other: [
        {
          rel: "mask-icon",
          url: "/favicon/mask-icon.svg",
          color: "#f2e9f2",
        },
      ],
    },
    manifest: "/favicon/manifest.json",
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Beautica",
      locale: "uk_UA",
      type: "website",
      images: [
        {
          url: "/favicon/main.webp",
          width: 1200,
          height: 630,
          alt: "Preview image for Beautica",
        },
      ],
    },
  };
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="uk" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body className={`${robotoCondensed.variable} ${sourceSerifPro.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
