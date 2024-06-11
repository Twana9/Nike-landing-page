import { star } from "../assets/icons";

export default function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div
      className="flex justify-center items-center
         flex-col "
    >
      <img
        src={imgURL}
        alt="customer"
        className="object-contain rounded-full w-[120px] h-[120px]"
      />
      <p className="info-text max-w-sm text-center mt-6 ">{feedback}</p>
      <div
        className="flex justify-center items-center
                      mt-3 gap-2.5"
      >
        <img src={star} alt="*" className="object-contain w-6 h-6 m-0" />
        <p
          className="text-xl font-montserrat
         text-slate-gray "
        >
          ({rating})
        </p>
      </div>
      <h2
        className="font-palanquin text-3xl font-bold
          mt-1 text-center"
      >
        {customerName}
      </h2>
    </div>
  );
}
