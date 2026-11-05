'use client'
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const ScrollToTop = () => {
    const handleClick = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <Button
            onClick={handleClick}
            aria-label="Scroll to top"
            variant="default"
            size="icon"
            className="fixed bottom-5 right-5 h-10 w-10 lg:h-14 lg:w-14 border-2 border-white shadow-inner"
        >
            <ChevronUp className="h-5 w-5" />
        </Button>
    );
};
export default ScrollToTop
