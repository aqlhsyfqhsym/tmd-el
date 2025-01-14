import Image from "next/image";
import Hero from "@/components/organisms/Hero";
import Expertise from "@/components/organisms/CardImage";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import Subheading from "@/components/atoms/Subheading";
import MissionVisson from "@/components/molecules/SubTitleParagraph";
import Slider from "@/components/organisms/ImageSlider";

import HomeData from "@/data/home.json";

export default function Home() {
  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={HomeData.hero.heading}
        subheading={HomeData.hero.subheading}
        subheadingleft={HomeData.hero.subheadingleft}
        image={HomeData.hero.image} 
      />
      <Vector />
      
      <div className="container mx-auto p-10 lg:px-48">

        <section className="py-4 md:py-8">
          <Heading heading="About Us" className="mb-11" />
          <Subheading subheading={HomeData.aboutus.description} />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <MissionVisson
              title={HomeData.vission.title}
              description={HomeData.vission.description}
            />
            <MissionVisson
              title={HomeData.mission.title}
              description={HomeData.mission.description}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-extrabold text-[#1072BA] mb-4">
            Our Expertise
          </h2>
          <Expertise cards={HomeData.expertise.image} />
        </section>

      </div>

      <div style={{
        background:
          "linear-gradient(180deg, rgba(0, 169, 157, 0.12) 1.66%, rgba(17, 114, 186, 0.12) 98.86%)",
      }}>
        <div className="container mx-auto p-10 lg:px-48">

          <section className="py-4 md:py-8">
            <h2 className="text-3xl font-extrabold text-[#272361] mb-4">
              Latest Insights
            </h2>
            <p className="text-gray-700 text-base">
              Stay Updated on TMD Energy’s Market Performance . (Stock Quote)
            </p>


            <Image src="/images/home/stock-insight.png" width={400} height={400} alt="Latest Insights stock" className="w-10/12 mx-auto object-cover" />


          </section>

        </div>
      </div>

      <div className="container mx-auto p-10 lg:px-48">
        <section className="py-4 md:py-8 bg-[##dff4f5]">
          <Heading heading={HomeData.highlight.title} className="mb-4" />
          <Subheading subheading={HomeData.highlight.description} />
          <Slider slides={HomeData.highlight.slides} />

        </section>
      </div>

    </div>
  );
}
