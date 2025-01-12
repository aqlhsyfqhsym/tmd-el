import Hero from "@/components/organisms/Hero";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import JoinUs from "@/components/molecules/SubTitleParagraph";
import CareerData from "@/data/career.json";
import CareerCard from "@/components/organisms/Career";

export default function Career() {
    return (
        <div className="max-w-none bg-[#FBFBFB]">
            <Hero
                heading={CareerData.hero.heading}
                subheading={CareerData.hero.subheading}
                subheadingleft={CareerData.hero.subheadingleft}
                image={CareerData.hero.image}
            />
            <Vector />

            <div className="container mx-auto p-10 lg:px-48">
                <section className="py-4 md:py-8">
                    <Heading heading={CareerData.aboutus.title} className="mb-11" />
                    <JoinUs
                        title={<span style={{ color: '#1072BA', fontSize: '28px' }}>{CareerData.joinus.title}</span>}
                        description={CareerData.joinus.description}
                    />

                </section>
                <CareerCard careers={CareerData.careers} />
            </div>

        </div>
    );
}
