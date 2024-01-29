"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import patitasImg from "../../../public/patitas.jpg";
import pechugaImg from "../../../public/pechuga.jpg";
import polloImg from "../../../public/pollo_entero.jpg";

const Products = () => {
  return (
    <div className="h-fit w-full">
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="p-4 text-center"
      >
        <h1 className="font-bold text-2xl text-red-600 ">
          Nuestros Productos de Pollo Saludables y Premium
        </h1>
        <span className="font-extralight text-md">
          Nos apasiona brindarte una amplia variedad de pollos frescos.
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="grid grid-cols-1 lg:grid-cols-3 p-10"
      >
        <Image alt="Image of raw chicken wings" src={patitasImg} />
        <Image alt="Image of raw chicken breast" src={pechugaImg} />
        <Image alt="Image of a whole raw chicken" src={polloImg} />
      </motion.div>
    </div>
  );
};

export default Products;
