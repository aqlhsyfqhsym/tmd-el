import Image from "next/image";
import Hero from "@/components/organisms/Hero";
import Expertise from "@/components/organisms/CardImage";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import Subheading from "@/components/atoms/Subheading";
import MissionVisson from "@/components/molecules/SubTitleParagraph";
import HomeData from "@/data/home.json";

export default function Home() {
  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={HomeData.hero.heading}
        subheading={HomeData.hero.subheading}
        image={HomeData.hero.image} // Pass the image from JSON
      />
      <Vector />
      <div className="container mx-auto p-10 lg:px-48">

        <section className="py-4 md:py-8"> 
          <Heading heading= {HomeData.aboutus.title}/>
          <Subheading subheading= {HomeData.aboutus.description}/>
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
        <section className="py-4 md:py-8 bg-[##dff4f5]">
          <h2 className="text-3xl font-extrabold text-[#272361] mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-700 text-base">
            Stay Updated on TMD Energy’s Market Performance . (Stock Quote)
          </p>
          <img
            src="/images/stock-insight.png"
            alt="Latest Insights stock"
            className="w-full object-cover"
          />
        </section>
        <section className="py-4 md:py-8 bg-[##dff4f5]">
            <Heading heading= {HomeData.highlight.title}/>
          <Subheading subheading= {HomeData.highlight.description}/>
          <img
            src="/images/stock-insight.png"
            alt="Latest Insights stock"
            className="w-full object-cover"
          />
        </section>
      </div>
    </div>
  );
}
