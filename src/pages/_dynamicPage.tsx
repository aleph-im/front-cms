import React, { useEffect, useState } from "react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { BuilderContent } from "@builder.io/sdk";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import "../builder-registry";

export default function DynamicPage({ page }: { page: BuilderContent | null }) {
  // const router = useRouter();
  const isPreviewing = useIsPreviewing();

  const [content, setContent] = useState<BuilderContent | null>(page);
  const [notFound, setNotFound] = useState(!page);

  useEffect(() => {
    async function fetch() {
      const urlPath = window.location.pathname || '/'
      console.log('PAGE', urlPath)

      try {
        console.log('LOAD', urlPath)

        const content = await builder
          .get("page", { userAttributes: { urlPath }, })
          .toPromise();

        if (content) {
          setContent(content);
        }

        setNotFound(!content);

      } catch (e) {
        console.log('something went wrong while fetching Builder Content: ', e);
      }
    }

    fetch()
  }, []);

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
      <BuilderComponent model="page" content={content || undefined} apiKey="" />
    </>
  );
}