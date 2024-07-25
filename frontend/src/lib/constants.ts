export type LinkType = {
  name: String;
  ref: string;
};

export type LinksType = Array<LinkType>;

export const INITIAL_LINKS: LinksType = [
  {
    name: "Explore",
    ref: "#",
  },
];

export const FOOTER_LINKS: LinksType = [
  {
    name: "About us",
    ref: "#",
  },
  {
    name: "Contact us",
    ref: "#",
  },
  {
    name: "Privacy Policy",
    ref: "#",
  },
  {
    name: "Terms of Service",
    ref: "#",
  },
];
