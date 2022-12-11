import type { ReactNode } from "react";
import React from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";

type LinksGroupProps = {
  label: string;
  children: ReactNode;
};

const LinksGroup = ({ label, children }: LinksGroupProps) => (
  <nav className="flex flex-col">
    <span className="border-b border-black-alpha-10 pb-1 font-bold">{label}</span>
    <div className="mt-2 flex flex-col justify-between space-y-2">{children}</div>
  </nav>
);

type Link_Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
    centered?: boolean;
  };

const Link_ = ({ className, ...rest }: Link_Props) => (
  <Link className={`text-xs ${className}`} {...rest} />
);

LinksGroup.Link = Link_;

export default LinksGroup;
