import { ROUTES } from "@/constants/routes";
import { logo, names, profession } from "./general";
import { Moon, Sun } from "lucide-react";
import { Nav_Data_type } from "@/types/nav";

export const Nav_Data: Nav_Data_type = {
  profession,
  names,
  links: [
    {
      label: "About",
      link: ROUTES.ABOUT,
    },
  ],
  theme: {
    light: Sun,
    dark: Moon,
  },
  cta: "let's Connect",
};
