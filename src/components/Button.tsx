import type { DetailedHTMLProps, HTMLAttributes } from "react";

const Button = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return <button className={` ${className}`} {...props} />;
};

export default Button;
