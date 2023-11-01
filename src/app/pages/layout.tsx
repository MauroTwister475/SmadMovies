import { ReactNode } from "react";
import { PagesLayoutDefault } from "../layouts/PagesLayout";
import { SideBar } from "../components/Sidebar";

interface PagesLayoutProps {
  children: ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  return (
    <div className="flex">
      <SideBar />
      <PagesLayoutDefault>{children}</PagesLayoutDefault>
    </div>
  );
}
