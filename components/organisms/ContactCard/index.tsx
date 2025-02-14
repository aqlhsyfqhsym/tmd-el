import React from "react";

const ContactCard = () => {
  return (
    <div className="flex bg-white shadow-2xl rounded-sm overflow-hidden">
      <div className="bg-[#272361] text-white pl-12 pr-8 py-12  w-2/5">
        <h2 className="text-3xl font-bold pb-4">Contact Information</h2>
        <p className="pb-4">Say something to start a live chat!</p>
        <div className="mt-4 space-y-2">
          <div className="flex gap-2 items-start pb-2">
            <span className="text-xl">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="bxs:phone-call">
                  <path
                    id="Vector"
                    d="M15.3024 8.30443H16.8125C16.8125 4.4312 13.8883 1.51004 10.0098 1.51004V3.02007C13.0766 3.02007 15.3024 5.24208 15.3024 8.30443Z"
                    fill="white"
                  />
                  <path
                    id="Vector_2"
                    d="M10.0181 6.04012C11.6059 6.04012 12.2832 6.71737 12.2832 8.30517H13.7932C13.7932 5.87025 12.4531 4.53009 10.0181 4.53009V6.04012ZM12.6018 10.1497C12.4567 10.0178 12.2661 9.94749 12.0701 9.95355C11.8742 9.95961 11.6882 10.0416 11.5516 10.1821L9.74483 12.0402C9.30994 11.9572 8.43564 11.6846 7.53566 10.7869C6.63568 9.88618 6.36312 9.0096 6.28233 8.57773L8.13891 6.77022C8.27966 6.63366 8.36175 6.4477 8.36781 6.25168C8.37387 6.05567 8.30342 5.86499 8.17138 5.72L5.38159 2.65237C5.2495 2.50692 5.06591 2.41869 4.86981 2.40643C4.67371 2.39416 4.48056 2.45882 4.33137 2.58668L2.69298 3.99176C2.56245 4.12277 2.48454 4.29713 2.47403 4.48177C2.4627 4.67052 2.24677 9.14173 5.7138 12.6103C8.7384 15.6341 12.5271 15.8553 13.5705 15.8553C13.723 15.8553 13.8166 15.8508 13.8416 15.8493C14.0262 15.839 14.2004 15.7607 14.3308 15.6296L15.7351 13.9904C15.8631 13.8414 15.9279 13.6483 15.9158 13.4522C15.9036 13.2561 15.8155 13.0724 15.6702 12.9402L12.6018 10.1497Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <p>(+603) 6419 1266</p>
          </div>
          <div className="flex gap-2 items-start pb-2">
            <span className="text-xl">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ic:sharp-email">
                  <path
                    id="Vector"
                    d="M16.8122 3.14046H1.71191V15.2207H16.8122V3.14046ZM15.3022 6.16053L9.26208 9.93561L3.22195 6.16053V4.6505L9.26208 8.42558L15.3022 4.6505V6.16053Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <p>corporate@tmdel.com</p>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-xl">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="carbon:location-filled">
                  <path
                    id="Vector"
                    d="M9.26112 1.37331C7.60971 1.37525 6.0265 2.03214 4.85878 3.19986C3.69106 4.36758 3.03418 5.95079 3.03223 7.60219C3.03026 8.95172 3.47108 10.2646 4.28707 11.3395C4.28707 11.3395 4.45695 11.5632 4.4847 11.5955L9.26112 17.2286L14.0398 11.5926C14.0647 11.5626 14.2352 11.3395 14.2352 11.3395L14.2357 11.3378C15.0513 10.2634 15.4919 8.9511 15.49 7.60219C15.4881 5.95079 14.8312 4.36758 13.6635 3.19986C12.4957 2.03214 10.9125 1.37525 9.26112 1.37331ZM9.26112 9.86724C8.81313 9.86724 8.37521 9.7344 8.00272 9.48551C7.63024 9.23662 7.33992 8.88287 7.16849 8.46899C6.99705 8.0551 6.95219 7.59968 7.03959 7.1603C7.12699 6.72092 7.34271 6.31733 7.65949 6.00056C7.97626 5.68379 8.37985 5.46806 8.81923 5.38066C9.25861 5.29327 9.71403 5.33812 10.1279 5.50956C10.5418 5.68099 10.8956 5.97131 11.1444 6.3438C11.3933 6.71628 11.5262 7.15421 11.5262 7.60219C11.5254 8.20269 11.2865 8.77838 10.8619 9.20299C10.4373 9.62761 9.86162 9.86649 9.26112 9.86724Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <div className="">
              <p className="font-bold">TMD Energy Limited</p>
              <p className="mt-1 text-sm">
                B-10-06, Block B, Plaza Mont Kiara,<br/> 
                No. 2, Jalan Kiara,<br/>
                 Mont Kiara, 50480 Kuala Lumpur,<br/>
                  Wilayah Persekutuan,<br/> West Malaysia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 w-3/5 mx-6 mt-6 mb-12">
        <form className="mt-6 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label
              htmlFor="firstName"
              className="block mb-1 text-black font-semibold"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              className="border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="lastName"
              className="block mb-1 text-black font-semibold"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              className="border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="email"
              className="block mb-1 text-black font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="phone"
              className="block mb-1 text-black font-semibold"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="012-34567890"
              className="border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          <div className="col-span-2 mb-2">
            <p className="mb-1 text-black font-semibold">Select Subject?</p>
            <div className="flex items-center">
              <input
                type="radio"
                id="generalInquiry"
                name="subject"
                value="General Inquiry"
                className="mr-2"
              />
              <label htmlFor="generalInquiry" className="mr-4 text-black">
                General Inquiry
              </label>

              <input
                type="radio"
                id="generalInquiry"
                name="subject"
                value="General Inquiry"
                className="mr-2"
              />
              <label htmlFor="generalInquiry" className="mr-4 text-black">
                Contact
              </label>
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block mb-1 text-black font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message.."
              className="text-black border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00A99D] to-[#1172BA] text-white rounded py-3 px-8 font-inter font-semibold"
              style={{ fontSize: "12px" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
