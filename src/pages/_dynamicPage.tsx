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

type DynamicPageProps = {
  pageModel?: string;
  page: BuilderContent | null;
};

export default function DynamicPage({
  pageModel = "page",
  page,
}: DynamicPageProps) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  const [content, setContent] = useState<BuilderContent | null>(page);
  const [updated, setUpdated] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function fetchContent() {
      const [urlPath, _hash] = router.asPath.split("#") || "/";

      try {
        setLoading(true);

        const fetchedContent = await builder
          .get(pageModel, { userAttributes: { urlPath } })
          .toPromise();

        if (fetchedContent) {
          setContent(fetchedContent);
          setUpdated(true);
          setNotFound(false);
        } else if (page) {
          setContent(page);
          setUpdated(false);
          setNotFound(false);
        } else {
          setContent(null);
          setUpdated(false);
          setNotFound(true);
        }
      } catch (e) {
        if (page) {
          setContent(page);
          setUpdated(false);
          setNotFound(false);
        } else {
          setContent(null);
          setUpdated(false);
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [router.asPath, page, pageModel]);

  return (
    <>
      <Head>
        <title>{content?.data?.title}</title>
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
        {notFound && !isPreviewing ? (
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
      {!loading && !updated && content?.lastUpdated && (
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
