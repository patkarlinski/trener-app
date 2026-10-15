const nextConfig = {
  images: {
    qualities: [75, 82],
  },
  async redirects() {
    return [
      {
        source: "/preview",
        destination: "/",
        permanent: true,
      },
      {
        source: "/preview/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
