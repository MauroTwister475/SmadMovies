'use client'
import { useMenuExpanded } from "@/app/hooks/useMenuExpanded"
import { NAVBAR_LINKS } from "@/app/constants/Links";
import { NextLink } from "../NextLink";
import { LogOut, Film } from "lucide-react";
import Link from "next/link";

interface SideBarProps {

}

export function SideBar({ }: SideBarProps) {
  const { isExpanded } = useMenuExpanded();

  return (
    <div className={`${ isExpanded ? 'w-60':'w-24'} bg-zinc_sidebar h-screen navbar flex flex-col justify-between items-center py-4` }>
      <div className="text-white flex gap-1">
        <Film className="w-10" />
        { isExpanded && <strong>SmadMovie</strong>}
      </div>
      <ul className="mt-[-14rem] flex flex-col gap-4 overflow-hidden">
        {NAVBAR_LINKS.map(link => (
          <NextLink 
            href={link.href} 
            children={link.text} 
            icon={link.icon}
          />
        ))}
      </ul>
      <Link href="/" className="flex gap-2 text-white">
        <LogOut className=""/> 
        { isExpanded && <span>Logout</span>}
      </Link>
    </div>
  )
}
