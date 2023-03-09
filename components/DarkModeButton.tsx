"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React from "react";
import { useState, useEffect } from "react";
const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="h-4 w-4  cursor-pointer text-yellow-400 hover:text-yellow-300 hover:scale-110 duration-300 transition-transform ease-in-out "
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="h-4 w-4   cursor-pointer text-slate-500 hover:text-slate-300 hover:scale-110 duration-300 transition-transform ease-in-out  "
        />
      )}
    </div>
  );
};
export default DarkModeButton;
