import React, { useState } from "react";
import logo from "../assets/logo325.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex gradient-border ">
          <div className="flex items-center justify-between gap-6">
            <div >
              <a href="#">
                <img src={logo} alt="logo" width={150} />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-yellow-400 relative z-10" // Add relative and z-10
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
            <div className="flex items-center justify-between">
                <div>
                    <a href="#">
                    <img src={logo} alt="logo" width={90} className="m-2"/>
                    </a>
                </div>
                <div className="flex items-center">
                    <button
                    className="lg:hidden focus:outline-none"
                    onClick={toggleMobileMenu}
                    >
                    {isMobileMenuOpen ? (
                        <FaTimes className="m-2 h-6 w-5" />
                    ) : (<FaBars className="m-2 h-6 w-5" />)}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <ul className="ml-5 mt-4 flex flex-col gap-4 backdrop-blur-md">
                {NAVIGATION_LINKS.map((item, index) => (
                    <li key={index}>
                    <a
                        className="block w-full text-lg"
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                    >
                        {item.label}
                    </a>
                    </li>
                ))}
                </ul>
            )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
