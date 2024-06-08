import { star } from "../assets/icons";
export default function ({ product }) {
  return (
    <div
      className="flex flex-col items-start max-sm:items-center cursor-pointer"
      key={product.name}
    >
      <img src={product.imgURL} alt="popular shoes" height={282} width={282} />
      {/* //Raiting container//////////////////////////////////////////// */}
      <div
        className="mt-6 flex
       gap-2"
      >
        <img src={star} width={24} height={24} alt="star" />
        <span
          className=" text-lg
         text-slate-gray font-medium"
        >
          (4.5)
        </span>
      </div>
      {/* //product name + Price /////////////////////////////////////////////////////////// */}
      <p className="font-montserrat font-bold mt-2 ">{product.name}</p>
      <p className="text-coral-red font-semibold mt-1">{product.price}</p>
    </div>
  );
}
