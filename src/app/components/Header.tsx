import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-around items-center py-4 px-1  mx-2 bg-[#d8d8d863] backdrop:blur-[10px] lg:m-10 m-5 rounded-4xl">
      <h1 className="text-3xl font-bold text-[#01DBEA]">IDOKO CHIDIMA</h1>
      <nav className="lg:flex justify-between text-black  gap-20 items-center hidden">
        <Link href="/" className="hover:bg-[#01dbea4a] p-3 px-5 rounded-2xl ">
          Home
        </Link>
        <Link href="/" className="hover:bg-[#01dbea4a] p-3 px-5 rounded-2xl ">
          Skills
        </Link>
        <Link href="/" className="hover:bg-[#01dbea4a] p-3 px-5 rounded-2xl ">
          Projects
        </Link>
      </nav>

      <div>
        <button className="p-3 px-6 bg-[#01DBEA] text-white rounded-2xl hidden lg:block">
          Contact
        </button>
      </div>

      <button className="block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={35}
          height={35}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          ></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
