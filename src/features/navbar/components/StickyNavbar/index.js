import { useState, useEffect } from "react";

import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#navbar")) {
        setOpenNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navList = (
    <ul className="flex flex-col lg:flex-row lg:justify-center lg:gap-6">
      <Typography as="li" variant="h6">
        <a href="#home" className="flex items-center text-discord-700 hover:text-discord-900">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="h6">
        <a href="#about" className="flex items-center text-discord-700 hover:text-discord-900">
          About
        </a>
      </Typography>
      {/* TODO: Add Stack section
      <Typography as="li" variant="h6">
        <a href="#stack" className="flex items-center">
          Stack
        </a>
      </Typography>
       */}
      <Typography as="li" variant="h6">
        <a href="#contact" className="flex items-center text-discord-700 hover:text-discord-900">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar id="navbar" className="sticky md:fixed top-0 w-full max-w-full rounded-none shadow-bt-lg text-discord-700 z-10 bg-white/80 backdrop-blur">
      <div className="flex items-center justify-center">
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto lg:hidden"
          onClick={() => setOpenNav((prev) => !prev)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="text-discord-700">
        {navList}
      </Collapse>
    </Navbar>
  );
}

export default StickyNavbar;
