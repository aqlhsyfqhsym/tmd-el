import Hero from "@/components/organisms/Hero";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import FilingsTable from "@/components/organisms/FilingsTable";
import FillingsData from "@/data/fillings.json";
import AnimationClient from "@/components/molecules/AnimationClient";


export default function InvestorRelation() {
  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={FillingsData.hero.heading}
        subheading={FillingsData.hero.subheading}
        subheadingleft={FillingsData.hero.subheadingleft}
        image={FillingsData.hero.image}
      />
      <Vector />

      <div className="container mx-auto p-10 lg:px-48">
      
        <section className="py-4 md:py-8">
        <AnimationClient
            props={{
              initial: { opacity: 0, y: 100 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 1 },
              viewport: { once: true },
            }}
          >
          <Heading heading={FillingsData.aboutus.title} className="mb-11 font-extrabold text-3xl" />
          <FilingsTable 
            filings={FillingsData.filings}
            filingTypes={FillingsData.filingTypes}
            years={FillingsData.years}
            />
          </AnimationClient>
        </section>
      </div>    
    </div>

  );
}
