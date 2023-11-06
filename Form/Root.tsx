import { ReactNode } from "react"


interface RootProps {
  children: ReactNode,
}

export function Root({ children }: RootProps) {
  return (
    <form className="w-full flex flex-col items-center justify-center gap-3">
      {children}
    </form>
  )
}
