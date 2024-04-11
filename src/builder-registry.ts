import { builder } from "@builder.io/react";

import "./components/hiddenFromEditor.builder";
import "./components/Box/cmp.builder";
import "./components/Container/cmp.builder";
import "./components/Section/cmp.builder";
import "./components/Column/cmp.builder";
import "./components/Row/cmp.builder";
import "./components/Button/cmp.builder";
import "./components/Text/cmp.builder";
import "./components/H1/cmp.builder";
import "./components/H2/cmp.builder";
import "./components/BulletList/cmp.builder";
import "./components/Header/cmp.builder";
import "./components/Footer/cmp.builder";
import "./components/SignMeUpForm/cmp.builder";
import "./components/Breadcrumb/cmp.builder";
import "./components/Image/cmp.builder";
import "./components/Columns/cmp.builder";
import "./components/CardWithSideImage/cmp.builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
