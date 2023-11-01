import { ReactNode } from 'react';

interface MarginWitdhWrapperProps {
  children: ReactNode;
}

export function MarginWidthWrapper({children}:MarginWitdhWrapperProps) {
  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      {children}
    </div>
  );
}