import Image from "next/image";
import aboutImg from "../../../public/chicken.jpg";
import Button from "./Button";

const About = () => {
  return (
    <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div className=" text-center lg:px-24 p-6">
        <h1 className="font-bold text-2xl text-red-600">
          Solamente Pollo de Calidad
        </h1>
        <span className="font-extralight text-md">
          Elejimos entre los pollos con menos hormonas y con el mejor sabor
        </span>
        <p className="font-serif text-lg text-balance mt-5">
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
      </div>
      <div className="p-10 hidden lg:block">
        <Image className="rounded-xl shadow-xl shadow-black" src={aboutImg} />
      </div>
    </div>
  );
};

export default About;
