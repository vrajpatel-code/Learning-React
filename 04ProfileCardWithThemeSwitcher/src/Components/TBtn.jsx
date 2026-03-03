import React from 'react';
import useTheme from '../context/Theme';

export default function TBtn() {
    
    const {themeMode = "light", lightTheme, darkTheme} = useTheme()
    
    const handleChange = (e) => {
        const isChecked = e.target.checked
        if(isChecked) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={themeMode === "dark"}
                onChange={handleChange}
                className="sr-only peer"
            />

            <div className="h-6 w-11 rounded-full bg-slate-200 ring-1 ring-inset ring-slate-900/10 peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-slate-700 dark:ring-white/10 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-200">Theme</span>
        </label>
    );
}

