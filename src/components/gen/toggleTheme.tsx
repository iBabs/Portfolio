"use client"
import { useTheme } from "@/hooks/useTheme";
import { BsSun, BsMoonStars, BsGear } from 'react-icons/bs';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                 rounded-lg py-2 pl-10 pr-8 cursor-pointer focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:border-transparent text-xs"
      >
        <option value="light" className="flex items-center gap-2">
          Light
        </option>
        <option value="dark" className="flex items-center gap-2">
          Dark
        </option>
        <option value="system" className="flex items-center gap-2">
          System
        </option>
      </select>
      
      {/* Icon based on selected theme */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {theme === 'light' && <BsSun className="text-yellow-500" />}
        {theme === 'dark' && <BsMoonStars className="text-blue-400" />}
        {theme === 'system' && <BsGear className="text-gray-500" />}
      </span>
      
      {/* Dropdown arrow */}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </span>
    </div>
  );
}
