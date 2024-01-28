"use client";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import logoImg from "../../../public/Logo.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      title: "Principio",
      href: "/",
    },
    {
      id: 2,
      title: "Sobre Nosotros",
      href: "/about",
    },
    {
      id: 3,
      title: "Productos",
      href: "/products",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = () => {
    setOpenMenu(!openMenu);
  };

  const closeNav = () => {
    openMenu(!setOpenMenu);
  };

  return (
    <>
      <nav className="bg-white w-full h-16 flex items-center">
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="ml-4">
            <Link href="/">
              <Image src={logoImg} height={60} />
            </Link>
          </div>
          <div className="flex justify-evenly w-[50%] text-xl font-bold">
            {navLinks.map((link) => (
              <Link
                className="hover:text-red-600 transition duration-300"
                key={link.id}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <button onClick={handleChange} className="ml-2 md:hidden">
          {openMenu ? <HiOutlineX size={30} /> : <HiBars3 size={30} />}
        </button>
      </nav>
      {openMenu && (
        <div className="flex font-bold gap-2 text-3xl flex-col items-center justify-center h-screen -mt-44">
          {navLinks.map((link) => (
            <Link
              onClick={closeNav}
              className="hover:text-red-600 transition duration-300 hover:underline p-2"
              key={link.id}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
