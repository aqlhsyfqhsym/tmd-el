"use client";

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface TimelineItem {
    year: string;
    events: string[];
}

interface AccordionProps {
    items: TimelineItem[];
    onToggle?: (isOpen: boolean, year?: string) => void;
}

const Accordion = ({ items, onToggle }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        const newOpenIndex = openIndex === index ? null : index;
        setOpenIndex(newOpenIndex);
        onToggle?.(newOpenIndex !== null, items[index]?.year);
    };

    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-gray-200 last:border-b-0"
                >
                    <button
                        className="w-full flex items-center justify-between py-4 text-left"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#1172BA]">
                            {item.year}
                        </h3>

                        <ChevronDownIcon
                            className={`w-6 h-6 text-[#272361] transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''
                                }`}
                        />
                    </button>
                    <div
                        className={`transition-all duration-200 overflow-hidden  rounded-xl ${openIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        <div className="pb-4 space-y-2 ">
                            {item.events.map((event, eventIndex) => (
                                <p key={eventIndex} className="text-black">
                                    • {event}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
