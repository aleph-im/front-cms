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
      const urlPath = window.location.pathname || "/";
      console.log("PAGE", urlPath);

      try {
        console.log("LOAD", urlPath);

        const content = await builder
          .get("page", { userAttributes: { urlPath } })
          .toPromise();

        if (content) {
          setContent(content);
        }

        setNotFound(!content);
      } catch (e) {
        console.log("something went wrong while fetching Builder Content: ", e);
      }
    }

    fetch();
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Source+Code+Pro:wght@400;700&family=Rubik:ital,wght@0,500;1,600;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,700;1,400;1,700&family=Source+Code+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://use.typekit.net/acb7qvn.css"
          rel="stylesheet"
        ></link>
      </Head>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content || undefined} apiKey="" />
    </>
  );
}
