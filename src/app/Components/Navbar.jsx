"use client";
import { HiBars3 } from "react-icons/hi2";
import logoImg from "../../../public/Logo.jpg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <div className="bg-slate-100 w-full h-16 flex items-center">
      <button onClick={handleChange} className="ml-2">
        <HiBars3 size={30} />
      </button>
      <div className="w-full">
        <div className="flex items-center justify-center pr-6">
          <Image alt="Chicken with a thumbs up" src={logoImg} height={70} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
