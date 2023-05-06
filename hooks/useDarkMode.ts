import { useState, useEffect } from "react";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      setIsDarkMode(e.matches)
    })
  }, [])

  useEffect(() => {
    const rootElement = document.documentElement;
    isDarkMode ? rootElement.classList.add('dark') : rootElement.classList.remove('dark')
  }, [isDarkMode])

  const toggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return [isDarkMode, toggle] as const;
}

export default useDarkMode;