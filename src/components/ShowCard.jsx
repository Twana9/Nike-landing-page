export default function ShowCard({ imgUrl, bigShoeImage, changeBigShoeImage }) {
  function handleClick() {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  }
  return (
    <div
      className={`border-2 rounded-xl
              ${
                bigShoeImage === imgUrl
                  ? "border-coral-red"
                  : "border-transparent"
              } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items.center bg-card
            bg-center bg-cover sm:w-40 sm:h-40"
      >
        <img
          src={imgUrl.thumbnail}
          alt="shoe thumbnails"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
}
