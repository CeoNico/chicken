import Image from "next/image";

const ProductCard = ({ product, imageSrc, price }) => {
  return (
    <div className="h-full text-center flex flex-col items-center border-2 border-black rounded-lg">
      <h2 className="text-red-600 p-2 font-bold text-xl underline">{product} </h2>
      <Image className="p-2" src={imageSrc} />
      <p className="text-lg font-semibold p-2">Precio por KG : $ {price} </p>
    </div>
  );
};

export default ProductCard;
