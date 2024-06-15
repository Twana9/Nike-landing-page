import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className="max-contianer">
      <div
        className="flex justify-between items-start 
        gap-20 flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col ">
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
                key={icon.alt}
                className="bg-white flex justify-center 
              items-center rounded-full w-12 h-12 cursor-pointer"
              >
                <img src={icon.src} alt={icon.alt} width={26} height={26} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-1 justify-between
         gap-20 lg:gap-10 flex-wrap "
        >
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                className="font-montserrat font-medium mb-6
                  leading-normal text-2xl text-white"
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat
                       leading-normal text-base hover:text-slate-gray 
                       cursor-pointer"
                  >
                    <a> {link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between text-white-400
           max-sm:flex-col max-sm:items-center mt-24"
      >
        <div
          className="flex flex-1 justify-start items-center
             font-montserrat gap-2 cursor-pointer"
        >
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}
