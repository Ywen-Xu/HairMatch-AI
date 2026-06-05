"use client";

import { create } from "zustand";

interface AppState {
  selectedHairStyle: string;
  selectedColor: string;
  cameraReady: boolean;
  faceDetected: boolean;
  setHairStyle: (id: string) => void;
  setColor: (color: string) => void;
  setCameraReady: (ready: boolean) => void;
  setFaceDetected: (detected: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedHairStyle: "buzz",
  selectedColor: "#000000",
  cameraReady: false,
  faceDetected: false,
  setHairStyle: (id: string) => set({ selectedHairStyle: id }),
  setColor: (color: string) => set({ selectedColor: color }),
  setCameraReady: (ready: boolean) => set({ cameraReady: ready }),
  setFaceDetected: (detected: boolean) => set({ faceDetected: detected }),
}));