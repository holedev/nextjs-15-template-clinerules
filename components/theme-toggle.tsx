"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex gap-2">
        <button className="rounded-md p-2">
          <Sun className="h-5 w-5" />
        </button>
        <button className="rounded-md p-2">
          <Moon className="h-5 w-5" />
        </button>
        <button className="rounded-md p-2">
          <span className="text-sm font-medium">System</span>
        </button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 ${
          theme === "light" ? "bg-gray-200 dark:bg-gray-800" : ""
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 ${
          theme === "dark" ? "bg-gray-200 dark:bg-gray-800" : ""
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 ${
          theme === "system" ? "bg-gray-200 dark:bg-gray-800" : ""
        }`}
        aria-label="System theme"
      >
        <span className="text-sm font-medium">System</span>
      </button>
    </div>
  )
}