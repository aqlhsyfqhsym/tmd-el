import Hero from "@/components/organisms/Hero";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import JoinUs from "@/components/molecules/SubTitleParagraph";
import ContactData from "@/data/contact.json";
import CardDescription from "@/components/atoms/Paragraph";
import ContactCard from "@/components/organisms/ContactCard";

export default function Contact() {
    return (
        <div className="max-w-none bg-[#FBFBFB]">
            <Hero
                heading={ContactData.hero.heading}
                subheading={ContactData.hero.subheading}
                subheadingleft={ContactData.hero.subheadingleft}
                image={ContactData.hero.image}
            />
            <Vector />
            <div className="container pb-40 mx-auto p-10 lg:px-48">
                <section className="py-4 md:py-8">
                    <Heading heading={ContactData.aboutus.title} />
                    <CardDescription
                        description={ContactData.contact.description}
                    />
                </section>
                <ContactCard />
            </div>
        </div>
    );
}
