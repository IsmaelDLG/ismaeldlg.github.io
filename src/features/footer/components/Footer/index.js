import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white/60 dark:bg-gray-900/60 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <Typography className="font-medium text-discord-700">&copy; {year} Ismael DLG</Typography>
          <Typography variant="small" className="text-gray-600 dark:text-gray-300">
            Built with React + Tailwind · Hosted on GitHub Pages
          </Typography>
        </div>

        <div className="mt-3 md:mt-0 flex items-center space-x-3">
          <button
            onClick={() => (window.location.href = "mailto:ismadlg.works@gmail.com")}
            aria-label="Email"
            className="text-discord-700 hover:text-white hover:bg-discord-600 p-2 rounded-md"
          >
            <span className="fa-solid fa-envelope text-lg" />
          </button>
          <button
            onClick={() => window.open("https://github.com/ismaeldlg", "_blank")}
            aria-label="GitHub"
            className="text-discord-700 hover:text-white hover:bg-discord-600 p-2 rounded-md"
          >
            <span className="fa-brands fa-github text-lg" />
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/ismaeldlg/", "_blank")}
            aria-label="LinkedIn"
            className="text-discord-700 hover:text-white hover:bg-discord-600 p-2 rounded-md"
          >
            <span className="fa-brands fa-linkedin text-lg" />
          </button>
        </div>
      </div>
    </footer>
  );
}