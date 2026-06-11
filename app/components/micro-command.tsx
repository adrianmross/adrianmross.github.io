'use client'

import { ArrowUpRight, Command } from 'lucide-react'
import { useState } from 'react'
import { signals } from '@/lib/content'

export function MicroCommand() {
  const [active, setActive] = useState(0)

  return (
    <div className="rounded-lg border border-[var(--foreground)] bg-[var(--foreground)] p-2 text-[var(--background)]">
      <div className="flex items-center gap-2 border-b border-white/15 px-2 py-2">
        <Command size={15} />
        <span className="mono text-xs uppercase text-white/65">Interaction queue</span>
      </div>
      <div className="mt-2 grid gap-1">
        {signals.map((signal, index) => (
          <button
            key={signal}
            type="button"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            className="group flex min-h-12 items-center justify-between rounded-md px-3 text-left text-sm transition hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
          >
            <span>{signal}</span>
            <ArrowUpRight
              size={15}
              className={active === index ? 'translate-x-0 opacity-100 transition' : '-translate-x-1 opacity-0 transition'}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
