import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import Image from "next/image";
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
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 169, 157, 0.12) 1.66%, rgba(17, 114, 186, 0.12) 98.86%)",
        }}
      >
        <div className="container mx-auto p-10 lg:px-48">
          <section className="py-4 md:py-8">
            <h2 className="text-3xl font-extrabold text-[#272361] mb-4">
              Latest Insights
            </h2>
            <p className="text-gray-700 text-base">
              Stay Updated on TMD Energy’s Market Performance . (Stock Quote)
            </p>

            <Image
              src="/images/about/corporate-structure.png"
              alt="Latest Insights stock"
              width={800}
              height={610}
              priority
              className="w-auto mx-auto my-auto object-cover"
            />


          </section>
        </div>
      </div>
    </div>
  );
}
