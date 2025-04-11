import type { SvgProps } from "@/types";

const InfoIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="#B62121" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C4.477 0 0 4.477 0 10c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm2.081 15.498c-.514.203-.924.357-1.231.464-.307.107-.663.16-1.069.16-.623 0-1.108-.152-1.453-.456a1.472 1.472 0 01-.518-1.158c0-.182.013-.368.038-.557.027-.19.068-.404.125-.643l.644-2.276c.057-.218.106-.425.145-.618.039-.195.057-.374.057-.536 0-.29-.06-.493-.179-.607-.121-.115-.349-.17-.688-.17-.166 0-.337.024-.512.076a7.276 7.276 0 00-.448.149l.17-.701c.421-.172.825-.32 1.21-.441.386-.124.75-.185 1.093-.185.618 0 1.096.15 1.432.449.334.299.503.687.503 1.165 0 .099-.012.273-.035.522-.023.25-.066.478-.129.687l-.64 2.268c-.053.182-.1.39-.142.623-.041.233-.062.411-.062.53 0 .302.067.508.203.617.133.109.368.164.7.164.156 0 .332-.028.53-.082a3.01 3.01 0 00.428-.144l-.172.7zm-.113-9.209a1.53 1.53 0 01-1.08.417c-.42 0-.782-.14-1.083-.417a1.33 1.33 0 01-.451-1.01c0-.393.152-.732.45-1.012.302-.281.665-.421 1.085-.421.42 0 .78.14 1.079.42.299.28.448.62.448 1.013 0 .396-.15.732-.448 1.01z" />
    </svg>
  );
};

export { InfoIcon };
