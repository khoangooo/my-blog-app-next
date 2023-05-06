import { PropsWithChildren, ReactNode } from "react";

type Props = {
  onClick?: () => void,
  children?: ReactNode,
  props?: PropsWithChildren,
}

function Button({ onClick = () => { }, children, ...props }: Props) {
  return (
    <button
      type="button" 
      className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;