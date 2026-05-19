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

const SITE_URL = "https://aleph.cloud";

// Baseline schema rendered on every page. Per-page schemaMarkup (FAQPage,
// HowTo, Article, Product, etc.) is layered on top from Builder.io page
// metadata.
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aleph Cloud",
  alternateName: ["Aleph.im", "TwentySix Cloud"],
  url: SITE_URL,
  // TODO: add `logo` (PNG/JPG, ≥112x112, square) once a brand-approved logo
  // asset is committed under public/. Until then, omitting is safer than
  // pointing at a non-square OG banner that fails Rich Results validation.
  description:
    "Decentralized cloud computing platform for AI, Web3, and enterprise workloads. VPS, GPU compute, confidential computing with Trusted Execution Environments, decentralized storage, blockchain indexing, and serverless functions.",
  sameAs: [
    "https://twitter.com/aleph_im",
    "https://github.com/aleph-im",
    "https://t.me/alephim",
    "https://discord.com/invite/alephim",
    "https://medium.com/aleph-im",
    "https://www.linkedin.com/company/aleph-im",
    "https://community.aleph.cloud",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aleph Cloud",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "Aleph Cloud" },
  inLanguage: "en",
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
      <SchemaScript data={ORGANIZATION_SCHEMA} />
      <SchemaScript data={WEBSITE_SCHEMA} />
      {schemaMarkup && <SchemaScript data={schemaMarkup} />}

      <meta name="msvalidate.01" content="A1E14ACD23C3CE1216D9D8A3C6757527" />
    </Head>
  );
};

// JSON-LD script element. Content is always a hardcoded object literal or a
// CMS-supplied object that is JSON-stringified, so dangerouslySetInnerHTML is
// safe here — no user input is ever interpolated into the script body.
const SchemaScript = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default PageMetadataHead;
