"use client";

import React, { useState } from "react";
import Header from "../header/page";
import { useFormatter, useTranslations } from "next-intl";
import "./../globals.css";

const Contact: React.FC = () => {
  const t = useTranslations("Translation");
  const format = useFormatter();

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  // typeof window !== 'undefined;

  const handleSubjectChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(e.target.value);
  };

  const handleBodyChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBody(e.target.value);
  };

  const sendEmail = () => {
    if (typeof window !== "undefined") {
      const mailtoLink = `mailto:abo19mn@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    } else {
      console.error(
        "window is not defined. This code is not running in a browser environment."
      );
    }
  };

  return (
    <div className="text-gray-400 bg-gray-900 body-font relative">
      <Header />
      <div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="">
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <div>
                <h2 className="title-font font-semibold text-white tracking-widest text-xl mt-4">
                  {t("contactMe")}
                </h2>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  {t("address")}
                </h2>
                <p className="mt-1">{t("addressInfo")}</p>
                {/* </div> */}
                {/* <div className="lg:w-1/2 px-6 mt-4 lg:mt-0"> */}
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  {t("email")}
                </h2>
                <a
                  href="mailto:abo19mn@email.com?&subject=$name&body=message"
                  className="text-indigo-400 leading-relaxed"
                >
                  abo19mn@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  {t("phone")}
                </h2>
                <p className="leading-relaxed">+976-94678494</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  {t("nameContact")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={subject}
                  onChange={handleSubjectChange}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  {t("emailContact")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  {t("messageContact")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={body}
                  onChange={handleBodyChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                id="EmailButton"
                onClick={sendEmail}
              >
                {t("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
