export interface HairStyle {
  id: string;
  name: string;
  gender: "male" | "female";
  imageUrl: string;
  scaleFactor: number;
  offsetX: number;
  offsetY: number;
}