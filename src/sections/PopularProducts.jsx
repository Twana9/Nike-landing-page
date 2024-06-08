import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
export default function PopularProducts() {
  return (
    <section id="products" className="min-h-screen max-smLmt-12 max-container ">
      <div className="flex flex-col justify-start  gap-5">
        <h1 className="font-monsserat text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p
          className="text-2xl lg:ma-w-lg  mt-2 font-montserrat
        text-slate-gray"
        >
          Experience top-notch quality and style with our sought-after selctions
          Discover a world of comfort , design and value
        </p>
        <div
          className="grid 
           items-center grid-cols-1 
          sm:grid-cols-2 md:grid-cols-3
         lg:grid-cols-4  gap-14 
         sm:gap-6 mt-16 xl:px-16 wide:px-[100px]"
        >
          {products.map((product) => (
            <PopularProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
