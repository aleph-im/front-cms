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
  const contentPageMetadata = content?.data?.metadata ?? {};

  const getMetaDataField = (keys: string[]) => {
    const fromPageMetadata = keys.reduce(
      (obj: any, key) => obj?.[key],
      pageMetadata
    );
    const fromContentPageMetadata = keys.reduce(
      (obj, key) => obj?.[key],
      contentPageMetadata
    );
    return fromPageMetadata || fromContentPageMetadata;
  };

  return (
    <Head>
      <title>{getMetaDataField(["title"])}</title>
      <meta name="description" content={getMetaDataField(["description"])} />
      <link rel="canonical" href={getMetaDataField(["canonicalUrl"])} />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={getMetaDataField(["openGraph", "title"])}
      />
      <meta
        property="og:description"
        content={getMetaDataField(["openGraph", "description"])}
      />
      <meta
        property="og:image"
        content={getMetaDataField(["openGraph", "image"])}
      />
      <meta
        property="og:url"
        content={getMetaDataField(["openGraph", "url"])}
      />

      {/* Twitter */}
      <meta
        name="twitter:title"
        content={getMetaDataField(["twitter", "title"])}
      />
      <meta
        name="twitter:description"
        content={getMetaDataField(["twitter", "description"])}
      />
      <meta
        name="twitter:card"
        content={getMetaDataField(["twitter", "card"])}
      />
      <meta
        name="twitter:site"
        content={getMetaDataField(["twitter", "site"])}
      />
      <meta
        name="twitter:image"
        content={getMetaDataField(["twitter", "image"])}
      />
    </Head>
  );
};

export default PageMetadataHead;
