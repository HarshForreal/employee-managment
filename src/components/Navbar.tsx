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
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/service-webdevelopment">
                Web Development
              </HoveredLink>
              <HoveredLink href="/all-blockchain">Block Chain</HoveredLink>
              <HoveredLink href="/all-uiux">UI/UX Design</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courseDsa">DSA</HoveredLink>
              <HoveredLink href="/courseBackend">Backend</HoveredLink>
              <HoveredLink href="/courseFrontend">Frontend</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
