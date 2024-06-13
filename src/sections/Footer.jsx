import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className="max-contianer">
      <div
        className="flex justify-between items-start 
        gap-20 flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col">
          <a href="#">
            <img
              src={footerLogo}
              alt="logo"
              width={140}
              height={66}
              className="object-contain m-0"
            />
          </a>
          <p
            className="sm:max-w-sm font-montserrat
             leading-7 text-base text-white-400 mt-6"
          >
            Get shoes ready for the new term at your nearest Nike Store. Find
            your perfect Size in store. Get Rewards
          </p>
          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((icon) => (
              <div
                className="bg-white flex justify-center 
              items-center rounded-full w-12 h-12 cursor-pointer"
              >
                <img src={icon.src} alt={icon.alt} width={26} height={26} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
