"use client";

import { InstagramIcon, LocationIcon, PhoneIcon, UserdataForm } from "@/components";
import { signUpAnchors } from "@/constants";
import { contactsData } from "@/data";
import { sendUserdata } from "@/lib/sendUserdata";
import { usersLeaveDataSchema } from "@/lib/validations";
import Image from "next/image";

const Footer = () => {
  const address = contactsData.find((contact) => contact.type === "address");
  const phone = contactsData.find((contact) => contact.type === "phone");
  const instagram = contactsData.find((contact) => contact.type === "instagram");

  return (
    <section className="wrap-secondary relative w-full overflow-hidden">
      <div className="grid rounded-4xl bg-(image:--bg-pattern) pt-6 text-white lg:grid-cols-2">
        <div className="mx-auto">
          <div
            data-grow
            className="bottom-0 left-30 max-w-[240px] lg:absolute lg:max-w-[360px] xl:-bottom-20 xl:max-w-[438px]"
          >
            <Image src="/footer/1.webp" alt="footer-image" width={438} height={743} />
          </div>
        </div>
        <div className="mx-auto mb-14 max-w-[665px] md:mb-4 lg:mx-4">
          <div className="border-action mx-4 rounded-2xl border border-solid pt-5 md:pt-8">
            <h2
              id={signUpAnchors.link}
              data-fade
              className="font-source-serif-pro mx-auto scroll-mt-10 px-5 text-center text-2xl leading-none min-[1100px]:px-20 sm:text-3xl md:text-4xl lg:scroll-mt-[150px] lg:text-5xl"
            >
              Підкресліть свою чарівність
            </h2>
            <p
              data-fade
              className="text-secondary-foreground mx-auto mt-2 mb-3 px-4 text-center text-sm font-normal min-[1100px]:px-20 md:mb-4 md:text-base"
            >
              Залиште свої дані, і ми зв&apos;яжемось з вами для підкреслення вашого неповторного вигляду.
            </p>
            <div className="px-5 pb-5 md:px-8 md:pb-9">
              <UserdataForm
                type="LEAVE_DATA"
                schema={usersLeaveDataSchema}
                defaultValues={{ name: "", phone: "", description: "" }}
                onSubmit={sendUserdata}
              />
            </div>
            <div className="border-action h-1px mx-5 border-b border-solid md:mx-8" />
            <nav className="m-5 flex flex-col flex-wrap justify-between gap-4 text-sm font-semibold md:flex-row md:text-base">
              <a data-fade href={phone?.href} className="flex flex-nowrap items-center">
                <PhoneIcon className="float-left mr-2 size-5 fill-white md:size-8" />
                {phone?.title}
              </a>
              <a
                data-fade
                href={address?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-nowrap items-center"
              >
                <LocationIcon className="float-left mr-2 size-5 fill-white md:size-8" />
                {address?.title}
              </a>

              <a
                data-fade
                href={instagram?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-nowrap items-center"
              >
                <InstagramIcon className="float-left mr-2 size-5 md:size-8" />
                {instagram?.title}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
