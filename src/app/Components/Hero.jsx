import Image from "next/image";
import heroImg from '../../../public/hero.jpg'
import Button from "./Button";

const Hero = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center flex-col h-screen lg:h-fit lg:pb-44 text-center border-t-2 border-t-black/50">
      <div className="h-full w-full pl-6 pt-10 hidden lg:flex">
        <Image className="shadow-xl shadow-black rounded-xl" alt="Chicken laying next to an egg" src={heroImg} />
      </div>
      <div className="px-3 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Polleria en General E. Mosconi</h1>
        <p className="py-2 text-balance text-lg text-black">
          Buscando comprar pollo en Mosconi? No dudes en venir a nuestra polleria para encontrar el mejor pollo al mejor precio!
          Ubicada en Barrio Belgrano calle Peru 89.
        </p>
        <Button className="bg-red-900 hover:bg-slate-300" href="/products">
          Ver Productos
        </Button>
      </div>
    </main>
  );
};

export default Hero;
