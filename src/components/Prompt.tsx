import type { ReactNode } from 'react'

export default function Prompt({
  children,
  symbol = '>',
}: {
  children?: ReactNode
  symbol?: string
}) {
  return (
    <span>
      <span className="text-accent">{symbol}</span> <span>{children}</span>
    </span>
  )
}
