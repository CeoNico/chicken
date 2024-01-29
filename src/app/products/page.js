import patitasImg from "../../../public/patitas.jpg";
import pechugaImg from "../../../public/pechuga.jpg";
import polloImg from "../../../public/pollo_entero.jpg";
import milanesaImg from "../../../public/milanesa.jpg";
import { Prices } from "../Components/Prices";
import ProductCard from "../Components/ProductCard";
import pataMusloImg from "../../../public/pataMuslo.jpg";

const page = () => {
  return (
    <div className="h-fit w-full p-2">
      <div className="text-center p-4 lg:px-24">
        <h1 className="font-bold text-xl lg:text-3xl lg:p-2">
          Nuestros Productos
        </h1>
        <p className="font-light text-md lg:text-lg lg:px-56">
          Ofrecemos varias clases de productos, todos nuestros productos son
          frescos y estan derivados  de los mejores pollos del norte. Primero para
          nostros es el que la comida este fresca y que nuestros clientes esten
          satisfecho
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center w-full justify-center px-2 lg:px-56 gap-2">
        <ProductCard
          imageSrc={milanesaImg}
          product="Milanesa de Pollo"
          price={Prices.milanesa}
        />
        <ProductCard
          imageSrc={polloImg}
          product="Pollo Entero"
          price={Prices.entero}
        />
        <ProductCard
          imageSrc={pechugaImg}
          product="Pechuga de Pollo"
          price={Prices.pechuga}
        />
        <ProductCard
          imageSrc={patitasImg}
          product="Patitas de Pollo"
          price={Prices.alitas}
        />
        <ProductCard
          imageSrc={pataMusloImg}
          product="Pata Musslo"
          price={Prices.pataMusslo}
        />
      </div>
    </div>
  );
};

export default page;
