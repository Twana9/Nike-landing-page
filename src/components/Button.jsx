export default function Button({ iconUrl, children }) {
  return (
    <button
      className="flex justify-center items-center font-montserrat
     text-lg border bg-coral-red text-white py-4 px-7 rounded-full
     leading-none border-coral-red gap-2"
    >
      {children}
      <img
        src={iconUrl}
        alt="Arrow icon"
        className="h-5 w-5  ml-2 rounded-full"
      />
    </button>
  );
}
