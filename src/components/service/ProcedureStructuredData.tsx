"use client";

import { metadataObj } from "@/constants";
import Script from "next/script";

const createSchemaMap = (slug: string) => {
  const item = metadataObj[slug];
  if (!item) return null;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: item.title,
      description: item.description,
      medicalSpecialty: "Dermatology",
      provider: {
        "@type": "Person",
        name: "Вікторія Альохіна",
        jobTitle: "Косметолог",
        url: "https://www.beautica.com.ua",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Вікторія Альохіна",
      jobTitle: "Косметолог",
      url: "https://www.beautica.com.ua",
    },
  ];
};

const ProcedureStructuredData = ({ slug }: { slug: string }) => {
  const data = metadataObj[slug] ? createSchemaMap(slug) : null;
  if (!data) return null;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export { ProcedureStructuredData };
