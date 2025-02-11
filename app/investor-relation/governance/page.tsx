import Hero from "@/components/organisms/Hero";
import Vector from "@/components/atoms/Vector";
import GovernanceData from "@/data/governance.json";
import AnimationClient from "@/components/molecules/AnimationClient";
import TableComitte from "@/components/organisms/TableComponent/comitte";
import GovernanceDocuments from "@/components/organisms/CardGovernanceDownload";
import Heading from "@/components/atoms/Heading";

export default function Governance() {
  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={GovernanceData.hero.heading}
        subheading={GovernanceData.hero.subheading}
        subheadingleft={GovernanceData.hero.subheadingleft}
        image={GovernanceData.hero.image}
      />
      <Vector />

      <div className="container mx-auto p-10 lg:px-48" style={{paddingBottom: "160px"}}>
        <section className="py-4 md:py-8">
          <AnimationClient
            props={{
              initial: { opacity: 0, y: 100 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 1 },
              viewport: { once: true },
            }}
          >
          <Heading heading={GovernanceData.aboutus.title} className="mb-11 font-extrabold text-3xl" />=
            <GovernanceDocuments documents={GovernanceData.governanceDocuments} />
          </AnimationClient>
        </section>

        <section className="py-4 md:py-8">
          <AnimationClient
            props={{
              initial: { opacity: 0, y: 100 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 1 },
              viewport: { once: true },
            }}
          >
            <TableComitte data={GovernanceData.CommitteesTable} />
          </AnimationClient>
        </section>
      </div>    
    </div>
  );
}
