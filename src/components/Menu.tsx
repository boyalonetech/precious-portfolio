import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="relative">
      {/* Hamburger Menu */}
      <div className="flex flex-col w-full justify-center gap-20  fixed top-0 right-0 h-screen items-center bg-[#00000067] z-40" />
      <aside className="flex flex-col w-[250px] justify-center gap-20  fixed top-0 right-0 h-screen items-center bg-white z-40">
        <Link href="/" className="hover:bg-[#01dbea4a] p-3 px-5 rounded-2xl ">
          Home
        </Link>
        <Link
          href="/#skills"
          className="hover:bg-[#01dbea4a] p-3 px-5 rounded-2xl "
        >
          Skills
        </Link>
        <Link
          href="/#projects"
          className="hover:bg-[#01dbea4a] p-3 px-5 rounded-2xl "
        >
          Projects
        </Link>
        <Link href="/#contact">
          <button className="p-4 px-8 bg-[#01DBEA] text-white rounded-2xl ">
            Contact
          </button>
        </Link>
      </aside>
    </div>
  );
};

export default Menu;
