
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import TBtn from './Components/TBtn'
import Card from './Components/Card'

function App() {
  const[themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    console.log('lightTheme called')
    setThemeMode("light")
  }

  const darkTheme = () => {
    console.log('darkTheme called')
    setThemeMode("dark")
  }

  useEffect(() => {
    console.log('Theme changed to:', themeMode)
    const htmlElement = document.documentElement
    if (themeMode === "dark") {
      htmlElement.classList.add("dark")
      console.log('Added dark class to html')
    } else {
      htmlElement.classList.remove("dark")
      console.log('Removed dark class from html')
    }
  }, [themeMode])

  const themeValue = {
    themeMode,
    lightTheme,
    darkTheme
  }

  return (
  <ThemeProvider value={themeValue}>
  <div className="flex flex-wrap min-h-screen items-center bg-gray-50 dark:bg-gray-900">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <TBtn />

                  </div>

                  <div className="w-full max-w-sm mx-auto">             
                        <Card />
                  </div>
              </div>
  </div>
  </ThemeProvider>
  )
}

export default App
