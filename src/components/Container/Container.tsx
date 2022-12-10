import type { DetailedHTMLProps, ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Basic container for page elements like header or product card
 */
const Container = ({ children, className, as, ...rest }: ContainerProps) => {
  const Component = as || "div";
  return (
    <Component className={`m-2.5 rounded-[10px] bg-gray-900 p-2.5 ${className}`} {...rest}>
      {children}
    </Component>
  );
};

export default Container;
