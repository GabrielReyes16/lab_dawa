import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        ¿Qué es lo que nuestros
        <span className='text-coral-red'> clientes </span>
        opinan?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Estas son historias de clientes satisfechos con los servicios que han recibido de parte nuestra.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            {...review}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
