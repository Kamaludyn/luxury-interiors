import Project from "../models/projects.model.js";
import asyncHandler from "express-async-handler";

export const sitemap = asyncHandler(async (req, res) => {
  const baseUrl = process.env.CLIENT_URL || "http://localhost:9493";

  const projects = await Project.find({}, "slug updatedAt");

  const staticPages = [
    "",
    "/services",
    "/projects",
    "/about-us",
    "/contact-us",
  ];

  let urls = "";

  // Static pages
  staticPages.forEach((path) => {
    urls += `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>${path === "" ? "1.0" : "0.8"}</priority>
      </url>
    `;
  });

  // Dynamic project pages
  projects.forEach((project) => {
    urls += `
      <url>
        <loc>${baseUrl}/projects/${project.slug}</loc>
        <lastmod>${project.updatedAt.toISOString()}</lastmod>
        <priority>0.7</priority>
      </url>
    `;
  });

  // Generate sitemap XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`.trim();

  // Set response headers and send the sitemap
  res.header("Content-Type", "application/xml");
  res.send(sitemapXml);
});
