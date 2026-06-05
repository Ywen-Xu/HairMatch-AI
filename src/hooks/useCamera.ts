"use client";

import { useEffect, useRef, useState } from "react";

export const useCamera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const startCamera = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // 检查浏览器支持
      const mediaDevices =
        navigator.mediaDevices || (navigator as any).webkitGetUserMedia;

      if (!mediaDevices || !mediaDevices.getUserMedia) {
        throw new Error("您的浏览器不支持摄像头功能");
      }

      // 请求摄像头权限
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
        },
        audio: false,
      });

      streamRef.current = stream;

      // 将视频流绑定到 video 元素
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          setIsReady(true);
        };
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "无法打开摄像头";
      setError(errorMessage);
      setIsReady(false);
      console.error("摄像头错误:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsReady(false);
  };

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  return {
    videoRef,
    isReady,
    error,
    isLoading,
    startCamera,
    stopCamera,
  };
};
