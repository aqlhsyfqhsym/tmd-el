"use client";
import React, { useState } from "react";
import layoutData from "@/data/layout-data.json";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-white shadow-sm hidden md:block">
      <div className="container mx-auto py-3 flex flex-col items-center gap-3">
        <img src="/images/tmd-logo-colored.png" alt="TMD Energy Logo" className="w-24" />
        <div className="w-full">
          <hr className="border-t border-gray-300" />
        </div>
        <ul className="flex items-center text-xs text-[#000] gap-6 lg:gap-8"> 
          <li>
            <a href={layoutData.links.home} className="hover:text-blue-600">
              Home
            </a>
          </li> 
          {layoutData.dropdowns.map((menu) => (
            <li className="relative group" key={menu.name}>
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="hover:text-blue-600 flex items-center space-x-1 focus:outline-none"
              >
                <span>{menu.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`h-4 w-4 transition-transform ${
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
              {openDropdown === menu.name && (
                <ul className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  {menu.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Additional Static Links */}
          <li>
            <a href={layoutData.links.career} className="hover:text-blue-600">
              Careers
            </a>
          </li>
          <li>
            <a href={layoutData.links.support} className="hover:text-blue-600">
              Support
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
