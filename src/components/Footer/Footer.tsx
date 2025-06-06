"use client";
import { MAX_CONTENT_SIZE, MIN_CONTENT_SIZE } from "@/utils/constants";
import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 w-full bg-gray-100 px-4 pt-6 pb-12">
      <div
        aria-label="Footer navigation"
        className={clsx(
          "mx-auto flex flex-col items-center justify-center gap-x-8 gap-y-4 text-center text-gray-500 md:flex-row",
          `min-w-[${MIN_CONTENT_SIZE}px]`,
          `max-w-[${MAX_CONTENT_SIZE}px]`
        )}
      >
        <span>© Daniil Trusov | 2025</span>

        <Link
          className="hover:text-gray-700"
          href="https://github.com/daniil-trusov/rick-and-morty-wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repo
        </Link>

        <button
          className="hover:text-gray-700"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
