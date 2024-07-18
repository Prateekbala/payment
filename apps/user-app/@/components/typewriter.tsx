"use client";
import { Button } from "@nextui-org/react";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Pay Fast",
    },
    {
      text: "and",
    },
    {
      text: "Securely",
    },
    {
      text: "with",
    },
    {
      text: "Quick Pay",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex  flex-col items-center justify-center h-[40rem] ">
      
      <TypewriterEffect words={words} />
    </div>
  );
}
