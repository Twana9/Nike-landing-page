export default function Button({
  iconUrl,
  children,
  background,
  textColor,
  borderColor,
}) {
  return (
    <button
      className={`flex justify-center items-center font-montserrat
     text-lg border   py-4 px-7 rounded-full
     leading-none  gap-2 transform 
     hover:translate-y-1 active:translate-y-2
     ${
       background
         ? `${background} ${textColor} ${borderColor}`
         : "border-coral-red bg-coral-red text-white"
     } `}
    >
      {children}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="Arrow icon"
          className="h-5 w-5  ml-2 rounded-full"
        />
      )}
    </button>
  );
}
