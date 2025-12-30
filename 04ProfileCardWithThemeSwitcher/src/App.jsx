
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import TBtn from './Components/TBtn'
import Card from './Components/Card'

function App() {
  const select = document.querySelector('html').classList
  const[themeMode, setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {
  if (themeMode === "dark") {
    select.add("dark")
  } else {
    select.remove("dark")
  }
}, [themeMode])

  return (
  <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
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
