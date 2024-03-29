"use client";
import ScrollLink from "@/components/atoms/shared/scroll_link";
import { useGlobalContext } from "@/contexts/globalContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
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
        "p-10",
        "gap-10",
        "flex-col",
        "h-screen",
      ];
    } else {
      menuClassess.push("hidden", "md:flex", "space-x-10");
    }
    return menuClassess.join(" ");
  }

  const { profile } = useGlobalContext();

  function handleMenuItemClick() {
    setIsOpen(false);
  }

  return (
    <nav className="bg-neutral-950 h-16 sticky top-0 w-full z-50 border-b border-gray-700 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold first-letter:uppercase text-blue-500">
          <ScrollLink href="/home">{profile?.user?.username}</ScrollLink>
        </div>
        <div className={cn(getMenuClasses())}>
          <ScrollLink href="/about" onClick={handleMenuItemClick}>
            About
          </ScrollLink>
          <ScrollLink href="/services" onClick={handleMenuItemClick}>
            Services
          </ScrollLink>
          <ScrollLink href="/skills" onClick={handleMenuItemClick}>
            Skills
          </ScrollLink>
          <ScrollLink href="/projects" onClick={handleMenuItemClick}>
            Projects
          </ScrollLink>
          <ScrollLink href="/timeline" onClick={handleMenuItemClick}>
            Timeline
          </ScrollLink>
          <ScrollLink href="/testimonials" onClick={handleMenuItemClick}>
            Testimonials
          </ScrollLink>
          <ScrollLink href="/contact" onClick={handleMenuItemClick}>
            Contact
          </ScrollLink>
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
