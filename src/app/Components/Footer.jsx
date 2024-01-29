import Image from "next/image";
import logo from "../../../public/Logo.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-slate-900">
      <div className="flex flex-col h-full text-center items-center">
        <div className="p-5">
          <Image src={logo} height={50} />
        </div>
        <p className="text-white text-lg">
          Peru 89, General E Mosconi, Salta, Argentina 4562
        </p>
        <p className="text-white text-lg">+54 387-353-7499</p>
        <div className="grid grid-cols-2 gap-10 text-white mt-2">
          <BsFacebook size={30} className="cursor-pointer" />
          <BsWhatsapp size={30} className="cursor-pointer" />
        </div>
        <div className="pt-6 flex flex-col gap-2">
          <Link className="text-white font-bold text-sm hover:text-slate-600 transition duration-300" href="/">
            Principio
          </Link>
          <Link className="text-white font-bold text-sm hover:text-slate-600 transition duration-300" href="/">
            Sobre Nosotros
          </Link>
          <Link className="text-white font-bold text-sm hover:text-slate-600 transition duration-300" href="/">
            Productos
          </Link>
        </div>
      </div>
      <div className="text-center mt-4 bg-black text-white">
        <span>Creado por @BackendExcellence</span>
      </div>
    </div>
  );
};

export default Footer;
