/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_HOME_URL || "https://twentysix.cloud",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  changefreq: "daily",
};

module.exports = config;
