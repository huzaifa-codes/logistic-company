"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-[60px] sm:top-12 left-0 w-full z-20 bg-black/20 ">
      <div className="flex justify-between items-center px-6 py-7">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white">
          <span className="text-2xl font-bold tracking-wide leading-tight">
           Velonix Logistics
            <span className="block text-sm font-medium opacity-75">
              TRANSPORT GROUP
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-white text-base font-semibold uppercase">
          <Link href="#" className="hover:text-sky-600 transition">Shippers</Link>
          <Link href="#" className="hover:text-sky-400 transition">Carriers</Link>
          <Link href="#" className="hover:text-sky-400 transition">Agents</Link>
          <Link href="#" className="hover:text-sky-400 transition">About Us</Link>
          <Button variant="sky" size="lg">Contact Us</Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-gray-900 border-t border-gray-800`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6 text-sm font-semibold uppercase text-white">
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-sky-400"
          >
            Shippers
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-sky-400"
          >
            Carriers
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-sky-400"
          >
            Agents
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-sky-400"
          >
            About Us
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 rounded-md font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-md transition-all"
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
