type SeoMetaOpts = {
  title: string;
};

/// Generate default object for `useSeoMeta`
export function generateSeoMeta(opts: SeoMetaOpts) {
  return {
    title: opts.title,
    applicationName: "UnknownRori's personal site",
    description: "UnknownRori's personal site",
    author: "UnknownRori",

    googleSiteVerification: "GggFxN-h7JkmfbSQ7HbToni5fMp01-87CMWFhr9N0jw",

    ogUrl: "https://unknownrori.vercel.app",
    ogType: "website",
    ogTitle: "UnknownRori's personal site",
    ogImage: {
      path: "/cover.png",
      width: 1366,
      height: 653,
      type: "image/png",
    },
    ogDescription: "Unknownrori personal site",
    ogSiteName: "UnknownRori",
    ogLocale: "en_US",

    twitterCard: "summary_large_image",
    twitterSite: "@UnknownRori",
    twitterCreator: "@UnknownRori",
    twitterTitle: opts.title,
    twitterDescription: "UnknownRori's personal site",
  };
}
