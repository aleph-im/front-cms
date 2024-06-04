import React, { useEffect, useState } from "react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { BuilderContent } from "@builder.io/sdk";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useRouter } from "next/router";
import "../builder-registry";
import StickyComponent from "@/components/StickyComponent";
import { Loading } from "./_loading";
import MainContentContainer from "@/components/MainContentContainer";
import { useFetchBuilderContent } from "@/hooks/useFetchBuilderContent";

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

export type DynamicPageProps = {
  page: BuilderContent | null;
  fetchContentFrom?: string;
  pageMetadata?: PageMetadataProps | null;
};

export default function DynamicPage({
  page,
  fetchContentFrom,
  pageMetadata,
}: DynamicPageProps) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  const { pageModel, content, isUpToDate, isNotFound, loading } =
    useFetchBuilderContent({
      preloadedPage: page,
      fetchContentFrom,
    });

  useEffect(() => {
    async function scrollToElement() {
      const [_urlPath, hash] = router.asPath.split("#") || "/";
      if (!hash) return;

      const element = document.getElementById(`scroll-${hash}`);
      if (!element) return;

      const bounding = element.getBoundingClientRect();
      const top = bounding.top + window.scrollY;
      const headerOffset =
        document.getElementsByTagName("header")[0]?.offsetHeight || 0;

      window.scrollTo({
        top: top - headerOffset,
        behavior: "smooth",
      });
    }

    scrollToElement();
  }, [router.asPath]);

  return (
    <>
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
          href={
            pageMetadata?.canonicalUrl || content?.data?.metadata?.canonicalUrl
          }
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
            pageMetadata?.openGraph?.url ||
            content?.data?.metadata?.openGraph?.url
          }
        />
        <meta
          name="twitter:card"
          content={
            pageMetadata?.twitter?.card ||
            content?.data?.metadata?.twitter?.card
          }
        />
        <meta
          name="twitter:site"
          content={
            pageMetadata?.twitter?.site ||
            content?.data?.metadata?.twitter?.site
          }
        />
        <meta
          name="twitter:title"
          content={
            pageMetadata?.twitter?.title ||
            content?.data?.metadata?.twitter?.title
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
            pageMetadata?.twitter?.image ||
            content?.data?.metadata?.twitter?.image
          }
        />
      </Head>
      {content?.data?.header && (
        <StickyComponent placed_at="top">
          <BuilderComponent
            model="symbol"
            content={content.data.header.value}
          />
        </StickyComponent>
      )}
      <MainContentContainer>
        <Loading show={loading} />
        {isNotFound && !isPreviewing ? (
          <DefaultErrorPage statusCode={404} />
        ) : (
          <BuilderComponent
            model={pageModel}
            content={content || undefined}
            apiKey=""
          />
        )}
      </MainContentContainer>
      {content?.data?.footer && (
        <div tw="overflow-hidden">
          <BuilderComponent
            model="symbol"
            content={content.data.footer.value}
          />
        </div>
      )}
      {!loading && !isUpToDate && content?.lastUpdated && (
        <div
          tw="flex flex-col justify-center items-center opacity-80"
          className="bg-main2"
        >
          <p className="text-base2">Content may not be up-to-date</p>
          <p className="text-base2">
            You&apos;re seeing the version published at{" "}
            {new Date(content.lastUpdated as number).toISOString()}
          </p>
        </div>
      )}
    </>
  );
}
