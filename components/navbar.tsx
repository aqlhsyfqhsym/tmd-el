"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link for navigation

interface NavbarProps {
  data: {
    about: { label: string; href: string };
    business: { label: string; href: string };
    investor: { label: string; href: string };
    media: { label: string; href: string };
    sustainability: { label: string; href: string };
    career: { label: string; href: string };
    contactus: { label: string; href: string };
  };
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  return (
    <nav className="bg-white shadow-sm hidden md:block">
      <div className="container mx-auto py-3 flex flex-col items-center gap-3">
        <img
          src="/images/tmd-logo-colored.png"
          alt="TMD Energy Logo"
          className="w-24"
        />
        <div className="w-full">
          <hr className="border-t border-gray-300" />
        </div>
        <ul className="flex items-center text-xs text-[#000] gap-6 lg:gap-8">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className=" group">
             <Link href={data.about.href} className="hover:text-blue-600 flex items-center space-x-1">
              <span>{data.about.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 transition-transform group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </Link>
             <div className="absolute left-0 w-full bg-gray-50 shadow-lg z-50 hidden group-hover:grid">
              <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-4">
                {[
                  { title: "Vision & Mission", description: "Lorem Ipsum..." },
                  { title: "Corporate Profile", description: "Lorem Ipsum..." },
                  { title: "Corporate Structure", description: "Lorem Ipsum..." },
                  { title: "Board of Directors", description: "Lorem Ipsum..." },
                  { title: "Senior Management", description: "Lorem Ipsum..." },
                  { title: "Milestone", description: "Lorem Ipsum..." },
                  { title: "Corporate Information", description: "Lorem Ipsum..." },
                  { title: "Other Details", description: "Lorem Ipsum..." },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center mb-2">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4 text-blue-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 9l6 6 6-6"
                          />
                        </svg>
                      </div>
                      <h3 className="ml-2 font-semibold text-sm">{item.title}</h3>
                    </div>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link href={data.business.href} className="hover:text-blue-600">
              {data.business.label}
            </Link>
          </li>
          <li>
            <Link href={data.investor.href} className="hover:text-blue-600">
              {data.investor.label}
            </Link>
          </li>
          <li>
            <Link href={data.media.href} className="hover:text-blue-600">
              {data.media.label}
            </Link>
          </li>
          <li>
            <Link href={data.sustainability.href} className="hover:text-blue-600">
              {data.sustainability.label}
            </Link>
          </li>
          <li>
            <Link href={data.career.href} className="hover:text-blue-600">
              {data.career.label}
            </Link>
          </li>
          <li>
            <Link href={data.contactus.href} className="hover:text-blue-600">
              {data.contactus.label}
            </Link>
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
