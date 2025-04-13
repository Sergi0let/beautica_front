"use client";

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import useCurrentServices from "@/hooks/useCurrentServices";
import useInputMethod from "@/hooks/useInputMethod";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CatalogIcon } from "../icons";

const CatalogMenu = () => {
  const [open, setOpen] = useState(false);
  const dataCurrentServices = useCurrentServices();
  const inputMethod = useInputMethod();

  const isMouse = inputMethod === "mouse";
  return (
    <div className="hidden h-full border-r border-l sm:block">
      <Menubar>
        <MenubarMenu open={open} onOpenChange={setOpen}>
          <div
            onMouseEnter={isMouse ? () => setOpen(true) : undefined}
            onMouseLeave={isMouse ? () => setOpen(false) : undefined}
            onClick={() => !isMouse && setOpen(!open)}
            className="relative"
          >
            <MenubarTrigger className="hover:text-accent-foreground cursor-pointer transition-colors duration-500">
              <CatalogIcon className="mr-2 h-5 w-5" />
              ПОСЛУГИ <ChevronDown className="text-accent-foreground ml-1 size-4" />
            </MenubarTrigger>

            <MenubarContent align="start" sideOffset={-22} alignOffset={10}>
              {dataCurrentServices.map((service, i) => (
                <MenubarItem asChild key={`${service.title}-${i}`}>
                  <Link className="flex w-full cursor-pointer" href={service.href}>
                    <span className="flex-1">{service.title} </span>
                    <ChevronRight className="text-accent-foreground ml-1 size-4" />
                  </Link>
                </MenubarItem>
              ))}
            </MenubarContent>
          </div>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export { CatalogMenu };
