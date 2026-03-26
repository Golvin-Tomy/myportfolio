import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); 
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={goToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-500 dark:bg-cyan-400 text-white dark:text-black shadow-lg hover:bg-blue-600 dark:hover:bg-cyan-600 transition"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTop;