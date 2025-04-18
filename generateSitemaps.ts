import { baseUrl, ServicesRoutes } from '@/constants'
import fs from "fs"
import path from "path"

const SITE_URL = baseUrl.replace(/\/$/, "")

const staticPaths = Object.values(ServicesRoutes)


// async function fetchDynamicPaths() {
//   // Тут можна зробити запит до CMS (наприклад, Sanity або Strapi)

//   return products.map((product) =>
//     product.groupName
//       ? `catalog/${product.category === "rolls" ? "rolls" : product.category === "zvyko-izol" ? "zvyko-izol" : ""}/${product.groupName}/${product.id}`
//       : `catalog/${product.category}/${product.id}`,
//   )
// }

export async function generateSitemaps() {
  // const dynamicPaths = await fetchDynamicPaths()
  const allPaths = ['', ...staticPaths]

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths
      .map(
        (path) => `
        <url>
          <loc>${SITE_URL}/${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`,
      )
      .join("")}
  </urlset>`

  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml")
  fs.writeFileSync(sitemapPath, sitemapContent, "utf8")

  console.log("✅ Sitemap generated at:", sitemapPath)
}

generateSitemaps()