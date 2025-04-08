import { SvgProps } from "@/types";

const ArrowIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} viewBox="0 0 42 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.414 16.414a2 2 0 000-2.828L28.686.858a2 2 0 10-2.828 2.828L37.172 15 25.858 26.314a2 2 0 102.828 2.828l12.728-12.728zM0 17h40v-4H0v4z" />
    </svg>
  );
};

export { ArrowIcon };
