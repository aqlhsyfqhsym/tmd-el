"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AgmPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="1st Annual General Meeting"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#282162] shadow-md hover:bg-gray-100"
        >
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <Image
          src="/images/agm-popup.jpg"
          alt="1st Annual General Meeting on Wednesday, 7 October 2026 at 10:00 a.m. MYT"
          width={1024}
          height={1024}
          priority
          className="h-auto max-h-[90vh] w-full rounded-lg object-contain shadow-2xl"
        />
      </div>
    </div>
  );
};

export default AgmPopup;
