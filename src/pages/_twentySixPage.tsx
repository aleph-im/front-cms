import React, { useEffect, useState } from "react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { BuilderContent } from "@builder.io/sdk";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import "../builder-registry";
import { useRouter } from "next/router";

export default function DynamicPage({ page }: { page: BuilderContent | null }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  const [content, setContent] = useState<BuilderContent | null>(page);
  const [notFound, setNotFound] = useState(!page);

  useEffect(() => {
    async function fetchContent() {
      const urlPath = router.asPath || "/";
      console.log("PAGE", urlPath);

      try {
        console.log("LOAD", urlPath);

        const fetchedContent = await builder
          .get("page", { userAttributes: { urlPath } })
          .toPromise();

        if (fetchedContent) {
          setContent(fetchedContent);
        } else {
          setNotFound(true);
        }
      } catch (e) {
        console.log("something went wrong while fetching Builder Content: ", e);
        setNotFound(true);
      }
    }

    fetchContent();
  }, [router.asPath]); // Depend on router.asPath to refetch content on route changes

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (notFound && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{content?.data?.title}</title>
      </Head>
      {/* Render the Builder page */}
      <BuilderComponent
        model="twentysix-page"
        content={content || undefined}
        apiKey=""
      />
    </>
  );
}
