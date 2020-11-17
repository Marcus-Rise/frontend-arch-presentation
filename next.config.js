/* eslint-disable */
const withPWA = require("next-pwa");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  pwa: {
    disable: process.env.NODE_ENV !== "production",
    dest: "public",
  },
  crossOrigin: "anonymous",
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};

module.exports = withMDX(withPWA(nextConfig));
