"use client";

import { useAnchorData } from "@/hooks/useAnchorData";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavLinks = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1320px)" });
  const displayAnchors = useAnchorData();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="flex-center hidden flex-1"></div>;
  }

  return (
    <div className="flex-center hidden flex-1">
      {isDesktopOrLaptop ? (
        <nav className="nav-main">
          {displayAnchors.map((link, index) => (
            <a key={index} href={link.href} className="nav-main__link group">
              {link.name}
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
