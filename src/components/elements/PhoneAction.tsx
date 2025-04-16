import { contactsData } from "@/data";
import { PhoneIcon } from "../icons";

const PhoneAction = () => {
  const data = contactsData.find((item) => item.type === "phone");

  if (!data) return null;
  return (
    <a
      href={data.href}
      className="bg-primary fixed right-4 bottom-4 z-40 flex size-[58px] items-center justify-center rounded-full md:hidden"
    >
      <PhoneIcon className="size-6 fill-current" />
      <span className="sr-only">Перезвоніть нам</span>
    </a>
  );
};

export { PhoneAction };
