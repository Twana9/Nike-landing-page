import { shoe8 } from "../assets/images";
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
        <h1
          className="font-palanquin text-4xl max-sm:text-[46px]
            font-bold mt-7 leading-[56px]"
        >
          We provide You
          <span className=" text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h1>
        <p className="info-text  mt-5 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <button
          className="flex justify-center items-center font-montserrat
                     text-lg border bg-coral-red mt-10
                     text-white py-4 px-7 rounded-full
                     leading-none border-coral-red max-w-[210px]"
        >
          View details
        </button>
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
