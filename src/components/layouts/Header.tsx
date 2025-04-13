import { CatalogMenu, LocationIcon, LogoIcon, NavLinks, NavMenu, PhoneIcon } from "@/components";
import { contactsData } from "@/data";
import Link from "next/link";
import { BtnInstagram } from "../elements/BtnInstagram";

const Header = () => {
  const address = contactsData.find((contact) => contact.type === "address");
  const phone = contactsData.find((contact) => contact.type === "phone");
  const instagram = contactsData.find((contact) => contact.type === "instagram");

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b-[1px] border-solid bg-white">
      <div className="wrap relative">
        <div className="flex h-[60px] items-center lg:h-20">
          <Link href="/" className="flex items-center">
            <LogoIcon className="mr-5 w-28 shrink-0 min-[1360px]:mr-10 min-[1360px]:w-40 xl:w-30" />
          </Link>
          <CatalogMenu />
          <NavLinks />
          <div className="flex h-full items-center pl-4 text-sm font-medium md:border-l 2xl:pl-10">
            <a href={address?.href} target="_blank" rel="noopener noreferrer" className="nav-link mr-4 hidden lg:flex">
              <LocationIcon className="float-left size-5" />
              {address?.title}
            </a>
            <a href={phone?.href} className="nav-link mr-1 hidden md:flex">
              <PhoneIcon className="float-left size-5" />
              {phone?.title}
            </a>
            <BtnInstagram href={instagram?.href ?? ""} />
            <NavMenu
              address={address?.title ?? ""}
              location={address?.href ?? ""}
              phone={phone?.title ?? ""}
              phoneHref={phone?.href ?? ""}
            />
          </div>
        </div>
        <span className="absolute top-0 left-[35.8%] z-50 h-screen w-[1px] bg-red-500"></span>
        <span className="absolute top-0 left-[64.4%] z-50 h-screen w-[1px] bg-red-500"></span>
      </div>
    </header>
  );
};

export { Header };
