 
import ManagementTeam from "@/components/organisms/Management";
 import managementMembers from "@/data/management.json";

export default function BoardOfDirectors() {
    return (
        <div className="max-w-none bg-[#FBFBFB]">
            <div className="container mx-auto p-10 lg:px-48">
            
                <section className="py-10 md:py-8">
                    <ManagementTeam members={managementMembers} />
                </section>
            </div>
        </div>
    );
}
