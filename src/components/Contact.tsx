"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-[#012326] text-white py-16 px-4 font-sans">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Send me a message
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
        {/* Form */}
        <form className="bg-[#224a4b] p-6 rounded-2xl w-full lg:w-2/3">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 p-3 rounded-xl bg-[#e0f7fa] text-black placeholder-gray-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 p-3 rounded-xl bg-[#e0f7fa] text-black placeholder-gray-600 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full mb-4 p-3 rounded-xl bg-[#e0f7fa] text-black placeholder-gray-600 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 rounded-xl bg-[#e0f7fa] text-black placeholder-gray-600 h-32 resize-none focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-xl hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className=" p-6 rounded-lg w-full lg:w-1/3">
          <div className="mb-6 bg-[#226060] rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="mb-3">
              📍 Location
              <br />
              Lagos, Nigeria
            </p>
            <p>
              ✉️ Email
              <br />
              <a
                href="mailto:idokochidimma15@gmail.com"
                className="text-cyan-300 hover:underline"
              >
                idokochidimma15@gmail.com
              </a>
            </p>
          </div>
          <div className=" bg-[#226060] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex items-center gap-4">
              <Link className="hover:text-[#01DBEA]" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                >
                  <mask
                    id="lineMdGithubLoop0"
                    width={24}
                    height={24}
                    x={0}
                    y={0}
                  >
                    <g fill="#fff">
                      <ellipse cx={9.5} cy={9} rx={1.5} ry={1}></ellipse>
                      <ellipse cx={14.5} cy={9} rx={1.5} ry={1}></ellipse>
                    </g>
                  </mask>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path
                      strokeDasharray={32}
                      strokeDashoffset={32}
                      d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.7s"
                        values="32;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={10}
                      strokeDashoffset={10}
                      d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                    >
                      <animate
                        attributeName="d"
                        dur="3s"
                        repeatCount="indefinite"
                        values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                      ></animate>
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.8s"
                        dur="0.2s"
                        values="10;0"
                      ></animate>
                    </path>
                  </g>
                  <rect
                    width={8}
                    height={4}
                    x={8}
                    y={11}
                    fill="currentColor"
                    mask="url(#lineMdGithubLoop0)"
                  >
                    <animate
                      attributeName="y"
                      dur="5s"
                      keyTimes="0;0.45;0.46;0.54;0.55;1"
                      repeatCount="indefinite"
                      values="11;11;7;7;11;11"
                    ></animate>
                  </rect>
                </svg>
              </Link>
              <Link className="hover:text-[#01DBEA]" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx={17}
                    cy={7}
                    r={1.5}
                    fill="currentColor"
                    fillOpacity={0}
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.3s"
                      dur="0.15s"
                      values="0;1"
                    ></animate>
                  </circle>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path
                      strokeDasharray={72}
                      strokeDashoffset={72}
                      d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="72;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={28}
                      strokeDashoffset={28}
                      d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.6s"
                        values="28;0"
                      ></animate>
                    </path>
                  </g>
                </svg>
              </Link>
              <Link className="hover:text-[#01DBEA]" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        dur="0.4s"
                        values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"
                      ></animate>
                    </path>
                    <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.4s"
                        dur="0.4s"
                        values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"
                      ></animate>
                    </path>
                    <path d="M18.5 2h3.5L22 2h-3.5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.5s"
                        dur="0.4s"
                        values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
                      ></animate>
                    </path>
                  </g>
                </svg>
              </Link>
              <Link className="hover:text-[#01DBEA]" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx={4}
                    cy={4}
                    r={2}
                    fill="currentColor"
                    fillOpacity={0}
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      dur="0.15s"
                      values="0;1"
                    ></animate>
                  </circle>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                  >
                    <path
                      strokeDasharray={12}
                      strokeDashoffset={12}
                      d="M4 10v10"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.15s"
                        dur="0.2s"
                        values="12;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={12}
                      strokeDashoffset={12}
                      d="M10 10v10"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.45s"
                        dur="0.2s"
                        values="12;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={24}
                      strokeDashoffset={24}
                      d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.65s"
                        dur="0.2s"
                        values="24;0"
                      ></animate>
                    </path>
                  </g>
                </svg>
              </Link>
              <Link className="hover:text-[#01DBEA]" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                >
                  <mask id="lineMdYoutubeFilled0">
                    <g
                      fill="none"
                      fillOpacity={0}
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path
                        fill="#fff"
                        strokeDasharray={64}
                        strokeDashoffset={64}
                        d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="0.6s"
                          dur="0.5s"
                          values="0;1"
                        ></animate>
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="64;0"
                        ></animate>
                      </path>
                      <path fill="#000" stroke="none" d="M12 11L12 12L12 13z">
                        <animate
                          fill="freeze"
                          attributeName="d"
                          begin="1.1s"
                          dur="0.2s"
                          values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"
                        ></animate>
                        <set
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="1.1s"
                          to={1}
                        ></set>
                      </path>
                    </g>
                  </mask>
                  <rect
                    width={24}
                    height={24}
                    fill="currentColor"
                    mask="url(#lineMdYoutubeFilled0)"
                  ></rect>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-sm text-gray-400 border-t border-gray-700 mt-12 pt-4">
        © 2025 Idoko Chidimma Precious. All rights reserved.
      </footer>
    </section>
  );
}
