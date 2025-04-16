const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/portfolio' : '',
    assetPrefix: isProd ? '/portfolio/' : '',
};

export default nextConfig;
