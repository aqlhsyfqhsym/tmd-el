import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";

import Hero from "@/components/organisms/Hero";
import About from "@/data/about.json";
import CardImage from "@/components/organisms/CardImage";
import Subheading from "@/components/atoms/Subheading";

import CorporateProfileFeature from "@/components/molecules/SubTitleParagraph";

 
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
          <CardImage cards={About.ourpurpose.image} />
        </section>

        <section className="py-4 md:py-8">
          <Heading heading={About.aboutus.title} className="mb-11" />
          <Subheading subheading={About.aboutus.description} />

          {About.aboutus.features.map((feature, index) => (
            <CorporateProfileFeature
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
