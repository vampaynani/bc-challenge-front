import React from "react";

function Modal({ thumbnailUrl, onClose, onPrevClick, onNextClick }) {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 z-10 h-screen w-screen flex justify-center items-center"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-white/25 backdrop-blur-md"></div>
      <div className="relative z-10 flex gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevClick();
          }}
        >
          Prev
        </button>
        <img alt="thumbnail" src={thumbnailUrl} />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNextClick();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Modal;
