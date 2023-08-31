"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function About() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <header>
        <div className="container mx-auto flex justify-between items-center border-b-2 px-6 py-2 h-24">
          <h1 className="font-bold">ABO</h1>
          <div>
            <div className="flex items-right justify-center gap-2 md:gap-8">
              <Link href="/"> Home</Link>
              <Link href="cv">Resume</Link>
              <Link href="contact"> Contact</Link>
              <Link href="home"> Home</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6">
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
              About.h
            </div>
            <div className="md:flex-grow">
              <h2 className="text-4xl font-medium text-white title-font mb-2">
                Otgonbaatar Amarbold
              </h2>
              <strong className="text-2xl leading-relaxed">
                Front-end Developer / Electronic engineer
              </strong>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                About Me
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Personal information
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug,
                c12312312312c12312312312c12312312312c12312312312c12312312312c12312312312c12312312312
              </p>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col font-semibold title-font text-white">
              Education
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Education History
              </h2>
              <div className="leading-relaxed">
                <div className="grid grid-cols-4 gap-3">
                  <strong className="col-start-1">2021-2023</strong>
                  <div className="col-start-2 col-end-6">
                    <strong>Gunma University</strong>
                    <p>
                      The Department of Electronic and Electrical Engineering
                    </p>
                  </div>
                  <strong className="col-start-1">2018-2021</strong>
                  <div
                    className="col-start-2 col-end-6"
                    style={{ marginTop: "10px" }}
                  >
                    <strong>
                      National Institute of Technology Tokyo College
                    </strong>
                    <p>The Department of Electrical Engineering</p>
                  </div>
                  <strong className="col-start-1">2017-2018</strong>
                  <div className="col-start-2 col-end-6">
                    <strong>Tokyo Japanese Language Education Center </strong>
                    <p>One-year advanced academic program</p>
                  </div>
                  <strong className="col-start-1">2015-2017</strong>
                  <div className="col-start-2 col-end-6">
                    <strong>Ider University</strong>
                    <p>The Department of Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                Language Skill
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Language Skill
              </h2>
              <div className="leading-relaxed">
                <div className="grid grid-cols-4 gap-3">
                  <strong className="col-start-1">Mongolian</strong>
                  <strong className="col-start-2 col-end-6">Native</strong>
                  <strong className="col-start-1">Japanese</strong>
                  <strong className="col-start-2 col-end-6">Fluent</strong>
                  <strong className="col-start-1">English</strong>
                  <strong className="col-start-2 col-end-6">
                    Upper intermediate
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                Professional skill
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Programming language
              </h2>
              <div className="leading-relaxed">
                <div className="grid grid-cols-4 gap-3">
                  <strong className="col-start-1">HTML,CSS</strong>
                  <div className="col-start-2 col-end-4">
                    <ProgressBar now={80} />{" "}
                  </div>

                  <strong className="col-start-1">Javascript</strong>
                  <div className="col-start-2 col-end-4">
                    <ProgressBar now={65} />{" "}
                  </div>
                  <strong className="col-start-1">ReactJs</strong>
                  <strong className="col-start-2 col-end-4">
                    {" "}
                    <ProgressBar now={70} />{" "}
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                Personal mentors
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Personal mentors
              </h2>
              <div className="grid grid-cols-4 gap-3">
                <div
                  style={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <img src="/images/Khangal.png" placeholder="blur" />
                </div>
                <div className="col-start-2 col-end-6">
                  <strong>Khangal </strong>
                  <p className="leading-relaxed">
                    Senior back-end at AND Denode LLC <br /> CTO at AND Irbis
                    Ventures Pte.
                  </p>
                </div>
                <div
                  className="col-start-1"
                  style={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <img src="/images/Setgel.png" placeholder="blur" />
                </div>
                <div className="col-start-2 col-end-6">
                  <strong>Setgel </strong>
                  <p className="leading-relaxed">
                    Front-end, Mobile Developer at Mezorn LLC
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
