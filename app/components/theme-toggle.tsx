'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'adrianmross-theme'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY)

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const preferredTheme = getPreferredTheme()
    setTheme(preferredTheme)
    applyTheme(preferredTheme)
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(nextTheme)
    window.localStorage.setItem(STORAGE_KEY, nextTheme)
    applyTheme(nextTheme, true)
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
