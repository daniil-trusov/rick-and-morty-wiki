"use client";
import Link from "next/link";
import { useState } from "react";

const pageLinks = [
  { name: "Characters", link: "/" },
  { name: "Episodes", link: "/episodes" },
  { name: "Locations", link: "/locations" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-4 w-full bg-gray-100">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3"
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
          className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="mt-4 flex flex-col text-lg text-gray-500 lg:mt-0 lg:flex-row lg:gap-6">
            {pageLinks.map(({ name, link }) => (
              <li key={name}>
                <Link
                  href={link}
                  className="transition-colors duration-200 hover:text-gray-700 hover:underline"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
