import { getFieldFromSources } from "@/utils/getFieldFromSources";
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
  schemaMarkup?: object | null;
};

export const PageMetadataHead = ({
  pageMetadata,
  content,
}: {
  pageMetadata?: PageMetadataProps | null;
  content: BuilderContent | null;
}) => {
  const contentPageMetadata = content?.data?.metadata ?? {};
  const getMetaField = (keys: string[]) => {
    return getFieldFromSources({
      sourcesByPriority: [pageMetadata, contentPageMetadata],
      keys,
    });
  };

  const schemaMarkup = getMetaField(["schemaMarkup"]);

  return (
    <Head>
      <title>{getMetaField(["title"])}</title>
      <meta name="description" content={getMetaField(["description"])} />
      <link rel="canonical" href={getMetaField(["canonicalUrl"])} />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={getMetaField(["openGraph", "title"])}
      />
      <meta
        property="og:description"
        content={getMetaField(["openGraph", "description"])}
      />
      <meta
        property="og:image"
        content={getMetaField(["openGraph", "image"])}
      />
      <meta property="og:url" content={getMetaField(["openGraph", "url"])} />

      {/* Twitter */}
      <meta name="twitter:title" content={getMetaField(["twitter", "title"])} />
      <meta
        name="twitter:description"
        content={getMetaField(["twitter", "description"])}
      />
      <meta name="twitter:card" content={getMetaField(["twitter", "card"])} />
      <meta name="twitter:site" content={getMetaField(["twitter", "site"])} />
      <meta name="twitter:image" content={getMetaField(["twitter", "image"])} />

      {/* Schema.org */}
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      )}
    </Head>
  );
};

export default PageMetadataHead;
