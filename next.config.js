/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeimg.com", "cdn.discordapp.com"],
  },
  env: {
    NEXT_PUBLIC_GRAPHQL_URI: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  },
};

module.exports = nextConfig;
