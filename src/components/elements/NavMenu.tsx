"use client";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { dataServices } from "@/constants";
import { links } from "@/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BurgerIcon, LocationIcon, LogoIcon, PhoneIcon } from "../icons";
import { BtnOrLink } from "./BtnOrLink";

interface Props {
  address: string;
  location: string;
  phone: string;
  phoneHref: string;
}

const NavMenu = ({ address, location, phone, phoneHref }: Props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1320px)" });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-[1320px]:hidden" />;
  }

  if (isDesktopOrLaptop) {
    return null;
  }

  return (
    <div className="min-[1320px]:hidden">
      <Sheet>
        <SheetTrigger asChild className="">
          <button
            aria-label="Відкрити меню навігації"
            className="flex h-[60px] w-10 cursor-pointer items-center justify-end lg:h-20"
          >
            <span className="flex-center bg-secondary-foreground size-9 rounded-[8px]">
              <BurgerIcon className="w-4" />
            </span>
          </button>
        </SheetTrigger>
        <SheetContent className="flex">
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <LogoIcon className="w-[113px]" />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto shadow-sm">
            <ul className="space-y-5 border-b px-4 py-5 text-sm font-medium uppercase md:text-base">
              {dataServices.map((service) => (
                <li key={service.id}>
                  <SheetClose asChild>
                    <Link
                      href={service.href}
                      className="hover:text-accent-foreground w-full transition-colors duration-500"
                    >
                      {service.title}
                      <ChevronRight className="text-accent-foreground float-right ml-1 size-4" />
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <ul className="space-y-5 border-b px-4 py-5 text-sm font-medium uppercase md:text-base">
              {links.map((service) => (
                <li key={service.id}>
                  <SheetClose asChild>
                    <a
                      href={service.href}
                      className="hover:text-accent-foreground w-full transition-colors duration-500"
                    >
                      {service.title}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <ul className="space-y-5 border-b px-4 py-5 text-sm font-medium uppercase md:text-base">
              <li>
                <SheetClose asChild>
                  <a href={location} target="_blank" rel="noopener noreferrer" className="nav-link">
                    <LocationIcon className="float-left mr-2 size-5" />
                    {address}
                  </a>
                </SheetClose>
              </li>
              <SheetClose asChild>
                <a href={phoneHref} className="nav-link">
                  <PhoneIcon className="float-left mr-2 size-5" />
                  {phone}
                </a>
              </SheetClose>
            </ul>
          </div>
          <div className="sticky bottom-0 mt-auto mb-2 px-10 pt-2">
            <SheetClose asChild>
              <BtnOrLink anchor="/" className="h-12" type="button" title="Записатися на прийом" />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { NavMenu };
