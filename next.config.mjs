/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
			{
        protocol: "https",
        hostname: "*.fbsbx.com",
        port: "",
        pathname: "**",
      },
    ],
  },
	//TODO: Remover essa propriedade depois. SRC: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
	experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
