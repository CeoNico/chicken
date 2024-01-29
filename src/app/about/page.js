import Image from "next/image";
import aboutImg from "../../../public/chicken_drawing.png";

const page = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 px-4">
      <div className="text-center lg:h-[500px] lg:flex lg:flex-col lg:justify-center">
        <h1 className="font-bold text-2xl p-2">Sobre Nosotros</h1>
        <p className="text-balance text-lg lg:text-xl p-2">
          Ubicado en el corazón de General E. Mosconi, nuestra pollería es más
          que un lugar para disfrutar de una comida. Es un punto de encuentro
          donde florecen amistades y comparten historias sobre platos de pollo
          sabrosos. Desde recetas centenarias transmitidas de generación en
          generación hasta creaciones innovadoras que deleitan el paladar, cada
          producto que elaboramos encarna nuestro compromiso con la calidad y la
          tradición. Nuestro viaje comenzó con una pasión simple por el pollo y
          un sueño de crear un espacio acogedor donde las familias pudieran
          reunirse para disfrutar de comida deliciosa hecha con amor. Hoy, ese
          sueño florece en cada bocado de nuestro pollo frito, nuestras opciones
          tiernas de pollo a la parrilla y los acompañamientos que preparamos
          con cuidado y atención al detalle.
        </p>
      </div>
      <div className="lg:block p-10 lg:p-24">
        <Image src={aboutImg} />
      </div>
    </div>
  );
};

export default page;
