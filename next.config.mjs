/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/default",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // {
      //   source: "/api/:path*",
      //   destination: "http://127.0.0.1:8000/public/api/:path*", // Proxy API to Laravel backend
      // },
      {
        source: "/api/public/:path*",
        destination: "https://sandbox.4ulogistic.com/api/public/:path*", // Proxy API to Laravel backend
      },
      {
        source: "/api/client/:path*",
        destination: "https://sandbox.4ulogistic.com/api/client/:path*",
      },
    ];
  },
};

export default nextConfig;
