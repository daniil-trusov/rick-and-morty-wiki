"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { pageConfig } from "@/configs/pageConfig";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mb-4 w-full bg-gray-100">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between px-4 py-3 lg:flex-nowrap"
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
          className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} w-full lg:flex lg:max-h-full lg:w-auto lg:items-center lg:opacity-100`} //{`${isOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="mt-4 flex flex-col text-xl text-gray-500 lg:mt-0 lg:flex-row lg:gap-6">
            {pageConfig.map(({ path, title }) => (
              <li key={title}>
                <Link
                  href={path}
                  className={`transition-colors duration-200 ${
                    pathname === path
                      ? "pointer-events-none font-bold text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
