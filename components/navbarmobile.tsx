"use client";
import React, { useState } from "react";
import Link from "next/link";  

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
              <Link href="/" className="block px-4 py-2 hover:bg-blue-50">
                Home
              </Link>
            </li>
            {[
              {
                name: "About Us",
                link: "/about",
                items: [
                  { name: "Vision & Mission", link: "/about/#visionmission" },
                  { name: "Corporate Profile", link: "/about/#corporateprofile" },
                  { name: "Corporate Structure", link: "/about/corporate-structure" },
                  { name: "Board of Directors", link: "/about/#bod" },
                  { name: "Senior Management", link: "/about/bod/seniormanagement" },
                  { name: "Milestone", link: "/about/milestone" },
                  { name: "Corporate Information", link: "/about/corporate-information" },
                ],
              },
              {
                name: "Business",
                link: "/business",
                items: [
                  { name: " Oil Bunkering, Vessel Management and Vessel Chartering", link: "/business" }
                 ],
              },
              {
                name: "Investor Relations",
                link: "/investor-relation",
                items: [
                  { name: "Governance Documents", link: "/investor-relation/governance-documents"},
                  { name: "Financial Report", link: "/investor/shareholders" },
                  { name: "SEC Filings", link: "/investor-relation/sec-filings"  },
                  { name: "Stock Information", link: "/investor-relation/stock-information"  }
                ],
              },
              {
                name: "Media",
                link: "/media",
                items: [
                  { name: "Press Release", link:"/media/#pressrelease" },
                 ],
              },
              {
                name: "Sustainability",
                link: "/sustainability",
                items: [
                  { name: "Credit Risk", link:  "/sustainability/#creditrisk"},
                  { name: "Internal Control", link:  "/sustainability/#internalcontrol"},
                  { name: "Environmental, Social and Governance", link:  "/sustainability/#environmentalsocialandgovernance"},
                  { name: "Compliance and Risk Management", link:  "/sustainability/#complianceandriskmanagement"}
                 ],
              },
            ].map((menu) => (
              <li key={menu.name} className="border-b border-gray-200">
            
                <button
                  onClick={() => toggleDropdown(menu.name)}
                  className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-blue-50 focus:outline-none"
                >
                  <Link
                    href={menu.link}
                    className="block py-2 hover:bg-blue-50"
                  >
                    {menu.name}
                  </Link>{" "}
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
                      <li key={item.name}>
                        <Link
                          href={item.link}
                          className="block py-1 text-gray-700 hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="border-b border-gray-200">
              <Link href="/career" className="block px-4 py-2 hover:bg-blue-50">
                Careers
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link href="/contact" className="block px-4 py-2 hover:bg-blue-50">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
