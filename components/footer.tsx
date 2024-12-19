import Link from "next/link";

interface FooterData {
 
  pathlink: Array<{ name: string; href: string }>;  // No 'icon' here
  sociallinks: Array<{ name: string; href: string; icon: string }>;
}

const Footer = ({
  data: {   pathlink, sociallinks },
}: {
  data: FooterData;
}) => {
  return (
    <footer>
      <div className="bg-[#3d3b3c] flex flex-col md:flex-row items-center justify-center py-5 md:py-12">
        <div>
          <h3 className="font-medium">Newsletters</h3>
        </div>
        <div className="flex items-center py-4 px-6 rounded-lg">
          <form>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="block w-80 h-16 pl-6 font-medium px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Email"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-teal-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full bg-[#231F20] p-10 justify-center items-center flex flex-col gap-7">
        <img src="/images/tmd-logo.png" alt="TMD-EL Logo" className="w-28" />
        <div className="flex flex-col items-center md:flex-row gap-5">
          {pathlink.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="social-link"
            >
              <p>{link.name}</p> 
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-5">
          {sociallinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="social-link flex items-center justify-center transition-all"
            >
               <img
                src={link.icon}  
                alt={link.name}
                className="w-6 h-6" 
              />
              </Link>
          ))}
        </div> 
        <h6 className="font-normal text-xs">© Copyright 2024 TMD EL</h6>
      </div>
    </footer>
  );
};

export default Footer;
