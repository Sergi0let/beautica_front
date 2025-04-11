import type { SvgProps } from "@/types";

const FlowerIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="#fff" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M51.696 32.163c-.002.024-.008.049-.018.109-.008.038-.005.027 0 0-.888 4.852-6.524 7.151-10.29 4.203 1.178-2.482 1.559-5.313 1.01-8.033 1.847-.91 3.43-2.291 4.602-4.017 3.223.937 5.297 4.408 4.678 7.847l.018-.11zM37.436 51.55c-4.056 0-7.206-4.085-6.396-8.233 2.505-.03 5.077-1.012 7.05-2.623 1.624 1.326 3.656 2.217 5.7 2.5.912 4.208-2.235 8.356-6.354 8.356zM29.6 37.69c-8.167-1.824-5.58-15.261 2.611-13.382 8.167 1.872 5.581 15.226-2.611 13.382zm-8.047.812c1.115 1.512 2.732 2.824 4.387 3.638a12.796 12.796 0 001.34 8.66c-7.9 4.16-13.481-8.512-5.727-12.298zm-6.739-.927c-3.76-1.093-5.8-5.548-4.24-9.283 1.658-3.97 6.536-5.365 9.853-2.767a12.847 12.847 0 00-1.01 8.033 11.888 11.888 0 00-4.603 4.017zm2.98-18.774s-.007 0-.007.003l-.013-.006c.007.003.015.003.02.003zm6.23-8.332c4.178-.225 7.592 3.902 6.748 8.211-2.502.033-5.074 1.015-7.046 2.623-1.113-.907-2.437-1.633-3.793-2.044-.29-.087-1.642-.43-2.042-.463-.872-4.069 2.251-8.119 6.133-8.327zm16.24 13.028c-1.116-1.512-2.733-2.827-4.389-3.638.598-2.965.094-6.039-1.342-8.664 7.903-4.156 13.482 8.513 5.73 12.302zm8.727-4.136C50.67 8.95 39.366 1.108 30.907 7.054c-8.462-5.946-19.763 1.893-18.084 12.308-10.43 3.671-10.43 19.607 0 23.278-1.679 10.412 9.622 18.25 18.084 12.307 8.46 5.943 19.763-1.895 18.083-12.307 10.7-3.767 10.659-19.527 0-23.278z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export { FlowerIcon };
