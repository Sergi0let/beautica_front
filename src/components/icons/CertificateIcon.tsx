import { SvgProps } from "@/types";

const CertificateIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="none" stroke="#fff" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M47.5 27.5v-7c0-2.8 0-4.2-.545-5.27a4.999 4.999 0 00-2.185-2.185C43.7 12.5 42.3 12.5 39.5 12.5H18c-2.8 0-4.2 0-5.27.545a4.998 4.998 0 00-2.185 2.185C10 16.3 10 17.7 10 20.5v14c0 2.8 0 4.2.545 5.27a5 5 0 002.185 2.185c1.07.545 2.47.545 5.27.545h17M20 32.5h10M20 22.5h17.5"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path d="M45 40a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" strokeWidth="5" />
      <path d="M50 50s-1.25-2.5-5-2.5-5 2.5-5 2.5" strokeLinecap="round" strokeWidth="5" />
    </svg>
  );
};

export { CertificateIcon };
