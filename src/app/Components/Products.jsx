import Image from "next/image";
import patitasImg from '../../../public/patitas.jpg'
import pechugaImg from '../../../public/pechuga.jpg'
import polloImg from '../../../public/pollo_entero.jpg'

const Products = () => {
  return (
    <div className="h-fit w-full">
      <div className="p-4 text-center">
        <h1 className="font-bold text-2xl text-red-600 ">Nuestros Productos de Pollo Saludables y Premium</h1>
        <span className="font-extralight text-md">
        Nos apasiona brindarte una amplia variedad de pollos frescos.
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-10">
        <Image src={patitasImg} />
        <Image src={pechugaImg} />
        <Image src={polloImg} />
      </div>
    </div>
  );
};

export default Products;
