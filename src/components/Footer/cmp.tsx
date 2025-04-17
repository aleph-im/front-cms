import { Footer as BaseFooter, LinkComponent } from "@aleph-front/core";
import Link from "next/link";
import { FooterProps } from "./types";

export const Footer = ({
  small = false,
  buttons,
  media,
  mainLinks,
  links,
  logo,
}: FooterProps) => {
  return (
    <BaseFooter
      Link={Link as LinkComponent}
      small={small}
      buttons={buttons}
      media={media}
      mainLinks={mainLinks}
      links={links}

      logoByAleph={logo?.byAleph}
      logoHref={logo?.href}
      logoImg={logo?.img}
      logoText={logo?.text}
    />
  );
};

export default Footer;
