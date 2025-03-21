"use client";

import { ThemeSwitcher } from "@/components";

const Settings = () => {
  return (
    <div className=" py-6 px-4 pb-[100px] md:pb-6">
      <h1>Settings</h1>
      <div>
        Change theme: <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Settings;
