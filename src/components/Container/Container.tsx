import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Basic container for page elements like header or product card
 */
const Container = ({ children, className, ...rest }: ContainerProps) => (
  <div className={`m-2.5 rounded-[10px] bg-gray-900 p-2.5 ${className}`} {...rest}>
    {children}
  </div>
);

export default Container;
