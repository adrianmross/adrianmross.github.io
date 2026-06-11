'use client'

import type { CSSProperties, PointerEvent } from 'react'
import { cn } from '@/lib/utils'

type SpotlightCardProps = {
  children: React.ReactNode
  className?: string
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      className={cn('spotlight-card pressable rounded-lg border border-[var(--line)] p-5', className)}
      style={{ '--x': '50%', '--y': '50%' } as CSSProperties}
    >
      {children}
    </div>
  )
}
