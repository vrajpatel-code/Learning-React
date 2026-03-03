
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import TBtn from './Components/TBtn'
import Card from './Components/Card'

function App() {
  const[themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const htmlElement = document.documentElement
    if (themeMode === "dark") {
      htmlElement.classList.add("dark")
    } else {
      htmlElement.classList.remove("dark")
    }
  }, [themeMode])

  const themeValue = {
    themeMode,
    lightTheme,
    darkTheme
  }

  return (
  <ThemeProvider value={themeValue}>
  <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-50">
    <div className="mx-auto w-full max-w-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Profile card</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Use the switch to change theme</p>
        </div>
        <TBtn />
      </div>

      <Card />
    </div>
  </div>
  </ThemeProvider>
  )
}

export default App
