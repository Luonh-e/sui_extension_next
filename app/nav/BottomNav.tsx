"use client";

import { useState } from "react";
import { Home, Smile, Menu, HandCoins } from "lucide-react";
import { useRouter } from "next/navigation";

interface BottomNavProps {
  currentTab: string;
}

export default function BottomNav({ currentTab }: BottomNavProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(currentTab);

  const handleNavigate = (tab: string, path: string) => {
    setActiveTab(tab);
    router.push(path);
  };

  return (
    <div className="flex justify-around bg-gray-900 p-4 fixed bottom-0 w-full">
      <button
        onClick={() => handleNavigate("home", "/")}
        className={activeTab === "home" ? "text-blue-400" : "text-gray-400"}
      >
        <Home size={20} />
      </button>
      <button
        onClick={() => handleNavigate("holding", "/holding")}
        className={activeTab === "holding" ? "text-blue-400" : "text-gray-400"}
      >
        <HandCoins size={20} />
      </button>
      <button
        onClick={() => handleNavigate("zone", "/zone")}
        className={activeTab === "zone" ? "text-blue-400" : "text-gray-400"}
      >
        <Smile size={20} />
      </button>
      <button
        onClick={() => handleNavigate("menu", "/menu")}
        className={activeTab === "menu" ? "text-blue-400" : "text-gray-400"}
      >
        <Menu size={20} />
      </button>
    </div>
  );
}
