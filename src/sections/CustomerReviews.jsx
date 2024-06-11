import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

export default function CustomerReviews() {
  return (
    <section className="max-container">
      <h1 className="font-palanquin text-4xl font-bold text-center">
        What Our<span className="text-coral-red"> Customers </span> Say?
      </h1>
      <p className="info-text mt-4 text-center max-w-lg m-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div
        className="mt-24 flex justify-evenly items-center 
           flex-1 max-lg:flex-col gap-14"
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
}
2;
