"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-[2px] w-full bg-transparent no-print">
      <div
        className="h-full bg-[#2563eb] transition-[width] duration-150 ease-out dark:bg-[#60a5fa]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
