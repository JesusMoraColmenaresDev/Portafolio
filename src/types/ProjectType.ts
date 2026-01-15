import type { ItemIconProps } from "./ItemIconType";

export type Project = {
  title: string;
  description: string;
  technologies: ItemIconProps[];
  imageThumb: string; // Imagen pequeña para la card
  images: string[];   // Varias imágenes para el modal
  repo?: string;
  features?: string[];
};