"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullMessage = `Hello, my name is ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/2347055998679?text=${fullMessage}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <section
      className="bg-[#001617] text-white py-16 px-4 font-sans"
      id="contact"
    >
      <div className="text-center flex flex-col gap-3 mb-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-white">
          Get in Touch
        </h1>
        <p className="text-gray-600 font-medium text-sm lg:text-xl max-w-6xl mx-auto">
          I welcome opportunities for roles, projects, or collaborations where
          my data analytics and AI expertise can contribute to meaningful,
          data-driven outcomes. Please feel free to reach out—I look forward to
          connecting
        </p>
      </div>
      <h2 className="text-center text-2xl font-semibold mb-8">
        Send me a message
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#224a4b] p-6 rounded-2xl w-full lg:w-2/3"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 p-3 rounded-xl bg-[#e0f7fa] text-black placeholder-gray-600 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 rounded-xl bg-[#e0f7fa] text-black placeholder-gray-600 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="subject" className="text-xl">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full mb-4 p-3 rounded-xl bg-[#e0f7fa] text-black placeholder-gray-600 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-xl">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mb-4 p-3 rounded-xl bg-[#e0f7fa] text-black placeholder-gray-600 h-32 resize-none focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-xl hover:opacity-90 transition"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className=" p-6 rounded-lg w-full lg:w-1/3">
          <div className="mb-6 bg-[#226060] rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="mb-3">
              <p className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                    ></path>
                  </svg>
                </span>{" "}
                Location
              </p>
              Lagos, Nigeria
            </div>
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
 <Link className="hover:text-[#01DBEA]" href="https://github.com/IdokoChidimma">
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
              <Link className="hover:text-[#01DBEA]" href="https://www.instagram.com/dimma_peee?igsh=MWlvNmU4YTliMXoxaw==">
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
              <Link className="hover:text-[#01DBEA]" href="https://x.com/Dimma_peee?t=RvuL1nSJKQykA4ipKnjctw&s=09">
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
              <Link className="hover:text-[#01DBEA]" href="https://www.linkedin.com/in/idoko-chidimma-ba8554357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
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
              <Link className="hover:text-[#01DBEA]" href="https://medium.com/@idokochidimma15">
<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
	<path fill="currentColor" d="M6.783 5a6.783 6.783 0 1 0 0 13.565A6.783 6.783 0 0 0 6.783 5m10.695.522c-1.873 0-3.391 2.803-3.391 6.26c0 .65.053 1.274.152 1.862c.132.784.346 1.502.622 2.121q.207.466.46.849c.335.51.724.904 1.149 1.148c.319.183.657.282 1.008.282s.69-.1 1.009-.282c.425-.244.814-.638 1.149-1.148q.251-.384.46-.849c.276-.618.49-1.337.621-2.12c.1-.589.153-1.214.153-1.862c0-3.458-1.519-6.261-3.392-6.261m5.218.521c-.136 0-.266.09-.388.259q-.123.167-.234.434a4 4 0 0 0-.107.288q-.105.31-.193.7c-.118.52-.214 1.138-.28 1.825a23 23 0 0 0-.103 2.234a25 25 0 0 0 .103 2.234c.066.686.162 1.305.28 1.824q.088.391.193.7q.051.156.107.288q.112.266.234.435c.122.168.253.258.388.258c.72 0 1.304-2.57 1.304-5.74c0-3.169-.584-5.739-1.304-5.739"></path>
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
