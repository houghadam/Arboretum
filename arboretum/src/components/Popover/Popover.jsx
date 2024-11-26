import React, { useState, useRef, useEffect } from "react";

const Popover = ({ children, title, content, paragraph }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popover-container relative flex justify-center">
      {isVisible && (
        <div
          id="popover-content"
          ref={popoverRef}
          className={`${
            paragraph ? "w-80 md:w-96" : "w-fit"
          } popover-content absolute px-4 py-2 z-50 bottom-[100%] mb-2 transition-all border bg-neutral-100 rounded-2xl shadow-lg`}
          role="dialog"
          aria-modal="true"
        >
          <h6 className="text-center text-nowrap font-semibold text-lg text-wsu-purple mb-2">
            {title}
          </h6>
          <p
            className={`${
              paragraph ? "text-left" : "text-center text-nowrap"
            } text-wsu-purple-dark`}
          >
            {content}
          </p>
        </div>
      )}
      <button
        ref={triggerRef}
        onClick={toggleVisibility}
        aria-haspopup="true"
        aria-expanded={isVisible}
        aria-controls="popover-content"
      >
        {children}
      </button>
    </div>
  );
};

export default Popover;
