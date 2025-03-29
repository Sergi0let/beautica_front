"use client";

import { links } from "@/data";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavLinks = () => {
  // Add this to prevent rendering during SSR
  const [isMounted, setIsMounted] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1320px)" });

  // Only run after component mounts on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything during SSR or initial client render
  if (!isMounted) {
    return <div className="flex-center hidden flex-1"></div>;
  }

  return (
    <div className="flex-center hidden flex-1">
      {isDesktopOrLaptop ? (
        <nav className="nav-main">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="nav-main__link group">
              {link.title}
              <span />
            </a>
          ))}
        </nav>
      ) : (
        <nav className="nav-main" />
      )}
    </div>
  );
};

export { NavLinks };
