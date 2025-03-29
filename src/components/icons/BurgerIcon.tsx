import { SvgProps } from "@/types";

const BurgerIcon = ({ className }: SvgProps) => {
  return (
    <svg stroke="#B62121" className={className} fill="none" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1h16M1 7h16M1 13h16" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};

export { BurgerIcon };
