import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex flex-col pt-8 px-6 space-y-2 bg-zinc-body flex-grow pb-4">
      {children}
    </div>
  );
}
