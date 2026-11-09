/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                hostname: 'storage.googleapis.com'
            }
        ],
        domains:["assets.aceternity.com"]
    }
}
module.exports = nextConfig
