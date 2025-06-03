/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_HOME_URL || "https://aleph.cloud",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  changefreq: "daily",
  outDir: "./out",
};

module.exports = config;
