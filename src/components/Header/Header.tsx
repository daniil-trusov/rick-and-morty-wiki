"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import pageSchema from "@/app/data/pageSchema.json";
import {
  MAX_CONTENT_SIZE,
  MIN_CONTENT_SIZE,
  TRANSITION_ANIMATION_LENGTH,
} from "@/utils/constants";
import NavLink from "./NavLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className="mb-4 w-full bg-gray-100">
      <nav
        aria-label="Main navigation"
        className={clsx(
          "mx-auto flex max-w-[1200px] flex-wrap items-center justify-between px-4 py-3 lg:flex-nowrap",
          `min-w-[${MIN_CONTENT_SIZE}px]`,
          `max-w-[${MAX_CONTENT_SIZE}px]`
        )}
      >
        <Link className="font-sans text-2xl font-bold" href="/">
          <span className="text-blue-600">Rick & Morty</span> Wiki
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? "Close" : "Open"} navigation menu`}
        >
          <span className="text-xl">{isOpen ? "✖" : "☰"}</span>
        </button>

        <div
          className={clsx(
            "overflow-hidden transition-[max-height,opacity] ease-in-out",
            `duration-${TRANSITION_ANIMATION_LENGTH}`,
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            "w-full lg:flex lg:max-h-full lg:w-auto lg:items-center lg:opacity-100"
          )}
        >
          <ul className="mt-4 flex flex-col text-xl text-gray-500 lg:mt-0 lg:flex-row lg:gap-6">
            {pageSchema.map(({ slug: path, title }) => (
              <li key={title}>
                <NavLink
                  path={path}
                  title={title}
                  isSelected={pathname === path}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
