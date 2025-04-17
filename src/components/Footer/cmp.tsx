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
  const { byAleph = false, href, img, text } = logo || {};

  return (
    <BaseFooter
      Link={Link as LinkComponent}
      small={small}
      buttons={buttons}
      media={media}
      mainLinks={mainLinks}
      links={links}
      logoByAleph={byAleph}
      logoHref={href}
      logoImg={img}
      logoText={text}
    />
  );
};

export default Footer;
