"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };
  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  window.addEventListener("click", handleClickOutsideDropdown);

  console.log(open);

  return (
    <div className="container mx-auto flex justify-between items-center border-b-2 px-6 py-2 h-24">
      <h1 className="font-bold">ABO</h1>
      <div className="flex items-center justify-bottom gap-2 md:gap-8">
        <Link
          href="/"
          style={{
            color: "rgb(156, 163, 175)",
            textDecoration: "none",
          }}
        >
          {" "}
          Home
        </Link>
        <Link
          href="/pdf/RESUME_AMARBOLD-OTGONBAATAR.pdf "
          style={{ color: "rgb(156, 163, 175)", textDecoration: "none" }}
        >
          Resume
        </Link>
        <Link
          href="contact"
          style={{ color: "rgb(156, 163, 175)", textDecoration: "none" }}
        >
          {" "}
          Contact
        </Link>
        <div className="App">
          <div className="app-drop-down-container" ref={dropdownRef}>
            <button onClick={(e) => handleDropDownFocus(open)}>
              <AiOutlineGlobal size={25} />
            </button>
            {open && (
              <ul>
                <li>
                  <img src="/images/gb.svg" alt="eu" />
                </li>
                <li>
                  <img src="/images/mn.svg" alt="mn" />
                </li>
                <li>
                  <img src="/images/jp.svg" alt="jp" />
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
