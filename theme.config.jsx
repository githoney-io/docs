export default {
  logo: <><div style={{ width: 28 }}><img src="https://githoney.io/assets/logos/logo-githoney.svg" alt="GitHoney" /></div><div style={{ fontWeight: 600, marginLeft: 16, fontSize: 20 }}>GitHoney Docs</div></>,
  project: {
    link: "https://github.com/apps/githoney-io",
  },
  chat: {
    link: "https://discord.gg/Vc3x8N9nz2",
  },
  footer: {
    text: "© 2024 GitHoney. All rights reserved.",
  },
  darkMode: false,
  primaryHue: 48,
  primarySaturation: 100,
  nextThemes: {
    defaultTheme: "light",
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="https://githoney.io/favicon.ico" />
    </>
  ),
  docsRepositoryBase: "https://github.com/githoney-io/monolith/tree/main/docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – GitHoney",
      description: "GitHoney streamlines rewarding your open-source contributions, backed by the transparency and security of smart contracts.",
      canonical: "https://githoney.io",
      siteName: "GitHoney",
      openGraph: {
        url: "https://githoney.io",
        title: "GitHoney",
        description: "GitHoney streamlines rewarding your open-source contributions, backed by the transparency and security of smart contracts.",
        images: [
          {
            url: "https://githoney.io/assets/logos/logo-githoney.svg",
            width: 96,
            height: 144,
            alt: "GitHoney",
            type: "image/svg",
          },
        ],
      },
    };
  },
};
