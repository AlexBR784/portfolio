/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add basePath if your repository name is not your username.github.io
  basePath: '/portfolio',
  // This is important for GitHub Pages
  assetPrefix: '/portfolio/',
  // Allow development from local network
  allowedDevOrigins: ['192.168.1.99'],
}

module.exports = nextConfig
