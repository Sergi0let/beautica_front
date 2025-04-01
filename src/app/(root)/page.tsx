import { About, BeforeAfter, Catalog, Hero } from "@/components";

const Page = () => {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Catalog />
      <BeforeAfter />
    </main>
  );
};

export default Page;
