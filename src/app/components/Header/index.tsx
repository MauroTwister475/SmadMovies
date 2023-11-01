"use client";
import { Avatar } from "./Avatar";
import { ButtonHideMenu } from "./ButtonHideMenu";
import { ButtonShowMenu } from "./ButtonShowMenu";
import { useMenuExpanded } from "@/app/hooks/useMenuExpanded";

export function Header() {
  const { isExpanded } = useMenuExpanded()
  
  return (
    <header className="w-full h-16 bg-zinc_header flex items-center justify-between px-6">
      { isExpanded ? <ButtonHideMenu />:<ButtonShowMenu />}
      <Avatar /> 
    </header>
  )
}
