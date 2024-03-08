/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "J-Souffle's Portfolio",
  titleTemplate: "%s | J-Souffle",
  defaultTitle: "J-Souffle's (Joshua Cancio) Portfolio",
  description: "Personal website that showcases J-Souffle's best work, tells you about Joshua Cancio and has some fun eastern eggs",
  canonical: "https://J-Souffle.tech",
  openGraph: {
    url: "https://J-Souffle.tech",
    title: "J-Souffle's Portfolio",
    description: "Personal website that showcases J-Souffle's best work, tells you about Joshua Cancio and has some fun eastern eggs",
    images: [
      {
        url: "https://www.J-Souffle.tech/J-Souffle.png",
        height: 1024,
        width: 1024,
        alt: "png",
      },
    ],
    site_name: "J-Souffle's Portfolio",
  },
  twitter: {
    handle: "@J-Souffle",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
