import React from "react";
import DynamicPage from "./_dynamicPage";

// Define the Page component
export default function Page(props: any) {
  console.log('SPA PAGE')
  return <DynamicPage {...props}/>
 }