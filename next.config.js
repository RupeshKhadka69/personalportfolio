/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/RupeshKhadka69/blogpostfile/main/images/**',
          },
        ],
      },
}

module.exports = nextConfig
