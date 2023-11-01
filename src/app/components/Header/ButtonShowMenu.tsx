'use client';
import { useMenuExpanded } from "@/app/hooks/useMenuExpanded";
import { ChevronRight } from "lucide-react";

export function ButtonShowMenu() {
  const { handlerIsMenuExpanded } = useMenuExpanded();

  return (
    <button 
      className="w-10 h-10 bg-zinc-900 rounded-md flex items-center justify-center"
      onClick={handlerIsMenuExpanded}
    >
      <ChevronRight className="text-white w-8" />
    </button>
  )
}
