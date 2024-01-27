import Image from "next/image";

import Button from "./Button";

const Hero = () => {
  return (
    <main className="px-6 py-2 lg:px-24 flex items-center justify-center flex-col h-96 lg:h-screen text-center bg-hero bg-cover bg-center">
      <h1 className="font-bold text-2xl">Polleria en General E. Mosconi</h1>
      <p className="pb-2">Delicias avícolas que conquistan paladares.</p>
      <Button className="bg-red-900 hover:bg-blue-400" href="/products">Ver Productos</Button>
    </main>
  );
};

export default Hero;
