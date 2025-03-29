import { SvgProps } from "@/types";

const StarIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="#B62121" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0l1.598 8.402L20 10l-8.402 1.598L10 20l-1.598-8.402L0 10l8.402-1.598L10 0z" />
    </svg>
  );
};

export { StarIcon };
