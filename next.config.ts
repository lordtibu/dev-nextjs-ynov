import type { NextConfig } from "next";
import createMDX from "@next/mdx";


const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'tsx', 'ts'],
  reactStrictMode: true,
};

const withMDX = createMDX()
export default withMDX(nextConfig)