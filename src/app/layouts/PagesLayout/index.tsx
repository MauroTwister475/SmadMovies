import { Header } from "@/app/components/Header";
import { PageWrapper } from "@/app/components/PageWrapper";
import { MarginWidthWrapper } from "@/app/components/MarginWitdh";

interface PagesLayoutDefaultProps {
  children: React.ReactNode;
}

export function PagesLayoutDefault({children }: PagesLayoutDefaultProps) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <main className="flex-1 h-full">
        <MarginWidthWrapper>
          <Header />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
