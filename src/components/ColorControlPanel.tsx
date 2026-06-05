"use client";

import { useStore } from "@/store/useStore";

const PRESET_COLORS = [
  { name: "黑色", value: "#000000" },
  { name: "深棕", value: "#5c4033" },
  { name: "浅棕", value: "#8d6e63" },
  { name: "金色", value: "#d4af37" },
  { name: "银灰", value: "#c0c0c0" },
  { name: "蓝色", value: "#1e90ff" },
  { name: "粉色", value: "#ff69b4" },
];

export const ColorControlPanel = () => {
  const { selectedColor, setColor } = useStore();

  return (
    <div className="bg-primary text-white p-6 border-t border-secondary">
      <h3 className="text-lg font-bold mb-4">发色调整</h3>
      <div className="flex flex-wrap gap-3 items-center">
        {PRESET_COLORS.map((color) => (
          <button
            key={color.value}
            onClick={() => setColor(color.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
              selectedColor === color.value
                ? "ring-2 ring-accent bg-gray-700"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            title={color.name}
          >
            <div
              className="w-6 h-6 rounded border-2 border-gray-500"
              style={{ backgroundColor: color.value }}
            />
            <span>{color.name}</span>
          </button>
        ))}
        <div className="flex items-center gap-2">
          <span className="ml-4">自定义：</span>
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setColor(e.target.value)}
            className="w-12 h-10 rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};