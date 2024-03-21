import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        Acerca de 
        <span className='text-coral-red'> Nosotros </span>
      </h2>

        <p className='mt-4 lg:max-w-lg info-text'>
        IKOMI PERU es una compañía dedicada a la importación y comercialización de repuestos automotrices al por mayor y por menor para vehículos medianos y pesados de las principales marcas de origen koreano y japonés.</p>
        <p className='mt-4 lg:max-w-lg info-text'> 
        Nuestra empresa viene satisfaciendo las necesidades del rubro a nivel nacional desde 2009, cumpliendo con los estándares de calidad, seguridad y sostenibilidad que el mercado actual demanda.</p>
        <p className='mt-4 lg:max-w-lg info-text'>
          IKOMI PERU, además de 15 años de presencia en el mercado peruano, cuenta con el respaldo de sus más de 3000 clientes y se posiciona como una de las empresas más destacadas en el rubro a nivel nacional.</p>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={"https://www.ikomiperu.com/assets/img/nosotros.jpg"}
          alt='Nosotros'
          width={980}
          height={600}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
