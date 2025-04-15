import { dataServices } from "@/constants"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface Service {
  id: string
  href: string
  title: string
}

const useCurrentServices = () => {
  const pathname = usePathname()
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    const fetchServices = async () => {
      // TODO: замінити на фетч з API коли буде потрібно
      const rawServices = dataServices

      const currentSegment = pathname.split("/")[1]

      const filtered = rawServices.filter((service) => {
        const hrefSegment = service.href.replace("/", "")
        return hrefSegment !== currentSegment
      })

      setServices(filtered)
    }

    fetchServices()
  }, [pathname])

  return services
}

export default useCurrentServices;

/*
const fetchServices = async () => {
  const res = await fetch("/api/services");
  const rawServices = await res.json();

  const currentSegment = pathname.split("/")[1];

  const filtered = rawServices.filter((service) => {
    const hrefSegment = service.href.replace("/", "");
    return hrefSegment !== currentSegment;
  });

  setServices(filtered);
};
*/