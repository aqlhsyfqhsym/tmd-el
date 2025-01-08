import Heading from "@/components/atoms/Heading";
import CardBod from "@/components/organisms/CardBod";
import boardMembers from "@/data/bod.json";

export default function BoardOfDirectors() {
    return (
        <div className="max-w-none bg-[#FBFBFB]">
            <div className="container mx-auto p-10 lg:px-48">
                <section className="py-4 md:py-8">
                    <Heading heading="Board of Directors" className="mb-11 text-black text-4xl" />
                    <div className="space-y-8">
                        {boardMembers.map((member, index) => (
                            <CardBod
                                key={index}
                                name={member.name}
                                position={member.position}
                                description={member.description}
                                image={member.image}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
