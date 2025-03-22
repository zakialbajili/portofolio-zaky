'use client'
import { ChevronUp } from "lucide-react";
const ScrollToTop = () => {
    const handleClick = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <button
            onClick={handleClick}
            className="fixed bottom-5 right-5 h-10 w-10 lg:h-14 lg:w-14 border-2 border-white bg-color-darkPurple shadow-inner text-white rounded-full flex items-center justify-center"
        >
            <ChevronUp />
        </button>
    );
};
export default ScrollToTop
