import localFont from "next/font/local"


const robotoCondensed = localFont({
  src: [
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../app/fonts/RobotoCondensed/RobotoCondensed-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-roboto-condensed",
  display: "swap",
})

const sourceSerifPro = localFont({
  src: [
    {
      path: "../app/fonts/SourceSerifPro/SourceSerifPro-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/fonts/SourceSerifPro/SourceSerifPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/SourceSerifPro/SourceSerifPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/SourceSerifPro/SourceSerifPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/fonts/SourceSerifPro/SourceSerifPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/SourceSerifPro/SourceSerifPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-source-serif-pro",
  display: "swap",
})

export { robotoCondensed, sourceSerifPro }
