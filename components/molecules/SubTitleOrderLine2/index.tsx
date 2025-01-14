interface SubTitleOrderLine2Props {
    title: string;
    description?: string;
    bulletPoints?: string[];
    subsidiaryIntro?: string;
    subsidiaries?: string[];
    additionalInfo?: string;
}

const SubTitleOrderLine2 = ({ 
    title, 
    description, 
    bulletPoints, 
    subsidiaryIntro,
    subsidiaries,
    additionalInfo 
}: SubTitleOrderLine2Props) => {
    return (
        <div className="mb-8 text-black">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            
            {description && (
                <p className="mb-4">{description}</p>
            )}

            {bulletPoints && bulletPoints.length > 0 && (
                <ul className="list-disc pl-6 mb-4">
                    {bulletPoints.map((point, index) => (
                        <li key={index} className="mb-2">{point}</li>
                    ))}
                </ul>
            )}

            {subsidiaries && subsidiaries.length > 0 && (
                <>
                    <p className="mb-4">{subsidiaryIntro}</p>
                    <ul className="list-disc pl-6 mb-4">
                        {subsidiaries.map((subsidiary, index) => (
                            <li key={index} className="mb-2">{subsidiary}</li>
                        ))}
                    </ul>
                </>
            )}

            {additionalInfo && (
                <p className="mt-4">{additionalInfo}</p>
            )}
        </div>
    );
};

export default SubTitleOrderLine2;
