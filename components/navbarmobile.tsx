"use client";
import React, { useState } from "react";
import Image from "next/image";

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-white shadow-sm block md:hidden">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}

        <Image
          src="/images/tmd-logo-colored.png"
          alt="TMD Energy Logo Mobile"
          width={800}
          height={610}
          priority
          className="w-20"
        />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content */}
      {openMenu && (
        <div className="bg-gray-50 shadow-md">
          <ul className="flex flex-col text-sm text-gray-800">
            <li className="border-b border-gray-200">
              <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                Home
              </a>
            </li>

            {[
              {
                name: "About Us",
                items: ["Our Story", "Leadership", "Careers"],
              },
              { name: "Business", items: ["Energy Solutions", "Projects"] },
              {
                name: "Investor Relations",
                items: ["Reports", "Shareholders"],
              },
              { name: "Media", items: ["News", "Gallery"] },
              {
                name: "Sustainability",
                items: ["Policies", "Initiatives"],
              },
            ].map((menu) => (
              <li key={menu.name} className="border-b border-gray-200">
                <button
                  onClick={() => toggleDropdown(menu.name)}
                  className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-blue-50 focus:outline-none"
                >
                  <span>{menu.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-5 h-5 transition-transform ${
                      openDropdown === menu.name ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>

                {/* Dropdown Content */}
                {openDropdown === menu.name && (
                  <ul className="pl-6 py-2 bg-gray-100">
                    {menu.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block py-1 text-gray-700 hover:text-blue-600"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="border-b border-gray-200">
              <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                Careers
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
