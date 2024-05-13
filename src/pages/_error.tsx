import React from "react";
import DynamicPage from "./_dynamicPage";

export default function Page(props: any) {
  // TODO:
  // Check if URL contains /blog
  // if true -> render DynamicPage with PAGE_MODEL: blog-article
  // else -> render DynamicPage with PAGE_MODEL: page

  return <DynamicPage {...props} />;
}
