import {
  BeforeAfter,
  Faq,
  FaqStructuredData,
  ProcedureStructuredData,
  Sertification,
  ServesMain,
  ServesStages,
  ServiseTable,
  Testimonials,
} from "@/components";

import { baseUrl, faqs, metadataObj, servicesData, ServicesRoutes } from "@/constants";

import type { Metadata } from "next";
import Head from "next/head";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const serData = metadataObj[slug] ?? {
    title: "Косметична процедура",
    description: "Косметична процедура Beautica",
    image: "default-image.webp",
  };

  const title = serData?.title || "";
  const description = serData?.description || "";
  const image = metadataObj[slug].image;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${slug}`,
      images: [
        {
          url: `/services/${image}`,
          width: 1200,
          height: 630,
          alt: `Preview image for ${title}`,
        },
      ],
      locale: "uk_UA",
      type: "website",
      siteName: "Beautica",
    },
  };
}

export async function generateStaticParams() {
  return Object.values(ServicesRoutes).map((category) => ({
    slug: category,
  }));
}
const PageServes = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const data = servicesData.find((item) => item.pageUrl === slug);
  const faqsData = faqs[slug];
  return (
    <>
      <Head>
        <FaqStructuredData faqsData={faqsData} />
      </Head>
      <main className="relative">
        <ProcedureStructuredData slug={slug} />
        <ServesMain name={data?.name || ""} description={data?.description || ""} imgUrl={data?.imgUrl || ""} />
        <ServesStages stages={data?.stages || []} />
        <ServiseTable priceTable={data?.priceTable || []} name={data?.name || ""} />
        <BeforeAfter />
        <Testimonials />
        <Sertification />
        <Faq type={slug} />
      </main>
    </>
  );
};
export default PageServes;
