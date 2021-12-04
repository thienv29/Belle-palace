/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://store-svc-demo.ezsalon.one*",
            },
        ];
    },
};
