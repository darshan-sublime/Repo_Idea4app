/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    minimumCacheTTL: 86400,
  },
  webpack: (config, { webpack, dir }) => {
    const fs = require('fs');
    const path = require('path');
    
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /.*/,
        (resource) => {
          if (!resource.request.startsWith('.')) return;
          
          const resolvedPath = path.resolve(resource.context, resource.request);
          const exists = ['.tsx', '.ts', '.jsx', '.js', ''].some(ext => 
            fs.existsSync(resolvedPath + ext) || fs.existsSync(path.join(resolvedPath, 'index' + ext))
          );
          
          if (!exists) {
            resource.request = path.resolve(dir, 'dummy.js');
          }
        }
      )
    );
    return config;
  },
  async headers() {
    return [
      {
        source: '/((?!_next|_next/static|_next/image|api|favicon.ico).*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.openstreetmap.org; default-src 'self'; object-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.adgentek.ai https://*.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https: https://fonts.gstatic.com; connect-src 'self' ws: wss: https://*.adgentek.ai https://idea4app.ai https://*.idea4app.ai https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com; frame-ancestors 'self' https://idea4app.ai https://*.idea4app.ai https://e2b.dev https://*.e2b.dev https://vercel.app https://*.vercel.app http://localhost:*;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
