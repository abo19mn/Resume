"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef, useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import "./../globals.css";

export default function Header() {
  const t = useTranslations("Translation");

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
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between border-b-2 px-6 py-2 h-24">
      <h1 className="font-bold  md:visible">ABO</h1>
      <div className="flex items-center    gap-2 md:gap-8 ">
        <div className="flex gap-2 whitespace-nowrap ">
          <Link
            href="/"
            style={{
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
            }}
          >
            {" "}
            {t("home")}
          </Link>
          <Link
            href="/pdf/RESUME_AMARBOLD-OTGONBAATAR.pdf "
            style={{
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
            }}
          >
            {t("resume")}
          </Link>
          <Link
            href="contact"
            style={{ color: "rgb(156, 163, 175)", textDecoration: "none" }}
          >
            {" "}
            {t("contact")}
          </Link>
        </div>

        <div className="App">
          <div className="app-drop-down-container" ref={dropdownRef}>
            <button onClick={(e) => handleDropDownFocus(open)}>
              <AiOutlineGlobal size={25} />
            </button>
            {open && (
              <ul>
                <li>
                  <a href="/en">
                    <img src="/images/gb.svg" alt="eu" />
                  </a>
                </li>
                <li>
                  <a href="/mn">
                    <img src="/images/mn.svg" alt="mn" />
                  </a>
                </li>
                <li>
                  <a href="/jp">
                    <img src="/images/jp.svg" alt="jp" />
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
