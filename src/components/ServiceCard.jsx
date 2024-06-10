export default function ServiceCard({ service }) {
  return (
    <div
      className="flex flex-col  justify-center items-start
         sm:w-[370px] sm:min-w-[350px] w-full px-12 py-16 shadow-3xl
          rounded-[20px]"
    >
      <div
        className="w-11 h-11 flex justify-center 
           items-center bg-coral-red rounded-full"
      >
        <img src={service.imgURL} alt="icon" />
      </div>
      <p
        className="font-palanquin text-3xl font-bold
        leading-normal mt-5"
      >
        {service.label}
      </p>
      <p
        className="font-montserrat text-slate-gray
         leading-normal break-words mt-4 text-lg"
      >
        {service.subtext}
      </p>
    </div>
  );
}
