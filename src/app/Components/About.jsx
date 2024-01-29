"use client"
import Image from "next/image";
import aboutImg from "../../../public/chicken.jpg";
import Button from "./Button";
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
      <motion.div
      initial={{opacity: 0, x:"-100vw"}}
      whileInView={{opacity: 1, x:0}}
      transition={{duration: 1}}
       className=" text-center lg:px-24 p-6">
        <h1 className="font-bold text-2xl text-red-600 lg:text-3xl">
          Solamente Pollo de Calidad
        </h1>
        <p className="font-extralight text-md pt-2">
          Elejimos entre los pollos con menos hormonas y con el mejor sabor
        </p>
        <p className="font-serif text-lg lg:text-xl  text-balance mt-5">
          Nuestra prueba de inspección porciones y pesa cuidadosamente cada
          pechuga de pollo utilizando básculas computarizadas para garantizar
          consistencia y apariencia. Cada pechuga de pollo es empacada a mano en
          bandejas de plástico burbuja o planas, categorizadas por con piel o
          sin piel, e individualmente pesadas de 2 a 24 onzas. También vendemos
          el pollo entero más fresco y partes de pollo.
        </p>
        <div className="mt-5">
          <Button href="/about">Sobre Nosotros</Button>
        </div>
      </motion.div>
      <div className="p-10 hidden lg:block">
        <Image className="rounded-xl shadow-xl shadow-black" src={aboutImg} />
      </div>
    </div>
  );
};

export default About;
