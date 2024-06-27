import { ReactNode } from "react";

type Props = { children: ReactNode };

export function Main({ children }: Props) {
  return <div className="h-full w-full bg-gray-100 p-5">{children}</div>;
}
