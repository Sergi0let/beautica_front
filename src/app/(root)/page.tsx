import { About, BeforeAfter, Catalog, Faq, Hero, Sertification, Testimonials } from "@/components";

const Page = () => {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Catalog />
      <BeforeAfter />
      <Testimonials />
      <Sertification />
      <Faq />
    </main>
  );
};

export default Page;
