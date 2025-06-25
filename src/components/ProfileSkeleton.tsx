import React from "react";

const ProfileSkeleton = () => {
  return (
    <div className="inter-var">
      <div className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] borderone w-auto sm:w-[30rem] h-auto rounded-xl p-6 animate-pulse">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4 mb-4"></div>
        
        {/* SVG placeholder skeleton */}
        <div className="w-full h-[250px] bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center mt-4">
          <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
