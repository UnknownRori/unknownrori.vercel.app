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

    ogUrl: "https://unknownrori.vercel.app",
    ogType: "website",
    ogTitle: "UnknownRori's personal site",
    ogDescription: "Unknownrori personal site",
    ogSiteName: "UnknownRori",
    ogLocale: "en_US",

    twitterCard: "summary",
    twitterSite: "@UnknownRori",
    twitterCreator: "@UnknownRori",
    twitterTitle: opts.title,
    twitterDescription: "UnknownRori's personal site",
  };
}
