import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const links = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Privacy Policy",
    href: "/",
  },
  {
    label: "Licensing",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export const Footer = () => {
    return (
      <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-20 w-20" alt="logo" />
            <span className="self-center text-3xl text-pink-600 font-semibold whitespace-nowrap">
              Postify
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-secondary me-4 md:me-6 transition"
                >
                  {link.label}
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <hr className="my-6 border border-[#1f1f28] sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <Link to="/" className="hover:text-secondary">
            Postify
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    );
}