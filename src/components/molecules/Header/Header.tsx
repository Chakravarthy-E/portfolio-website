"use client";
import ScrollLink from "@/components/atoms/shared/scroll_link";
import { useGlobalContext } from "@/contexts/globalContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClassess = [];
    if (isOpen) {
      menuClassess = [
        "flex",
        "absolute",
        "top-[60px]",
        "w-full",
        "p-4",
        "gap-10",
        "flex-col",
      ];
    } else {
      menuClassess.push("hidden", "md:flex", "space-x-10");
    }
    return menuClassess.join(" ");
  }

  const { profile } = useGlobalContext();
  return (
    <nav className="bg-neutral-950 fixed w-full z-50 border-b border-gray-700 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <ScrollLink href="/home">{profile?.user?.username}</ScrollLink>
        </div>
        <div className={cn(getMenuClasses())}>
          <ScrollLink href="/about">About</ScrollLink>
          <ScrollLink href="/services">Services</ScrollLink>
          <ScrollLink href="/skills">Skills</ScrollLink>
          <ScrollLink href="/projects">Projects</ScrollLink>
          <ScrollLink href="/timeline">Timeline</ScrollLink>
          <ScrollLink href="/testimonials">Testimonials</ScrollLink>
          <ScrollLink href="/contact">Contact</ScrollLink>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <Menu /> : <X />}
          </button>
        </div>
      </div>
    </nav>
  );
}
