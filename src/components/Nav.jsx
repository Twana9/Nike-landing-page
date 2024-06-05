import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
export default function Nav() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function handleClick() {
    setIsHamburgerOpen(true);
  }
  function handleOverlayClick() {
    setIsHamburgerOpen(!isHamburgerOpen);
  }
  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isHamburgerOpen]);
  // useEffect(()=>{
  //   if(document.body.width )
  // })

  return (
    <header className="padding-x py-8 absolute z-10  w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className="flex-1 flex justify-center items-center gap-16  bg-pink-300
        max-lg:hidden"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href="item.href"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Hamburger
          handleClose={handleOverlayClick}
          isHamburgerOpen={isHamburgerOpen}
        />

        <div onClick={handleClick} className="hidden max-lg:block">
          <img src={hamburger} alt="Button" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

function Hamburger({ handleClose, isHamburgerOpen }) {
  return (
    <div
      className={`transition-all duration-[2s] ease ${
        !isHamburgerOpen && "translate-x-[10px]"
      }`}
    >
      <div
        className={` fixed top-0 right-0 w-3/4 h-full bg-pink-500 z-30 lg:hidden`}
      >
        <ul className="p-4">
          {navLinks.map((item) => (
            <li key={item.label} className="py-2">
              <a href={item.href} className="text-white" onClick={handleClose}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={handleClose}
        className="fixed inset-0 w-full h-full bg-black opacity-40  z-20 lg:hidden"
      ></div>
    </div>
  );
}
