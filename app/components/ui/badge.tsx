import * as React from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'mono inline-flex h-7 items-center rounded-md border border-[var(--line)] bg-[var(--panel)] px-2.5 text-xs uppercase text-[var(--muted)]',
        className,
      )}
      {...props}
    />
  )
}
