'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type TabsContextValue = {
  value: string
  setValue: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

export function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {
  const [value, setValue] = React.useState(defaultValue)
  return <TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider>
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('inline-flex rounded-lg border border-[var(--line)] bg-[var(--panel)] p-1', className)} {...props} />
}

export function TabsTrigger({
  value,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const context = React.useContext(TabsContext)
  const active = context?.value === value
  return (
    <button
      type="button"
      className={cn(
        'mono rounded-md px-3 py-2 text-xs uppercase transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]',
        active ? 'bg-[var(--foreground)] text-[var(--background)]' : 'text-[var(--muted)] hover:text-[var(--foreground)]',
        className,
      )}
      onClick={() => context?.setValue(value)}
      {...props}
    />
  )
}

export function TabsContent({
  value,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const context = React.useContext(TabsContext)
  if (context?.value !== value) return null
  return <div className={cn('mt-5', className)} {...props} />
}
