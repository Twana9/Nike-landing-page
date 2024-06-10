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
  //this prevents body scrolling when the dynamic nav is open
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
  //this will close the dynamic nav when it is open and the window resize to over lg divices
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setIsHamburgerOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHamburgerOpen]);

  return (
    <header className=" padding-x py-8 absolute z-50  w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className="flex-1 flex justify-center items-center gap-16
        max-lg:hidden"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-montserrat text-lg  font-medium">
          Sign in / Explore now
        </p>
        <Hamburger
          handleClose={handleOverlayClick}
          isHamburgerOpen={isHamburgerOpen}
        />

        <div
          onClick={handleClick}
          className="hidden max-lg:block cursor-pointer"
        >
          <img src={hamburger} alt="Button" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

function Hamburger({ handleClose, isHamburgerOpen }) {
  return (
    <div
      className={`fixed inset-0  transition-all duration-[0.35s] ease  ${
        !isHamburgerOpen && "translate-x-full"
      }`}
    >
      <div
        className={`absolute top-0 right-0 w-3/4 h-full bg-coral-red z-30 lg:hidden`}
      >
        <ul className="p-4">
          {navLinks.map((item) => (
            <li key={item.label} className="py-7 px-10 text-xl">
              <a href={item.href} className="text-white" onClick={handleClose}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={handleClose}
        className=" w-full h-full bg-black opacity-40  z-20 lg:hidden"
      ></div>
    </div>
  );
}
