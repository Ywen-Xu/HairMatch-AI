"use client";

import { useStore } from "@/store/useStore";

export const CameraPreview = () => {
  const { selectedColor } = useStore();

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-900 relative">
      <div
        className="w-full h-full flex items-center justify-center text-white text-xl font-semibold"
        style={{ backgroundColor: selectedColor + "20" }}
      >
        <div className="text-center">
          <div className="w-64 h-80 bg-gray-800 border-2 border-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-gray-400">
              <p>摄像头预览区</p>
              <p className="text-sm mt-2">(暂无摄像头)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};