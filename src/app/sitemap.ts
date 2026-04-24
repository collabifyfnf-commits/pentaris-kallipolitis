import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/services-data";

const BASE_URL = "https://pentaris-kallipolitis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = servicesData.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...servicePages,
    { url: `${BASE_URL}/erga`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/epikoinonia`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
