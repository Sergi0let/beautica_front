import { mainPageAnchors, servicePageAnchors, ServicesRoutes } from '@/constants'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useAnchorData = () => {
  const [anchorData, setAnchorData] = useState<{ id: string; name: string; href: string }[]>([])
  const pathname = usePathname()


  useEffect(() => {
    if (pathname === "/") {
      setAnchorData(mainPageAnchors)
    }
    if (Object.values(ServicesRoutes).some((route) => route === pathname.split("/")[1])) {
      setAnchorData(servicePageAnchors)
    }

  }, [pathname])


  return anchorData
}