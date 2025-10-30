import { useState, useEffect } from "react";

import {
  Navbar,
  Typography,
  Button,
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

  const navList = (
    <ul className="flex flex-col lg:flex-row lg:justify-center lg:gap-6">
      <Typography as="li" variant="h6">
        <a href="#home" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="h6">
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography as="li" variant="h6">
        <a href="#stack" className="flex items-center">
          Stack
        </a>
      </Typography>
      <Typography as="li" variant="h6">
        <a href="#contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="fixed top-0 w-full max-w-full rounded-none shadow-bt-lg backdrop-blur text-blue-gray-900">
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
      <Collapse open={openNav} className="text-blue-gray-900">
        {navList}
      </Collapse>
    </Navbar>
  );
}

export default StickyNavbar;
