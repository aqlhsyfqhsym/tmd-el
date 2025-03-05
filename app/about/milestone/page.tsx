'use client'

import About from "@/data/about.json";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import Milestone from "@/components/atoms/Paragraph";
import Subheading from "@/components/atoms/Subheading";
import EndOfMilestone from "@/components/atoms/Paragraph";
import EndOfMilestone2 from "@/components/atoms/Paragraph";
import Hero from "@/components/organisms/Hero";
import Accordion from "@/components/organisms/Accordion";
import Image from 'next/image';
import { useState } from 'react';

export default function AboutUs() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = (isOpen: boolean) => {
    setIsAccordionOpen(isOpen);
  };

  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={About.hero.heading}
        subheading={About.hero.subheading}
        subheadingleft={About.hero.subheadingleft}
        image={About.hero.image}
      />
      <Vector />

      <div className="container mx-auto p-10 lg:px-48" id="milestone">
        <Heading heading="Milestone" className="mb-11 text-4xl text-black" />
        <Subheading subheading={About.milestone.description} />

        <div className="pb-5">
          <Milestone description={About.milestone2.description} />
        </div>

        <div className="mt-8">
          <Accordion items={About.timeline} onToggle={handleAccordionToggle} />
        </div>

        {isAccordionOpen && (
          <div className="w-full my-8">
            <Image
              src="/images/career/line.png"
              alt="decorative bottom border"
              width={800}
              height={2}
              className="w-full"
              priority
            />
          </div>
        )}

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
