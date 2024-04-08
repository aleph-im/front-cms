import {
  Footer as BaseFooter,
  FooterProps,
  LinkComponent,
} from "@aleph-front/core";
import Link from "next/link";

export const Footer = ({
  small,
  buttons,
  media,
  mainLinks,
  links,
}: FooterProps) => {
  return (
    <BaseFooter
      {...{
        Link: Link as LinkComponent,
        small: small,
        buttons: buttons,
        media: media,
        mainLinks: mainLinks,
        links: links,
      }}
    />
  );
};

export default Footer;
