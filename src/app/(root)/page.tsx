import { About, Catalog, Hero } from "@/components";

const Page = () => {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Catalog />
    </main>
  );
};

export default Page;
