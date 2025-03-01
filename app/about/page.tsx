import Image from "next/image";
import About from "@/data/about.json";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import Milestone from "@/components/atoms/Paragraph";
import Subheading from "@/components/atoms/Subheading";
import EndOfMilestone from "@/components/atoms/Paragraph";
import EndOfMilestone2 from "@/components/atoms/Paragraph";
import CorporateProfileFeature from "@/components/molecules/SubTitleParagraph";
import Hero from "@/components/organisms/Hero";
import Accordion from "@/components/organisms/Accordion";
import DirectorCard from "@/components/organisms/DirectorCard";
import TableDirector from "@/components/organisms/TableComponent";
import TableComitte from "@/components/organisms/TableComponent/comitte";
import CardAbout from "@/components/organisms/CardAbout";
import Link from "next/link"; // Import Link for navigation
import VesselCarousel from '@/components/organisms/VesselCarousel';

export default function AboutUs() {
  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={About.hero.heading}
        subheading={About.hero.subheading}
        subheadingleft={About.hero.subheadingleft}
        image={About.hero.image}
      />
      <Vector />
      <div className="container mx-auto p-10 lg:px-48" id="visionmission">
        <section className="py-4 md:py-8">
          <Heading heading={About.ourpurpose.title} className="mb-11" />
          <CardAbout cards={About.ourpurpose.image} />
        </section>

        <section className="py-4 md:py-8" id="corporateprofile">
          <Heading heading={About.aboutus.title} className="mb-11" />
          <Subheading subheading={About.aboutus.description} />

          {About.aboutus.features.map((feature, index) => {
            const isFleetSection = feature.title === "Our Fleet";
            return (
              <div key={index}>
                <CorporateProfileFeature
                  title={feature.title}
                  description={feature.description}
                />
                {isFleetSection && (
                  <div className="mt-8">
                    <VesselCarousel />
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>
     
      <div className="container mx-auto p-10 lg:px-48" id="bod">
        <Heading heading={About.directors.title} className="mb-11" />
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-11">
            {About.upperdirector.map((upperdirector, index) => (
              <DirectorCard
                key={index}
                name={upperdirector.name}
                title={upperdirector.title}
                imageSrc={upperdirector.imageSrc}
                imageSrcFull={upperdirector.imageSrcFull}
                description={upperdirector.description}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-11">
            {About.lowerdirector.map((lowerdirector, index) => (
              <DirectorCard
                key={index}
                name={lowerdirector.name}
                title={lowerdirector.title}
                imageSrc={lowerdirector.imageSrc}
                imageSrcFull={lowerdirector.imageSrcFull}
                description={lowerdirector.description}


              />
            ))}
          </div>
        </div>
        <TableDirector
          left={About.directortable.left}
          right={About.directortable.right}
          data={About.directortable.table}
        />

        <TableComitte data={About.CommitteesTable} />
      </div>

      <div className="container mx-auto p-10 lg:px-48" id="milestone">
        <Heading heading="Milestone" className="mb-11 text-4xl text-black" />
        <Subheading subheading={About.milestone.description} />

        <div className="pb-5">
          <Milestone description={About.milestone2.description} />
        </div>

        <div className="mt-8">
          <Accordion items={About.timeline} />
        </div>
        <div className="mt-8">
          <EndOfMilestone description={About.milestone3.description} />
        </div>
        <div className="mt-0">
          <EndOfMilestone2 description={About.milestone4.description} />
        </div>
      </div>
    </div>
  );
}
