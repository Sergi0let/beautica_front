"use client";

import { StarIcon } from "@/components";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";

type MouseEventProps = React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>;
type MouseEventHandler = (e: MouseEventProps) => void;

type BtnOrLinkProps = {
  title?: string;
  className?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  anchor?: string;
  onClick?: MouseEventHandler;
  dataFade?: boolean;
  style?: React.CSSProperties;
};

export const BtnOrLink = ({
  title = "Текст кнопки",
  className = "",
  to = "",
  onClick,
  type = "button",
  disabled = false,
  anchor,
  dataFade = false,
  style,
  ...props
}: BtnOrLinkProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleRippleEffect = (e: MouseEventProps) => {
    if (!buttonRef || !linkRef) {
      return;
    }
    const button = to || anchor ? linkRef.current : buttonRef.current;
    const rect = button!.getBoundingClientRect();
    const ripple = document.createElement("span");

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple-effect";

    button!.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 300);
  };

  const handleClick = (e: MouseEventProps) => {
    if (onClick) {
      onClick(e);
    }
    handleRippleEffect(e);
  };

  const baseStyles = cn(
    "btn relative flex-center rounded-[50%] bg-primary overflow-hidden group duration-500 ease-in-out",
    className,
  );

  const content = (
    <>
      <StarIcon className="fill-primary-foreground size-4 transition-transform group-hover:-translate-x-2 group-hover:-rotate-180 md:size-6" />
      <span className="text-btn ml-2 md:ml-[10px]">{title}</span>
    </>
  );

  if (to) {
    return (
      <Link
        data-fade={dataFade}
        href={to || ""}
        aria-label={to || ""}
        className={baseStyles}
        onClick={handleClick}
        ref={linkRef}
        style={style}
        {...props}
      >
        {content}
      </Link>
    );
  }
  if (anchor) {
    return (
      <a
        data-fade={dataFade}
        style={style}
        href={`#${anchor}` || ""}
        className={baseStyles}
        onClick={handleClick}
        ref={linkRef}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...props}
      style={style}
      data-fade={dataFade}
      type={type}
      disabled={disabled ? true : false}
      className={baseStyles}
      onClick={handleClick}
      ref={buttonRef}
    >
      {content}
    </button>
  );
};
