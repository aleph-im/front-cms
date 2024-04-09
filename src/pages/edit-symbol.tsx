import { BuilderComponent, builder } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import React from "react";
import "../builder-registry";
3;
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getStaticProps = async (context) => {
  // Dynamically fetch latest content from Builder.io API
  const content = await builder.get("symbol", { url: context.resolvedUrl });
  console;
  return { props: { content } };
};

// View full integration and docs: https://builder.io/c/docs/developers
export default function Page(props: { content: BuilderContent | undefined }) {
  return <BuilderComponent content={props.content} model="symbol" />;
}
