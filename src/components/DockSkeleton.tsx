import React from "react";

const DockSkeleton = () => {
  return (
    <div className="relative">
      <div className="flex gap-8 justify-center items-center p-4">
        {/* Create 5 skeleton dock icons (4 social + 1 resume) */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DockSkeleton;
