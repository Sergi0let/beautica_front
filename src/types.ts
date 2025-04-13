export interface SvgProps {
  className?: string
  color?: string
  animType?: string
}

export type EmailTemplate = "send-question"

export type EmailTemplateData = {
  "send-question": { name: string; phone: string; description: string }
}

export interface MetadataItem {
  title: string
  description: string
  image: string
}

export interface PriceListing {
  id: number
  title: string
  price: number
  newPrice: number | null
}

export interface PriceTable {
  id: number
  title: string
  imgUrl: string
  description: string
  prices: {
    listingPrice: PriceListing[]
  }
}