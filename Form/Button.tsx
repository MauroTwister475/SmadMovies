import { ComponentProps, ReactNode } from "react"

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode,
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="w-full bg-emerald-700 rounded-md py-2 hover:bg-emerald-800 text-white font-semibold">
      {children}
    </button>
  )
}
