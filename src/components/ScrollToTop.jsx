import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 1000 && window.innerWidth < 768);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full border bg-white p-2 dark:text-black md:hidden lg:block"
    >
      <ChevronUpIcon />
    </button>
  ) : null;
}

export default ScrollToTop;
