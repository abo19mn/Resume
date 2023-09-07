"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import Header from "./header/page";
import "./globals.css";

export default function Home() {
  const t = useTranslations("Translation");

  // const [open, setOpen] = useState<boolean>(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);
  // const handleDropDownFocus = (state: boolean) => {
  //   setOpen(!state);
  // };
  // const handleClickOutsideDropdown = (e: any) => {
  //   if (open && !dropdownRef.current?.contains(e.target as Node)) {
  //     setOpen(false);
  //   }
  // };

  // window.addEventListener("click", handleClickOutsideDropdown);

  return (
    <div className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <Header />
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          <div className="py-8 flex flex-wrap md:flex-nowrap justify-center">
            <div className="md:w-64 md:mb-0 mb-6 ">
              <div
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "150px",
                  height: "150px",
                }}
                className="md:w-64 md:mb-0 mb-6"
              >
                <img src="/images/abo.jpg" placeholder="blur" />
              </div>
            </div>
            <div className="md:flex-grow justify-center">
              <h2 className="text-4xl font-medium text-white title-font mb-2">
                {t("name")}
              </h2>
              <strong className="text-2xl leading-relaxed">
                Front-end Developer / Electronic engineer
              </strong>
            </div>
          </div>
          <div className="py-8 sm:flex flex-nowrap md:flex">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white sm:visibility-hidden">
                {t("aboutMe")}
              </span>
            </div>
            <div className="md:flex-grow flex:wrap">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                {t("personalInformation")}
              </h2>
              <p className="leading-relaxed flex-nowrap sm:flex-wrap md:flex-nowrap">
                {t("personalSentence")}
              </p>
            </div>
          </div>

          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap sm:flex-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col font-semibold title-font text-white">
              {t("education")}
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                {t("educationHistory")}
              </h2>
              <div className="leading-relaxed">
                <div className="grid grid-cols-4 gap-3">
                  <strong className="col-start-1">2021-2023</strong>
                  <div className="col-start-2 col-end-6">
                    <strong>{t("gundai")} </strong>
                    <p>{t("gundaiGakka")}</p>
                  </div>
                  <strong className="col-start-1">2018-2021</strong>
                  <div
                    className="col-start-2 col-end-6"
                    style={{ marginTop: "10px" }}
                  >
                    <strong>{t("kosen")}</strong>
                    <p>{t("kosenGakka")}</p>
                  </div>
                  <strong className="col-start-1">2017-2018</strong>
                  <div className="col-start-2 col-end-6">
                    <strong>{t("jasso")} </strong>
                    <p>{t("jassoGakka")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap sm:flex-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                {t("language")}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-4">
                {t("language")}
              </h2>
              <div className="leading-relaxed">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-3">
                  <strong className="col-start-1">{t("mongolian")}</strong>
                  <strong className="col-start-2 col-end-6">
                    {t("native")}
                  </strong>
                  <strong className="col-start-1">{t("japanese")}</strong>
                  <strong className="col-start-2 col-end-6">
                    {t("fluent")}
                  </strong>
                  <strong className="col-start-1">{t("english")}</strong>
                  <strong className="col-start-2 col-end-6">
                    {t("upper")}
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                {t("professional")}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-4">
                {t("programmingLanguage")}
              </h2>
              <div className="leading-relaxed">
                <div className="grid lg:grid-cols-4 gap-3 sm :grid grid-cols-2 gap-3}">
                  <div className="col-start-1">HTML,CSS</div>
                  <div className="col-start-2 col-end-4">
                    <ProgressBar now={80} />{" "}
                  </div>

                  <div className="col-start-1">Javascript</div>
                  <div className="col-start-2 col-end-4">
                    <ProgressBar now={65} />{" "}
                  </div>
                  <div className="col-start-1">ReactJs</div>
                  <strong className="col-start-2 col-end-4">
                    {" "}
                    <ProgressBar now={70} />{" "}
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-wrap flex-col md:flex-row">
            <div className="w-full md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                {t("personalMentors")}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-5">
                {t("personalMentors")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mentor 1 */}
                <div className="flex flex-col items-center text-center">
                  <div
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                    }}
                  >
                    <img src="/images/Khangal.png" alt="Mentor 1" />
                  </div>
                  <strong className="mt-2">Khangal</strong>
                  <p className="leading-relaxed">
                    Senior back-end at AND Denode LLC
                    <br />
                    CTO at AND Irbis Ventures Pte.
                  </p>
                </div>
                {/* Mentor 2 */}
                <div className="flex flex-col items-center text-center">
                  <div
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                    }}
                  >
                    <img src="/images/Setgel.png" alt="Mentor 2" />
                  </div>
                  <strong className="mt-2">Setgel</strong>
                  <p className="leading-relaxed">
                    Front-end, Mobile Developer at Mezorn LLC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
