const nextConfig = {
  // Next 16.4 generuje AGENTS.md przy każdym `next dev` — nie chcemy tego w repo.
  agentRules: false,
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
