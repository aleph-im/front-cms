import React, { useEffect, useState } from "react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { BuilderContent } from "@builder.io/sdk";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useRouter } from "next/router";
import "../builder-registry";
import StickyComponent from "@/components/StickyComponent";
import { Loading } from "./_loading";
import { themes } from "@aleph-front/core";

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

  const getHeaderOffset = () => {
    const header = document.getElementsByTagName("header")[0];
    return header ? header.offsetHeight : 0;
  };

  useEffect(() => {
    async function scrollToElement() {
      const [_urlPath, hash] = router.asPath.split("#") || "/";

      if (hash) {
        const element = document.getElementsByClassName(`scrollTo-${hash}`)[0];
        themes.aleph;

        if (element) {
          const bounding = element.getBoundingClientRect();
          const top = bounding.top + window.scrollY;

          window.scrollTo({
            top: top - getHeaderOffset(),
            behavior: "smooth",
          });
        }
      }
    }

    scrollToElement();
  }, [router.asPath]);

  useEffect(() => {
    async function fetchContent() {
      const [urlPath, _hash] = router.asPath.split("#") || "/";

      try {
        setLoading(true);

        const fetchedContent = await builder
          .get("page", { userAttributes: { urlPath } })
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
  }, [router.asPath, page]);

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
      <main tw="min-h-[100vh]">
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
      </main>
      {content?.data?.footer && (
        <BuilderComponent model="symbol" content={content.data.footer.value} />
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
