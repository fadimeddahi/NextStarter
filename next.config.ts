import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps catch potential problems
  images: {
    domains: ['example.com'], // Add any image domains you need here
  },
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL, // Example of exposing env variables to the client
  },
};

export default nextConfig;
