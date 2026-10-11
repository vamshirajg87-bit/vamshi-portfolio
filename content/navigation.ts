import { hasContact } from "./site";

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  ...(hasContact ? [{ label: "Contact", href: "/#contact" }] : []),
];
