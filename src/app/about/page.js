import Image from 'next/image';
import aboutImg from '../../../public/chicken_drawing.png'

const page = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 px-4">
      <div className="text-center lg:h-[500px] lg:flex lg:flex-col lg:justify-center">
        <h1 className="font-bold text-2xl p-2">Sobre Nosotros</h1>
        <p className="text-balance">
          Somos una empresa familiar desde EEUU. Vinimos aqui a conquistar el
          mercado de pollos. No vamos a parar hasta que tengamos un monolpoloy
          como el ominan y seamos imparable. Nuestro pollo es el mejor de la
          zona y mas barato, no somos estafadores como todo los otros alredeor
          que te vende al triple el precio. Queremos ver prosperidad en toda la
          gente que nos compra a nosotros!
        </p>
      </div>
      <div className="lg:block lg:p-24">
        <Image src={aboutImg} />
      </div>
    </div>
  );
};

export default page;
