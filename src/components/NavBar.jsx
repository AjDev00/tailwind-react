import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }

  function handleLinkClick() {
    setNav(false);
  }

  const links = [
    {
      id: 1,
      link: "Home",
    },

    {
      id: 2,
      link: "About",
    },

    {
      id: 3,
      link: "Portfolios",
    },

    {
      id: 4,
      link: "Experience",
    },

    {
      id: 5,
      link: "Contact Me",
    },
  ];

  return (
    <div className="text-white">
      <div className="flex fixed w-full h-20 justify-between p-3 px-5 bg-gradient-to-r from-orange-300 to-orange-500 shadow-md shadow-gray-1000">
        <h3 className="pt-3 font-bold text-3xl font-vibes md:ml-7">AjDev_0x</h3>

        {/* larger screen nav. */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex flex-row justify-between items-center cursor-pointer font-vibes">
            {links.map((link) => (
              <li className="mr-10 hover:scale-125 duration-200" key={link.id}>
                <Link to={link.link} smooth duration={700}>
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile phone nav. */}
        <button onClick={handleClick} className="md:hidden cursor-pointer z-10">
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
        {nav && (
          <ul className="font-vibes animate-trans-left pb-14 h-screen flex flex-col justify-center items-center bg-orange-300 absolute inset-y-0 right-0 w-64 opacity-100">
            {links.map((link) => (
              <li
                className="py-5 cursor-pointer text-2xl hover:scale-125 duration-200"
                key={link.id}
              >
                <Link
                  onClick={handleLinkClick}
                  to={link.link}
                  smooth
                  duration={700}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
