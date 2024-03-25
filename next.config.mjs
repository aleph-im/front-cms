import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  BuilderDevTools()({
    reactStrictMode: true,
    output: 'export',
    images: {
      unoptimized: true,
    },
  })
);

export default nextConfig;
