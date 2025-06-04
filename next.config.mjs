import BuilderDevTools from "@builder.io/dev-tools/next";
import twin from "babel-plugin-twin";
import macros from "babel-plugin-macros";
import styledComponents from "babel-plugin-styled-components";
import syntaxTypescript from "@babel/plugin-syntax-typescript";

// default to true when unset
const shouldExport = process.env.NEXTJS_EXPORT !== "false";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  BuilderDevTools()({
    reactStrictMode: true,
    output: shouldExport ? "export" : undefined,
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: "babel-loader",
            options: {
              plugins: [
                twin,
                macros,
                [styledComponents, { ssr: true, displayName: true }],
                [syntaxTypescript, { isTSX: true }],
              ],
            },
          },
        ],
      });

      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        module: false,
        path: false,
        os: false,
        crypto: false,
        perf_hooks: false,
        v8: false,
      };

      return config;
    },
  })
);

export default nextConfig;
