import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";

import Hero from "@/components/organisms/Hero";
import About from "@/data/about.json";

export default function Sustainability() {
  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={About.hero.heading}
        subheading={About.hero.subheading}
        subheadingleft={About.hero.subheadingleft}
        image={About.hero.image}
      />
      <Vector />
      
            <div className="container mx-auto p-10 lg:px-48">
                <section className="py-4 md:py-8">
                    <Heading heading={About.ourpurpose.title} className="mb-11" />  
                </section>
            </div>
    </div>
  );
}
