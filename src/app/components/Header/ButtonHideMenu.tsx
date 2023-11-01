'use client';
import { useMenuExpanded } from "@/app/hooks/useMenuExpanded";
import { ChevronLeft } from "lucide-react";

export function ButtonHideMenu() {
  const { handlerNotMenuExpanded } = useMenuExpanded();

  return (
    <button 
      className="w-10 h-10 bg-zinc-900 rounded-md flex items-center justify-center"
      onClick={handlerNotMenuExpanded}
    >
      <ChevronLeft className="text-white w-8" />
    </button>
  )
}
