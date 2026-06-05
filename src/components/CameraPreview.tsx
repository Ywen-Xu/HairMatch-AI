"use client";

import { useCamera } from "@/hooks/useCamera";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";

export const CameraPreview = () => {
  const { videoRef, isReady, error, isLoading } = useCamera();
  const { setCameraReady } = useStore();

  useEffect(() => {
    setCameraReady(isReady);
  }, [isReady, setCameraReady]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* 视频元素 */}
      {!error && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
        />
      )}

      {/* 加载状态 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>正在打开摄像头...</p>
          </div>
        </div>
      )}

      {/* 错误状态 */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
          <div className="text-center text-white p-6">
            <p className="text-lg font-semibold mb-2">摄像头错误</p>
            <p className="text-gray-300 mb-4">{error}</p>
            <button
              onClick={async () => {
                window.location.reload();
              }}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-600 transition"
            >
              刷新页面重试
            </button>
          </div>
        </div>
      )}

      {/* 摄像头准备就绪指示器 */}
      {isReady && (
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm z-20">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span>摄像头已启用</span>
        </div>
      )}
    </div>
  );
};
