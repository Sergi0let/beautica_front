import { BeforeAfter, Faq, Sertification, ServesMain, ServesStages, ServiseTable, Testimonials } from "@/components";
import { servicesData } from "@/constants";

// import type { Metadata } from "next";

// export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
//   const serData = metadataObj[slug] ?? {
//     title: "Default title",
//     description: "Default description",
//     image: "/default-image.jpg",
//   };
//   const baseUrl = "https://beautica.vercel.app/";
//   const title = serData?.title || "";
//   const description = serData?.description || "";
//   const image = metadataObj[slug].image;

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
//           url: `/services/${image}`,
//           width: 1200,
//           height: 630,
//           alt: `Preview image for ${title}`,
//         },
//       ],
//       locale: "uk_UA",
//       type: "website",
//       siteName: "Beautica",
//     },
//   };
// }
const PageServes = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const data = servicesData.find((item) => item.pageUrl === slug);
  return (
    <main className="relative">
      <ServesMain name={data?.name || ""} description={data?.description || ""} imgUrl={data?.imgUrl || ""} />
      <ServesStages stages={data?.stages || []} />
      <ServiseTable priceTable={data?.priceTable || []} name={data?.name || ""} />
      <BeforeAfter />
      <Testimonials />
      <Sertification />
      <Faq type={slug} />
    </main>
  );
};
export default PageServes;
