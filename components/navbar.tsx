"use client";
import React from "react";
import Image from "next/image";
import AnimationClient from "@/components/molecules/AnimationClient";

import Link from "next/link"; // Import Link for navigation

interface NavbarProps {
  data: {
    about: {
      label: string;
      href: string;
      links: { image: string; title: string; desc: string; href: string }[];
    };
    business: {
      label: string;
      href: string;
      links: { image: string; title: string; href: string }[];
    };
    investor: {
      label: string;
      href: string;
      links: { image: string; title: string; desc: string; href: string }[];
    };
    media: {
      label: string;
      href: string;
      links: { image: string; title: string; href: string }[];
    }; 
    career: { label: string; href: string };
    contactus: { label: string; href: string };
  };
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  return (
    <nav className="bg-white shadow-sm hidden md:block">
      <div className="container mx-auto py-3 flex flex-col items-center gap-3">
        <Link
          href="/"
          className="hover:text-blue-600 flex items-center space-x-1"
        >
          <Image
            src="/images/tmd-logo-colored.png"
            alt="TMD Energy Logo"
            width={800}
            height={610}
            priority
            className="w-24"
          />
        </Link>
        <div className="w-full">
          <hr className="border-t border-gray-300" />
        </div>
        <ul className="flex items-center text-xs text-[#000] gap-6 lg:gap-8">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              href={data.about.href}
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>{data.about.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </Link>
            <div className="absolute left-0 w-full bg-gray-50 shadow-lg z-50 hidden group-hover:grid transition-all duration-300 ease-in-out">
              <AnimationClient
                props={{
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 1, ease: "easeOut" },
                  viewport: { once: false },
                }}
              >
                <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-4">
                  {data.about.links.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <div className="h-full bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2 cursor-pointer">
                        <div className="flex items-start">
                          <div className="w-12">
                            <Image
                              src={item.image}
                              width={800}
                              height={800}
                              priority
                              alt="vector"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex flex-col px-2 w-full">
                            <h3 className="font-semibold text-sm">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 mt-1">{item.desc}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 text-right">
                          Learn more
                        </span>
                      </div>
                    </Link>
                  ))}
                  <div className="flex flex-col gap-2">
                    <Link href="/about/milestone">
                      <div className="bg-white px-4 py-2 border rounded-lg shadow-sm hover:shadow-md transition ">
                        <div className="flex items-center justify-start">
                          <div className="w-10">
                            <Image
                              src="/images/vector/navbar/milestone.svg"
                              width={800}
                              height={610}
                              priority
                              alt="vector"
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="flex flex-col ml-2">
                            <h3 className="font-semibold text-sm">
                              Milestone{" "}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/about/corporate-information">
                      <div className="bg-white px-4 py-2 border rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="flex items-center justify-start">
                          <div className="w-10 ">
                            <Image
                              src="/images/vector/navbar/corp-profile.svg"
                              width={800}
                              height={610}
                              priority
                              alt="vector"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex flex-col ml-2">
                            <h3 className="font-semibold text-sm">
                              {" "}
                              Corporate Information{" "}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </AnimationClient>
            </div>
          </li>
          <li className="group">
            <Link
              href={data.business.href}
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>{data.business.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </Link>

            <div className="absolute left-0 w-full bg-gray-50 shadow-lg z-50 hidden group-hover:grid transition-all duration-300 ease-in-out">
              <AnimationClient
                props={{
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 1, ease: "easeOut" },
                  viewport: { once: false },
                }}
              >
                <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-4">
                  <Link href="/business">
                    <div className="h-full bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2 cursor-pointer">
                      <div className="flex items-start">
                        <div className="w-12">
                          <Image
                            src="/images/vector/navbar/oil.svg"
                            width={800}
                            height={800}
                            priority
                            alt="vector"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col ml-2">
                          <h3 className="font-semibold text-sm">
                            Oil Bunkering, Vessel Management and Vessel
                            Chartering
                          </h3>
                          <ul className="text-gray-600 mt-1 list-disc ml-3">
                            <li>Service Location</li>
                            <li>Our Customer</li>
                            <li>Services Overview</li>
                          </ul>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 text-right">
                        Learn more
                      </span>
                    </div>
                  </Link>
                </div>
              </AnimationClient>
            </div>
          </li>
          <li className="group">
            <Link
              href={data.investor.href}
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>{data.investor.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </Link>

            <div className="absolute left-0 w-full bg-gray-50 shadow-lg z-50 hidden group-hover:grid transition-all duration-300 ease-in-out">
              <AnimationClient
                props={{
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 1, ease: "easeOut" },
                  viewport: { once: false },
                }}
              >
                <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-4">
                  <div className="row-span-2">
                    <Link href="/investor-relation/governance">
                      <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-8 cursor-pointer ">
                        <div className="flex">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Image
                              src="/images/vector/navbar/gov-doc.svg"
                              width={800}
                              height={610}
                              priority
                              alt="vector"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col ml-2 ">
                            <h3 className="font-semibold text-sm">
                              Governance Documents
                            </h3>
                            <ul className="text-gray-600 mt-1 list-disc ml-3">
                              <li>Code of Business Conduct and Ethics</li>
                              <li>Corporate Governance Guidelines</li>
                              <li>Insider Trading Policy</li>
                              <li>Whistle Blowing Policy</li>
                              <li>Board Diversity Disclosure</li>
                              <li>Audit Committee Charter</li>
                              <li>Compensation Committee Charter</li>
                              <li>
                                Nominating and Corporate Governance Committee
                                Charter
                              </li>
                            </ul>
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 text-right">
                          Learn more
                        </span>
                      </div>
                    </Link>
                  </div>
                  {data.investor.links.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <div className="h-full bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2 cursor-pointer">
                        <div className="flex items-start">
                          <div className=" w-12">
                            <Image
                              src={item.image}
                              width={800}
                              height={610}
                              priority
                              alt="vector"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex flex-col ml-2">
                            <h3 className="font-semibold text-sm">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 mt-1">{item.desc}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 text-right">
                          Learn more
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimationClient>
            </div>
          </li>
          <li className="group">
            <Link
              href={data.media.href}
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>{data.media.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </Link>

            <div className="absolute left-0 w-full bg-gray-50 shadow-lg z-50 hidden group-hover:grid transition-all duration-300 ease-in-out">
              <AnimationClient
                props={{
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 1, ease: "easeOut" },
                  viewport: { once: false },
                }}
              >
                <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-4">
                  <Link href="/media/#pressrelease">
                    <div className="h-full bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2 cursor-pointer">
                      <div className="flex items-start">
                        <div className="w-12">
                          {" "}
                          <Image
                            src="/images/vector/navbar/press.svg"
                            width={800}
                            height={610}
                            priority
                            alt="vector"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col ml-2 ">
                          <h3 className="font-semibold text-sm">
                            Press Release
                          </h3>
                          <p className="text-gray-600 mt-1">
                            Latest Updates and Announcements
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 text-right">
                        Learn more
                      </span>
                    </div>
                  </Link>
                </div>
              </AnimationClient>
            </div>
          </li>
          {/* <li className="group">
            <Link
              href={data.sustainability.href}
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>{data.sustainability.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </Link>

            <div className="absolute left-0 w-full bg-gray-50 shadow-lg z-50 hidden group-hover:grid transition-all duration-300 ease-in-out">
              <AnimationClient
                props={{
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 1, ease: "easeOut" },
                  viewport: { once: false },
                }}
              >
                <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-4">
                  {data.sustainability.links.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <div className="h-full bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2 cursor-pointer">
                        <div className="flex items-start">
                          <div className="w-12">
                            <Image
                              src={item.image}
                              width={800}
                              height={800}
                              priority
                              alt="vector"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex flex-col px-2 w-full">
                            <h3 className="font-semibold text-sm">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 mt-1">{item.desc}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 text-right">
                          Learn more
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimationClient>
            </div>
          </li> */}
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
