import type { LinkProps } from "next/link";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode, RefAttributes } from "react";

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

type Link_Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps &
  RefAttributes<HTMLAnchorElement> & {
    children?: ReactNode;
    centered?: boolean;
  };

const Link_ = ({ className, ...rest }: Link_Props) => (
  <Link className={`text-xs ${className}`} {...rest} />
);

LinksGroup.Link = Link_;

export default LinksGroup;
