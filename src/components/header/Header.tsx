// 'use client'
// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faShoppingCart,
//   faSearch,
//   faUser,
//   faBars,
// } from "@fortawesome/free-solid-svg-icons";

// import Image from "next/image";
// import LogoImg from "../../public/images/logo.jpg";


// interface Props {}

// const Header: React.FC<Props> = () => {
// const [isNavVisible, setIsNavVisible] = useState(false);

// const toggleNavVisibility = () => {
//   setIsNavVisible(!isNavVisible);
// };

//   return (
//     <header className="p-4 flex flex-col md:flex-row justify-between items-center my-8">
//       <div className="mx-4">
//         <Image src={LogoImg} alt="img" />
//       </div>
//       {/* Hamburger menu icon for md and sm devices */}
//       <div className="md:hidden">
//         <a href="#" onClick={toggleNavVisibility}>
//           <FontAwesomeIcon icon={faBars} />
//         </a>
//       </div>
//       <nav className={`md:flex md:justify-center md:items-start flex-grow text-center  ${isNavVisible ? 'block' : 'hidden'}`}>
//              <ul className="flex flex-col md:flex-row justify-center gap-12 font-semibold">
//           <li>
//             <a href="/" className="hover:text-gray-300">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/about" className="hover:text-gray-300">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="/shop" className="hover:text-gray-300">
//               Shop
//             </a>
//           </li>
//           <li>
//             <a href="/blog" className="hover:text-gray-300">
//               Blog
//             </a>
//           </li>
//           <li>
//             <a href="/pages" className="hover:text-gray-300">
//               Pages
//             </a>
//           </li>
//           <li>
//             <a href="/contact" className="hover:text-gray-300">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <div className="flex gap-6 mr-6 items-center">
//         <div className="relative md:hidden">
//           <input
//             type="text"
//             placeholder="Search"
//             className="px-3 py-2 border border-black-300 rounded-md focus:outline-none focus:border-black-600 border-r-2"
//           />
//           <div className="absolute top-0 right-0 px-3 py-2">
//             <FontAwesomeIcon icon={faSearch} />
//           </div>
//         </div>
//         <a href="#" className="h-8 w-8">
//           <FontAwesomeIcon icon={faShoppingCart} />
//         </a>
//         <a href="#" className="h-6 w-6">
//           <FontAwesomeIcon icon={faUser} />
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import LogoImg from "../../public/images/logo.jpg";

import { TbMenuDeep } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import clsx from "clsx";

export default function Header() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Home",
      link: "#",
    },
    {
      labe: "About",
      link: "/about",
    },
    {
      labe: "Shop",
      link: "#",
    },
    {
      labe: "Pages",
      link: "#",
    },
    {
      labe: "Blog",
      link: "#",
    },
    {
      labe: "Contact",
      link: "#",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6   ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <TbMenuDeep
              onClick={() => setMenu(true)}
              className="text-2xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/"}>
              <Image src={LogoImg} alt="logo" width={100} height={100} />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block  text-gray-500 hover:text-black"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <CgClose
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* search icon */}
          <Link href={"#"}>
            <CiSearch className="text-2xl cursor-pointer" />
          </Link>
          {/* cart icon */}
          <Link href={"#"}>
            <FaOpencart className="text-2xl cursor-pointer" />
          </Link>
          {/* account icon */}
          <Link href={"#"}>
            <VscAccount className="text-2xl cursor-pointer" />
          </Link>
        </section>
      </nav>
      <hr className=" " />
    </main>
  );
}

