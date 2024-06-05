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
}) => (
  <Head>
    <title>{pageMetadata?.title || content?.data?.metadata?.title}</title>
    <meta
      name="description"
      content={
        pageMetadata?.description || content?.data?.metadata?.description
      }
    />
    <link
      rel="canonical"
      href={pageMetadata?.canonicalUrl || content?.data?.metadata?.canonicalUrl}
    />
    <meta
      property="og:title"
      content={
        pageMetadata?.openGraph?.title ||
        content?.data?.metadata?.openGraph?.title
      }
    />
    <meta
      property="og:description"
      content={
        pageMetadata?.openGraph?.description ||
        content?.data?.metadata?.openGraph?.description
      }
    />
    <meta
      property="og:image"
      content={
        pageMetadata?.openGraph?.image ||
        content?.data?.metadata?.openGraph?.image
      }
    />
    <meta
      property="og:url"
      content={
        pageMetadata?.openGraph?.url || content?.data?.metadata?.openGraph?.url
      }
    />
    <meta
      name="twitter:card"
      content={
        pageMetadata?.twitter?.card || content?.data?.metadata?.twitter?.card
      }
    />
    <meta
      name="twitter:site"
      content={
        pageMetadata?.twitter?.site || content?.data?.metadata?.twitter?.site
      }
    />
    <meta
      name="twitter:title"
      content={
        pageMetadata?.twitter?.title || content?.data?.metadata?.twitter?.title
      }
    />
    <meta
      name="twitter:description"
      content={
        pageMetadata?.twitter?.description ||
        content?.data?.metadata?.twitter?.description
      }
    />
    <meta
      name="twitter:image"
      content={
        pageMetadata?.twitter?.image || content?.data?.metadata?.twitter?.image
      }
    />
  </Head>
);

export default PageMetadataHead;
