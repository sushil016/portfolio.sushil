import React from "react";

interface ImageResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageResumeModal({ isOpen, onClose }: ImageResumeModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close resume viewer"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Resume image */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h2 id="resume-modal-title" className="text-lg font-semibold text-gray-800">
              Sushil's Resume
            </h2>
          </div>
          <div className="p-4 flex justify-center bg-white max-h-[75vh] overflow-auto">
            <img
              src="/resume.png"
              alt="Sushil Sahani's Resume"
              className="max-w-full h-auto shadow-lg"
              style={{ maxHeight: "70vh" }}
            />
          </div>
          <div className="p-4 bg-gray-50 border-t flex justify-center">
            <a
              href="/resume.png"
              download="Sushil_Sahani_Resume.png"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
