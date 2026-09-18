import type { MetadataRoute } from "next";
const base = "https://the-ciprians-tree-service.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/services", "/approach", "/about", "/contact"].map((path, index) => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: index === 0 ? 1 : .8 })); }
