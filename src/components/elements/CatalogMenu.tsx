import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { dataServices } from "@/data";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { CatalogIcon } from "../icons";

const CatalogMenu = () => {
  return (
    <div className="hidden h-full border-r border-l sm:block">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="hover:text-accent-foreground cursor-pointer transition-colors duration-500">
            <CatalogIcon className="mr-2 h-5 w-5" />
            ПОСЛУГИ <ChevronDown className="text-accent-foreground ml-1 size-4" />
          </MenubarTrigger>
          <MenubarContent align="start" sideOffset={-22} alignOffset={10}>
            {dataServices.map((service) => (
              <MenubarItem key={service.title}>
                <Link className="w-full" href={service.href}>
                  {service.title} <ChevronRight className="text-accent-foreground float-right ml-1 size-4" />
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export { CatalogMenu };
