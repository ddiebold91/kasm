/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'dhnhome2.online',
    description: 'The kasm repository for dhnhome2.online.',
    icon: '/site/thumbs_up.png',
    listUrl: 'https://ddiebold91.github.io/kasm/',
    contactUrl: 'https://ddiebold91.github.io/kasm/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
