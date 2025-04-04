import Image from "next/image";
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
import Bunkering from "@/components/molecules/SubTitleOrderLine2";
import BunkeringTitle from "@/components/atoms/HeadingSmall";

export default function Businesss() {
  // const specificCard = BusinessData.ourservicecard.find(card => card.title === "Ship owners and operators");

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
          <Image
            src="/images/business/malaysia-hd.png"
            width={800}
            height={610}
            alt="Malaysia"
            priority
            className="object-cover w-full pb-5"
          />

          <Malaysia description={BusinessData.malaysia.description} />

          <Image
            src="/images/business/map-hd.png"
            width={800}
            height={610}
            priority
            alt="Malaysia"
            className="object-contain mx-100 w-full xl:px-20  my-12  pb-12"
          />
          <Image
            src="/images/business/singapore-hd.png"
            width={800}
            height={610}
            priority
            alt="Singapore"
            className="object-cover w-full pb-5"
          />

          <div className="pb-5">
            <Singapore description={BusinessData.singapore.description} />
          </div>

          <BunkeringTitle title={BusinessData.bunkeringtitle.title} />

          <Bunkering
            title={BusinessData.bunkering.title}
            description={BusinessData.bunkering.mainDescription}
            bulletPoints={BusinessData.bunkering.fuelTypes}
            subsidiaryIntro={BusinessData.bunkering.subsidiaryIntro}
            subsidiaries={BusinessData.bunkering.subsidiaries}
            additionalInfo={BusinessData.bunkering.additionalInfo}
          />

          <Bunkering
            title={BusinessData.shipManagement.title}
            description={BusinessData.shipManagement.description}
          />

          <Bunkering
            title={BusinessData.vesselChartering.title}
            description={BusinessData.vesselChartering.description}
            additionalInfo={BusinessData.vesselChartering.additionalInfo}
          />

          <Facilities
            title={BusinessData.facilities.title}
            description={BusinessData.facilities.description}
          />

          <SalesAndMarketing
            title={BusinessData.sales.title}
            description={BusinessData.sales.description}
          />

          <Heading heading={BusinessData.ourservice.title} className="mt-16" />

          <OurCustomers description={BusinessData.ourservicedesc.description} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            {BusinessData.ourservicecard.map((item, index) => (
              <div
                className={`${
                  index === 0 ||
                  index === BusinessData.ourservicecard.length - 1
                    ? "col-span-1 md:col-span-2"
                    : "col-span-1 "
                } w-full`}
                key={index}
              >
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
          <Image
            src="/images/business/key-hd.png"
            width={800}
            height={610}
            priority
            alt="Singapore"
            className="object-cover w-auto mx-auto pb-5"
          />

          <CoreService
            title="Core Services Section"
            services={BusinessData.coreService.services}
            details={BusinessData.coreService.details}
          />
        </section>
      </div>
    </div>
  );
}
