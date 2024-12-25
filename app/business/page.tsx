import Hero from "@/components/organisms/Hero";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import Malaysia from "@/components/atoms/Paragraph";
import Singapore from "@/components/atoms/Paragraph";
import Facilities from "@/components/molecules/SubTitleParagraph";
import BusinessData from "@/data/business.json";
import SalesAndMarketing from "@/components/molecules/SubTitleParagraph";
import KeyStatistics from "@/components/molecules/SubTitleParagraph";
import OurCustomers from "@/components/atoms/Paragraph";
import ServiceDescription from "@/components/atoms/Paragraph";
import CoreService from "@/components/molecules/SubTitleOrderLine";
import Card from "@/components/atoms/CardDescription";

export default function Businesss() {
    const specificCard = BusinessData.ourservicecard.find(card => card.title === "Ship owners and operators");

    return (
        <div className="max-w-none bg-[#FBFBFB]">
            <Hero
                heading={BusinessData.hero.heading}
                subheading={BusinessData.hero.subheading}
                subheadingleft={BusinessData.hero.subheadingleft}
                image={BusinessData.hero.image}
            />
            <Vector />

            <div className="container mx-auto p-10 lg:px-48">
                <section className="py-4 md:py-8">

                    <Heading heading={BusinessData.aboutus.title} className="mb-11" />



                    <img
                        src="/images/business/malaysia.png"
                        alt="Malaysia"
                        className="w-auto object-cover mx-auto block pb-5"
                    />

                    <Malaysia
                        description={BusinessData.malaysia.description}
                    />

                    <img
                        src="/images/business/map.png"
                        alt="Map"
                        className="w-auto object-cover mx-auto block my-12 pb-12"
                    />

                    <img
                        src="/images/business/singapore.png"
                        alt="Singapore"
                        className="w-auto object-cover mx-auto block pb-5"
                    />

                    <div className="pb-5">
                        <Singapore
                            description={BusinessData.singapore.description}
                        />
                    </div>

                    <Facilities
                        title={BusinessData.facilities.title}
                        description={BusinessData.facilities.description}
                    />

                    <SalesAndMarketing
                        title={BusinessData.sales.title}
                        description={BusinessData.sales.description}
                    />

                    <Heading heading={BusinessData.ourservice.title} className="mt-16" />

                    <OurCustomers
                        description={BusinessData.ourservicedesc.description}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                        {BusinessData.ourservicecard.map((item, index) => (
                            <div className="w-full" key={index}>
                                <Card
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    backgroundImage={item.backgroundImage}
                                    gradient={item.gradient}
                                />
                            </div>
                        ))}
                    </div>

                    <Heading heading={BusinessData.service.title} className="mt-16" />

                    <ServiceDescription
                        description={BusinessData.servicedesc.description}
                    />

                    <KeyStatistics
                        title={BusinessData.key.title}
                        description={BusinessData.key.description}
                    />

                    <img
                        src="/images/business/key.png"
                        alt="Map"
                        className="w-auto object-cover mx-auto block my-12"
                    />

                    <CoreService
                        title="Core Services Section" services={BusinessData.coreService.services} details={BusinessData.coreService.details}
                    />

                </section>
            </div>


        </div>
    );
}
