interface VesselInfoProps {
    tankerName: string;
    capacity: string;
    pumpRate: string;
}

export default function VesselInfo({ tankerName, capacity, pumpRate }: VesselInfoProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 text-lg">
            <div className="flex flex-col items-start gap-1 sm:gap-2 pr-8">
                <span className="font-bold text-black">Tanker Name</span>
                <span className="text-black">{tankerName}</span>
            </div>
            <div className="flex flex-col items-start gap-1 sm:gap-2 sm:border-l-2 border-black sm:pl-16 sm:pl-4 pr-8">
                <span className="font-bold text-black">Capacity</span>
                <span className="text-black">{capacity}</span>
            </div>
            <div className="flex flex-col items-start gap-1 sm:gap-2 sm:border-l-2 border-black sm:pl-16 sm:pl-4">
                <span className="font-bold text-black">Pump Rate Min-Max(M3)</span>
                <span className="text-black">{pumpRate}</span>
            </div>
        </div>
    );
}