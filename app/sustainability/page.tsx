import Hero from "@/components/organisms/Hero";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import CreditRisk from "@/components/molecules/SubTitleParagraph";
import InternalControl from "@/components/molecules/SubTitleParagraph";
import SustainData from "@/data/sustainability.json";
import Environmental from "@/components/molecules/SubTitleParagraph";
import Compliance from "@/components/molecules/SubTitleParagraph";
import Image from "next/image";

export default function Sustainability() {
  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={SustainData.hero.heading}
        subheading={SustainData.hero.subheading}
        subheadingleft={SustainData.hero.subheading}
        image={SustainData.hero.image}
      />
      <Vector />

      <div className="container mx-auto p-10 lg:px-48">
        <section className="py-4 md:py-8">
          <Heading heading={SustainData.aboutus.title} className="mb-11" />
          <CreditRisk
            title={SustainData.creditrisk.title}
            description={SustainData.creditrisk.description}
          />

          <InternalControl
            title={SustainData.internalcontrol.title}
            description={SustainData.internalcontrol.description}
          />
          <Image
            src="/images/sustainability/shipped2.png"
            width={800}
            height={610}
            priority
            alt="Internal Control"
            className="object-cover w-auto mx-auto xl:px-28 my-12  pb-12"
          />

          <InternalControl
            title={SustainData.internalcontrol.title}
            description={SustainData.internalcontrol.description}
          />

          <Environmental
            title={SustainData.environmental.title}
            description={SustainData.environmental.description}
          />

          <Compliance
            title={SustainData.compliance.title}
            description={SustainData.compliance.description}
          />
        </section>
      </div>
    </div>
  );
}
