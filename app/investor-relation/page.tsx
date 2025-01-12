import Image from "next/image";
import Hero from "@/components/organisms/Hero";
import Vector from "@/components/atoms/Vector";
import Heading from "@/components/atoms/Heading";
import InvestorData from "@/data/investor.json";
import CodeOfBusiness from "@/components/molecules/SubTitleParagraph";
import Corporate from "@/components/molecules/SubTitleParagraph";
import InsiderTrading from "@/components/molecules/SubTitleParagraph";
import Whistle from "@/components/molecules/SubTitleParagraph";
import Board from "@/components/molecules/SubTitleParagraph";
import Audit from "@/components/molecules/SubTitleParagraph";
import Compensation from "@/components/molecules/SubTitleParagraph";
import Nominating from "@/components/molecules/SubTitleParagraph";
import Lorep from "@/components/molecules/SubTitleParagraph";

export default function Sustainability() {
  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={InvestorData.hero.heading}
        subheading={InvestorData.hero.subheading}
        subheadingleft={InvestorData.hero.subheadingleft}
        image={InvestorData.hero.image}
      />
      <Vector />

      <div className="container mx-auto p-10 lg:px-48">
        <section className="py-4 md:py-8">
          <Heading heading={InvestorData.aboutus.title} className="mb-11" />
          <CodeOfBusiness
            title={InvestorData.codeofbusiness.title}
            description={InvestorData.codeofbusiness.description}
          />

          <Corporate
            title={InvestorData.corporate.title}
            description={InvestorData.corporate.description}
          />

          <InsiderTrading
            title={InvestorData.insidertraining.title}
            description={InvestorData.insidertraining.description}
          />

          <Whistle
            title={InvestorData.whistle.title}
            description={InvestorData.whistle.description}
          />

          <Board
            title={InvestorData.board.title}
            description={InvestorData.board.description}
          />

          <Audit
            title={InvestorData.audit.title}
            description={InvestorData.audit.description}
          />

          <Compensation
            title={InvestorData.compensation.title}
            description={InvestorData.compensation.description}
          />

          <Nominating
            title={InvestorData.nominating.title}
            description={InvestorData.nominating.description}
          />

          <Heading
            heading={InvestorData.financial.title}
            className="mb-7 mt-12"
          />

          <p style={{ color: "#374151" }} className="mb-11">
            Lorem ipsum dolor sit amet consectetur. Sit congue feugiat interdum
            cum. Aliquam faucibus ultrices lobortis est eget ut vivamus. Risus
            erat aliquet egestas
          </p>

        

          <Image
            src="/images/investor/dashboard.png"
            width={800}
            height={610}
            priority
            alt="Financial Report"
            className="object-cover w-auto mx-auto xl:px-24 my-12  pb-12"
          />

          <Heading
            heading={InvestorData.fillings.title}
            className="mb-7 mt-12"
          />

          <Lorep
            title={InvestorData.lorep.title}
            description={InvestorData.lorep.description}
          />

          <Heading heading={InvestorData.stock.title} className="mb-7 mt-12" />

          <Lorep
            title={InvestorData.lorep.title}
            description={InvestorData.lorep.description}
          />
        </section>
      </div>
    </div>
  );
}
