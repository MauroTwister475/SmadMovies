import { useMenuExpanded } from "@/app/hooks/useMenuExpanded";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { ReactNode } from "react";

interface NextLinkProps {
  href: string,
  children: string | ReactNode,
  icon?: ReactNode,
}

export function NextLink({ href, children, icon }: NextLinkProps) {
  const path = usePathname();
  const { isExpanded } = useMenuExpanded();
  const activeLink = path === href;

  return (
    <li
      data-activeLink={activeLink} 
      className={`text-white data-[activeLink=true]:text-emerald-400 data-[activeLink=true]:bg-emerald-400/10 py-4 ${ isExpanded ? "px-8":"px-4"} rounded-md`}>
      <Link href={href} className="flex gap-2">
        {icon} { isExpanded && <span>{children}</span>}
      </Link>
    </li>
  )
}
