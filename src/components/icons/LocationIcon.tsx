import type { SvgProps } from "@/types";

const LocationIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="#C82213" viewBox="0 0 12 19" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.997.667a5.833 5.833 0 015.053 8.75l-5.053 8.75C2.96 12.906 1.277 9.989.945 9.417A5.833 5.833 0 015.998.667zm0 3.333a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export { LocationIcon };
