interface CarouselNavigationProps {
    onPrevious: () => void;
    onNext: () => void;
  }
  
  export default function CarouselNavigation({ onPrevious, onNext }: CarouselNavigationProps) {
    return (
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={onPrevious}
          className="p-2 text-white bg-black/50 hover:bg-black/75 rounded-r"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="p-2 text-white bg-black/50 hover:bg-black/75 rounded-l"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    );
  }