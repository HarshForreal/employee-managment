"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/all-courses">Web Development</HoveredLink>
              <HoveredLink href="/all-courses">Block Chain</HoveredLink>
              <HoveredLink href="/all-courses">UI/UX Design</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/all-courses">DSA</HoveredLink>
            <HoveredLink href="/all-courses">Backend</HoveredLink>
            <HoveredLink href="/all-courses">Frontend</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
