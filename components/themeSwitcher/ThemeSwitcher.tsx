// app/components/ThemeSwitcher.tsx
"use client";

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { Switch } from '@heroui/react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

	const toggleTheme = () => {
		setTheme(theme === 'light' ? "dark" : "light")
	}

  return (
    <Switch
      onChange={toggleTheme}
      defaultSelected
      color="success"
      endContent={<MoonIcon />}
      size="sm"
      startContent={<SunIcon />}
    />
  );
}
