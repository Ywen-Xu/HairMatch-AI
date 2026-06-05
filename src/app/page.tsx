"use client";

import { Header } from "@/components/Header";
import { MaleHairPanel } from "@/components/MaleHairPanel";
import { CameraPreview } from "@/components/CameraPreview";
import { FemaleHairPanel } from "@/components/FemaleHairPanel";
import { ColorControlPanel } from "@/components/ColorControlPanel";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-primary">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Male Hairstyles */}
        <MaleHairPanel />

        {/* Center - Camera Preview */}
        <CameraPreview />

        {/* Right Panel - Female Hairstyles */}
        <FemaleHairPanel />
      </div>

      {/* Bottom Panel - Color Control */}
      <ColorControlPanel />
    </div>
  );
}