import { shoe8 } from "../assets/images";
import Button from "../components/Button";
export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between
     gap-10 items-center max-lg:flex-col
      max-container"
    >
      {/* ///left-section////////////////////////////////////// */}
      <div
        className="flex flex-1 flex-col justify-cetner
      items-start w-full"
      >
        <h2
          className="font-palanquin  capitalize text-4xl max-sm:text-[46px]
            font-bold mt-7 leading-[56px]"
        >
          We provide You
          <span className=" text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className="info-text  mt-5 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button>View details</Button>
        </div>
      </div>
      {/* ///Right section////////////////////////////////////// */}
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}
