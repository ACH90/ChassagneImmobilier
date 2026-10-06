import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return <div className={`reveal delay-${delay} ${className}`}>{children}</div>;
}
