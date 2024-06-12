import Button from "../components/Button";
export default function Subscribe() {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between
                  items-center max-lg:flex-col 
                   gap-10"
    >
      <h1
        className="font-palanquin text-4xl lg:max-w-md font-bold 
          leading-[68px]"
      >
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h1>
      <div
        className="flex lg:max-w-[40%] sm:border items-center
            p-2.5 rounded-full sm:border-black
            max-lg:w-full gap-5 max-sm:flex-col"
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div
          className="flex max-sm:justify-end items-center
              max-sm:w-full"
        >
          <Button fullWidth>Sign Up</Button>
        </div>
      </div>
    </section>
  );
}
