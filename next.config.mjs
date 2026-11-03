/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/jam-qa-next',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
