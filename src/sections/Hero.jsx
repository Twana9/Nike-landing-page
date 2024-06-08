import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShowCard from "../components/ShowCard";
export default function Hero() {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full  min-h-screen
    flex flex-col xl:flex-row justify-center items-center
     max-container"
    >
      <div
        className="hero-left relative max-xl:padding-x   xl:w-2/5 
        w-full flex flex-col justify-center items-start 
      "
      >
        <p className="font-montsserat pt-20   text-coral-red text-xl">
          Our Summer Collection
        </p>
        <h1
          className="font-palanquin text-8xl max-sm:text-[70px]
           leading-[110px] font-bold mt-7"
        >
          <span
            className="xl:bg-white xl:whitespace-nowrap
          relative z-10 pr-2"
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-2">Nike</span> Shoes
        </h1>
        <p
          className="text-slate-600 font-montserrat text-lg
                       mt-4 mb-14 max-w-[420px] leading-8"
        >
          Discover staylish Nike arrivals,quality comfort,and innovation for
          your active life
        </p>
        <Button iconUrl={arrowRight}>Shop now</Button>
        <div
          className="flex  justify-start items-start w-full 
                     gap-16 flex-wrap  mt-16 "
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ///right section/////////////////////////////////// */}
      <div
        className="hero-right relative flex-1  
        flex justify-center items-center
      xl:min-h-[100vh] max-xl:py-40 max-xl:w-full bg-primary 
      bg-hero bg-cover ml-4
       bg-center max-sm:mt-6"
      >
        <img
          src={bigShoeImage}
          alt="big shoe"
          className="object-contain relative z-10"
          width={580}
          height={480}
        />
        <div
          className="flex absolute -bottom-[5%] sm:left-[10%] 
          justify-center items-center sm:gap-4 gap-6 max-sm:px-6"
        >
          {shoes.map((shoe) => (
            <ShowCard
              key={shoe.bigShoe}
              imgUrl={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
              bigShoeImage={bigShoeImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
