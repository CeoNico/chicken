import Image from "next/image";
import logo from "../../../public/Logo.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-fit p-10 bg-slate-900/80">
      <div className="flex flex-col h-full text-center items-center">
        <div className="p-5">
          <Image src={logo} height={50} />
        </div>
        <p className="text-white text-lg">
          Ubicacion: Calle Peru 89 General E Mosconi Salta, Argentina 4562
        </p>
        <p className="text-white text-lg">Cel: +54 387-353-7499</p>
        <div className="grid grid-cols-2 gap-10 text-white mt-2">
            <BsFacebook size={30} />
            <BsWhatsapp size={30} />
        </div>
      </div>
      <div className="text-center mt-4 bg-black text-white">
        <span>Created by BackendExcellence</span>
      </div>
    </div>
  );
};

export default Footer;
