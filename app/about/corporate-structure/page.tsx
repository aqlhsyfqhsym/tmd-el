import Image from "next/image";
import About from "@/data/about.json";
import Vector from "@/components/atoms/Vector"; 
import Hero from "@/components/organisms/Hero"; 
import Link from "next/link"; // Import Link for navigation

export default function AboutUs() {
  return (
    <div className="max-w-none bg-[#dff5f4]">
      <Hero
        heading={About.hero.heading}
        subheading={About.hero.subheading}
        subheadingleft={About.hero.subheadingleft}
        image={About.hero.image}
      />
      <Vector />
  
         <div
          className="container mx-auto p-10 lg:px-48 py-20"
          id="corporatestructure"
        >
          <section className="py-4 md:py-8 bg-white rounded-3xl p-10 custom-shadow">
            <h2 className="text-xl md:text-3xl text-center font-extrabold text-[#272361] mb-4">
              Corporate Structure
            </h2>
            <div className="relative ">
              <Link
                href="https://www.straits-energyresources.com/"
                target="_blank"
              >
                <Image
                  src="/images/about/corporate-structure.png"
                  alt="Corporate Structure"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-cover"
                />
              </Link>
              <Link href="https://tmd-sb.com/" target="_blank">
                <div className="absolute md:block hidden top-0 left-1/2 transform -translate-x-1/2 w-full">
                  <Image
                    src="/images/about/tmd1.png"
                    alt="TMD1"
                    width={800}
                    height={800}
                    priority
                    className="w-full h-full"
                  />
                </div>
              </Link>
 
            </div>
          </section>
        </div>
      <Vector />

     </div>
  );
}
