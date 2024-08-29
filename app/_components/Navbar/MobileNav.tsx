"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdOpen } from "react-icons/io";
import ToggleButton from "./ToggleButton";
import { navLinks } from "@/app/_constants/navlinks";
import { cn } from "@/lib/utils";
import { Motion } from "@/components/Animation/Motion";
import { fadeInUpSlower, stagger } from "@/app/_constants/animations";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={cn("flex flex-col", isOpen ? "min-h-screen" : "")}>
      <div className="flex justify-end">
        <ToggleButton toggle={toggle} isOpen={isOpen} />
      </div>
      {isOpen && <NavigationItems toggle={toggle} />}
    </div>
  );
}

function NavigationItems({ toggle }: { toggle: () => void }) {
  return (
    <div className="flex-1 flex justify-center translate-y-1/4">
      <Motion
        as="ul"
        className="flex flex-col gap-8"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        {navLinks.map(({ href, label }) => {
          return (
            <Motion as="li" key={href} variants={fadeInUpSlower}>
              <a
                href={`#${href}`}
                onClick={toggle}
                className="text-gray-200 text-lg tracking-wider hover:no-underline hover:border-b-2 border-cyan-200"
              >
                {label}
              </a>
            </Motion>
          );
        })}
      </Motion>
    </div>
  );
}
