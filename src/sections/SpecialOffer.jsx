import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

export default function SpecialOffer() {
  return (
    <section
      className="flex items-center justify-between 
      max-xl:flex-col-reverse max-container gap-10"
    >
      {/* left-section////////////////////////////////////////////// */}
      <div className="flex-1">
        <img
          src={offer}
          alt="image of offers"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      {/* ///Right section////////////////////////////////////////// */}
      <div
        className="flex flex-1 flex-col 
       "
      >
        <h2
          className="font-palanquin  capitalize text-4xl max-sm:text-[46px]
            font-bold mt-7 leading-[56px]"
        >
          <span className=" text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="info-text  mt-4 ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 ">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 mb-5">
          <Button iconUrl={arrowRight}>Shop now</Button>
          <Button
            background="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
