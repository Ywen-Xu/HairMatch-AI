"use client";

import { hairstyles } from "@/data/hairstyles";
import { useStore } from "@/store/useStore";

export const MaleHairPanel = () => {
  const { selectedHairStyle, setHairStyle } = useStore();
  const maleHairstyles = hairstyles.filter((h) => h.gender === "male");

  return (
    <div className="w-48 bg-secondary text-white p-4 border-r border-primary overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">男士发型</h2>
      <div className="space-y-2">
        {maleHairstyles.map((hairstyle) => (
          <button
            key={hairstyle.id}
            onClick={() => setHairStyle(hairstyle.id)}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
              selectedHairStyle === hairstyle.id
                ? "bg-accent text-white"
                : "bg-gray-700 text-gray-100 hover:bg-gray-600"
            }`}
          >
            {hairstyle.name}
          </button>
        ))}
      </div>
    </div>
  );
};