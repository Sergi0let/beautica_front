import type { SvgProps } from "@/types";

const InstagramIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)">
        <path
          d="M25.143 0H6.857A6.857 6.857 0 000 6.857v18.286A6.857 6.857 0 006.857 32h18.286A6.857 6.857 0 0032 25.143V6.857A6.857 6.857 0 0025.143 0z"
          fill="url(#b)"
        />
        <path
          d="M25.143 0H6.857A6.857 6.857 0 000 6.857v18.286A6.857 6.857 0 006.857 32h18.286A6.857 6.857 0 0032 25.143V6.857A6.857 6.857 0 0025.143 0z"
          fill="url(#c)"
        />
        <path
          d="M25.143 0H6.857A6.857 6.857 0 000 6.857v18.286A6.857 6.857 0 006.857 32h18.286A6.857 6.857 0 0032 25.143V6.857A6.857 6.857 0 0025.143 0z"
          fill="url(#d)"
        />
        <path d="M23.999 9.714a1.714 1.714 0 11-3.429 0 1.714 1.714 0 013.429 0z" fill="#fff" />
        <path
          d="M16.003 21.714a5.714 5.714 0 100-11.428 5.714 5.714 0 000 11.428zm0-2.285a3.429 3.429 0 100-6.858 3.429 3.429 0 000 6.857z"
          fill="#fff"
          fillRule="evenodd"
        />
        <path
          d="M4.57 15.543c0-3.84 0-5.76.748-7.228A6.857 6.857 0 018.314 5.32c1.467-.748 3.387-.748 7.228-.748h.914c3.84 0 5.76 0 7.227.748a6.856 6.856 0 012.997 2.996c.747 1.467.747 3.387.747 7.228v.914c0 3.84 0 5.76-.747 7.227a6.856 6.856 0 01-2.997 2.997c-1.466.747-3.387.747-7.227.747h-.914c-3.84 0-5.76 0-7.228-.747a6.857 6.857 0 01-2.996-2.997c-.748-1.466-.748-3.387-.748-7.227v-.914zm10.972-8.686h.914c1.958 0 3.289.002 4.318.086 1.002.082 1.514.23 1.872.412a4.572 4.572 0 011.997 1.998c.183.357.331.87.413 1.872.084 1.029.086 2.36.086 4.318v.914c0 1.958-.002 3.289-.086 4.318-.082 1.002-.23 1.514-.413 1.872a4.572 4.572 0 01-1.997 1.997c-.358.183-.87.331-1.872.413-1.03.084-2.36.086-4.318.086h-.914c-1.958 0-3.29-.002-4.318-.086-1.002-.082-1.514-.23-1.872-.413a4.572 4.572 0 01-1.998-1.997c-.182-.358-.33-.87-.412-1.872-.084-1.03-.086-2.36-.086-4.318v-.914c0-1.958.002-3.29.086-4.318.082-1.002.23-1.515.412-1.872a4.572 4.572 0 011.998-1.998c.358-.182.87-.33 1.872-.412 1.029-.084 2.36-.086 4.318-.086z"
          fill="#fff"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          gradientTransform="rotate(-55.376 28.583 1.11) scale(29.1653)"
          gradientUnits="userSpaceOnUse"
          r="1"
        >
          <stop offset="0" stopColor="#B13589" />
          <stop offset=".793" stopColor="#C62F94" />
          <stop offset="1" stopColor="#8A3AC8" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          gradientTransform="rotate(-65.136 31.087 8.52) scale(25.8219)"
          gradientUnits="userSpaceOnUse"
          r="1"
        >
          <stop offset="0" stopColor="#E0E8B7" />
          <stop offset=".445" stopColor="#FB8A2E" />
          <stop offset=".715" stopColor="#E2425C" />
          <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="d"
          cx="0"
          cy="0"
          gradientTransform="rotate(-8.13 7.183 12.632) scale(44.4467 9.5067)"
          gradientUnits="userSpaceOnUse"
          r="1"
        >
          <stop offset=".157" stopColor="#406ADC" />
          <stop offset=".468" stopColor="#6A45BE" />
          <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
        </radialGradient>
        <clipPath id="a">
          <path d="M0 0h32v32H0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { InstagramIcon };
