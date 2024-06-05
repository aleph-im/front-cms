import { BuilderContent } from "@builder.io/sdk";
import Head from "next/head";

type PageMetadataField = string | null;
type PageOpenGraphProps = {
  title?: PageMetadataField;
  description?: PageMetadataField;
  image?: PageMetadataField;
  url?: PageMetadataField;
};
type PageTwitterProps = {
  card?: PageMetadataField;
  site?: PageMetadataField;
  title?: PageMetadataField;
  description?: PageMetadataField;
  image?: PageMetadataField;
};

export type PageMetadataProps = {
  title?: PageMetadataField;
  description?: PageMetadataField;
  canonicalUrl?: PageMetadataField;
  openGraph?: PageOpenGraphProps | null;
  twitter?: PageTwitterProps | null;
};

export const PageMetadataHead = ({
  pageMetadata,
  content,
}: {
  pageMetadata?: PageMetadataProps | null;
  content: BuilderContent | null;
}) => {
  const contentPageMetadata = content?.data?.metadata;
  const pageTitle = pageMetadata?.title || contentPageMetadata?.title;
  const pageDescription =
    pageMetadata?.description || contentPageMetadata?.description;
  const pageCanonicalUrl =
    pageMetadata?.canonicalUrl || contentPageMetadata?.canonicalUrl;
  const ogTitle =
    pageMetadata?.openGraph?.title || contentPageMetadata?.openGraph?.title;
  const ogDescription =
    pageMetadata?.openGraph?.description ||
    contentPageMetadata?.openGraph?.description;
  const ogImage =
    pageMetadata?.openGraph?.image || contentPageMetadata?.openGraph?.image;
  const ogUrl =
    pageMetadata?.openGraph?.url || contentPageMetadata?.openGraph?.url;
  const twitterCard =
    pageMetadata?.twitter?.card || contentPageMetadata?.twitter?.card;
  const twitterSite =
    pageMetadata?.twitter?.site || contentPageMetadata?.twitter?.site;
  const twitterTitle =
    pageMetadata?.twitter?.title || contentPageMetadata?.twitter?.title;
  const twitterDescription =
    pageMetadata?.twitter?.description ||
    contentPageMetadata?.twitter?.description;
  const twitterImage =
    pageMetadata?.twitter?.image || contentPageMetadata?.twitter?.image;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageCanonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
    </Head>
  );
};

export default PageMetadataHead;
