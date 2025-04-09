import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

const robotoCondensed = localFont({
  src: [
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/RobotoCondensed/RobotoCondensed-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const sourceSerifPro = localFont({
  src: [
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SourceSerifPro/SourceSerifPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-source-serif-pro",
  display: "swap",
});

// const baseUrl = "https://beautica.vercel.app/";

// export async function generateMetadata(): Promise<Metadata> {
//   const title = "Beautica";

//   const description = "About beauty and beautician";

//   return {
//     metadataBase: new URL(baseUrl),
//     title,
//     description,
//     themeColor: "black",
//     openGraph: {
//       title,
//       description,
//       url: baseUrl,
//       images: [
//         {
//           url: "https://beautica.vercel.app/thumbnail.png",
//           width: 1200,
//           height: 630,
//           alt: "Preview image for Beautica",
//         },
//       ],
//       locale: "uk_UA",
//       type: "website",
//       siteName: "Beautica",
//     },
//   };
// }

export const metadata: Metadata = {
  title: "Beautica",
  description: "Beautica",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="uk">
      <body className={`${robotoCondensed.variable} ${sourceSerifPro.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
