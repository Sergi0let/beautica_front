import { SvgProps } from "@/types";

const CatalogIcon = ({ className }: SvgProps) => {
  return (
    <svg fill="none" className={className} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" fill="#B62121" r="4" />
      <circle cx="15" cy="15" fill="#B62121" r="4" />
      <rect height="8" width="8" fill="#B62121" rx="2" x="11" y="1" />
      <rect height="8" width="8" fill="#B62121" rx="2" x="1" y="11" />
    </svg>
  );
};

export { CatalogIcon };
