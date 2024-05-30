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

export type DynamicPageProps = {
  pageModel?: string;
  page: BuilderContent | null;
  fetchContentFrom?: string;
};

export default function DynamicPage({
  pageModel = "page",
  page,
  fetchContentFrom,
}: DynamicPageProps) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  const { content, isUpToDate, isNotFound, loading } = useFetchBuilderContent({
    pageModel,
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
        <title>{content?.data?.metadata?.title}</title>
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
