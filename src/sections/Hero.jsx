import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
export default function Hero() {
  return (
    <section
      id="home"
      className="w-full  min-h-screen
    flex flex-col xl:flex-row justify-center items-center "
    >
      <div
        className="relative max-xl:padding-x pt-28  xl:w-2/5 w-full flex flex-col justify-center items-start
      "
      >
        <p className="font-montsserat text-coral-red text-xl">
          Our Summer Collection
        </p>
        <h1
          className="font-palanquin text-8xl max-sm:text-[72px]
           leading-[110px] font-bold mt-10"
        >
          <span
            className="xl:bg-white xl:whitespace-nowrap
          relative z-10 pr-10"
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p
          className="text-slate-600 font-montserrat text-lg
                       mt-10 mb-14 max-w-[420px] leading-8"
        >
          Discover staylish Nike arrivals,quality comfort,and innovation for
          your active life
        </p>
        <Button iconUrl={arrowRight}>Shop now</Button>
        <div
          className="flex  justify-start items-start w-full 
                     gap-16 flex-wrap  mt-20 "
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
        className="relative flex-1  flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover
       bg-center"
      >
        <img
          src={bigShoe1}
          alt="big shoe"
          className="object-contain relative z-10"
          width={610}
          height={500}
        />
      </div>
    </section>
  );
}
