import React from "react";

export default function CorporateInformation() {
  return (
    <div className="container mx-auto p-36 lg:px-48">
      <h1 className="text-5xl font-bold mb-12 text-black">
        Corporate Information
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 my-20 text-black">
        <div>
          <h2 className="font-bold mb-6">Principal Executive Office</h2>
          <div className="space-y-1">
            <p>
              B-10-06, Block B, Plaza Mont Kiara,
              <br />
            </p>
            <p>No. 2, Jalan Kiara, </p>
            <p>Mont Kiara, 50480 Kuala Lumpur,</p>
            <p>Wilayah Persekutuan,</p>
            <p>West Malaysia.</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-6">
            Agent for Services of
            <br />
            Process in the United States
          </h2>
          <div className="space-y-1">
            <p>Cogency Global Inc.</p>
            <p>122 East 42nd Street,</p>
            <p>18th Floor, New York, NY10168.</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-6">Registered Office</h2>
          <div className="space-y-1">
            <p>Office of Ogier Global (Cayman) Limited,</p>
            <p>89 Nexus Way, Camana Bay, Grand Cayman,</p>
            <p>KY1-9009, Cayman Islands.</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-6">Auditors</h2>
          <div className="space-y-1">
            <p>J&S Associates PLT</p>
            <p>B-11-14, Megan Avenue II,</p>
            <p>12 Jalan Yap Kwan Seng,</p>
            <p>50450 Kuala Lumpur, Malaysia</p>
            
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-6">Transfer Agent</h2>
          <div className="space-y-1">
              <p>VStock Transfer, LLC</p>
              <p>18 Lafayette Place,</p>
              <p>Woodmere, New York 11598.</p>
            </div>
          </div>
        </div>

        
      </div>
  );
}
