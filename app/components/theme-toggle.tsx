'use client'

import { Moon, Sun } from 'lucide-react'
import { useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'adrianmross-theme'

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// The inline script in layout.tsx sets the `dark` class before paint, so the DOM is the source of truth.
function getTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function applyTheme(theme: Theme, animate = false) {
  if (animate) {
    document.documentElement.classList.add('theme-transition')
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 360)
  }

  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'light')

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    window.localStorage.setItem(STORAGE_KEY, nextTheme)
    applyTheme(nextTheme, true)
    listeners.forEach((listener) => listener())
  }

  return (
    <button
      aria-label="Toggle color theme"
      className="theme-toggle"
      data-theme={theme}
      onClick={toggleTheme}
      title="Toggle color theme"
      type="button"
    >
      <span className="theme-toggle__coin" aria-hidden="true">
        <Sun className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true" />
        <Moon className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true" />
      </span>
    </button>
  )
}
