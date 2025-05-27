"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-4 w-full bg-gray-100">
      <div
        aria-label="Footer navigation"
        className="mx-auto flex max-w-[1200px] items-center justify-around px-4 py-3 text-gray-500"
      >
        <Link
          className="font-sans text-2xl font-bold hover:text-gray-700 hover:underline"
          href="https://github.com/daniil-trusov/rick-and-morty-wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>

        <span>Daniil Trusov, 2025</span>

        <button
          className="text-xl hover:text-gray-700"
          onClick={() => {}}
          aria-label="Back to top"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
