import React from 'react';
import Hero from '@/components/organisms/Hero';
import Vector from "@/components/atoms/Vector";
import MediaData from "@/data/media.json";
import Heading from "@/components/atoms/Heading";
import PressRelease from '@/components/organisms/PressRelease';

export default function Media() {
return (
    <div className="max-w-none bg-[#FBFBFB]">
    <Hero
        heading={MediaData.hero.heading}
        subheading={MediaData.hero.subheading}
        subheadingleft={MediaData.hero.subheading}
        image={MediaData.hero.image}
      />
      <Vector />
         <div className="container mx-auto p-10 lg:px-48">
         <section className="py-4 md:py-8"> 
           <Heading heading= {MediaData.pressrelease.title}/>
         </section>
       
         <section>
         <PressRelease cards={MediaData.presscards.cards} />
         </section>
         </div>
    </div>
  );
}