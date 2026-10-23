import { profession } from "./../data/general";
import { type LucideIcon } from "lucide-react";

export type Nav_Data_type = {
  profession: string;
  names: string;
  links: {
    label: string;
    link: string;
  }[];
  theme: {
    light: LucideIcon;
    dark: LucideIcon;
  };
  cta: string;
};
