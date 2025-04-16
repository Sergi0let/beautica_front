import {
  About,
  BeforeAfter,
  Catalog,
  Faq,
  FaqStructuredData,
  Hero,
  Partners,
  Sertification,
  Testimonials,
} from "@/components";
import { faqs } from "@/constants";
import Head from "next/head";

const Page = () => {
  const faqsData = faqs.generalType;

  return (
    <>
      <Head>
        <FaqStructuredData faqsData={faqsData} />
      </Head>
      <main className="flex-1">
        <Hero />
        <About />
        <Catalog />
        <BeforeAfter />
        <Testimonials />
        <Partners />
        <Sertification />
        <Faq />
      </main>
    </>
  );
};

export default Page;
