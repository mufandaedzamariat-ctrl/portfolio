export type hero_Data_type = {
  profession: string;
  country: string;
  slogan: string;
  description: string;
  cta: {
    label: string;
    link: string;
  };
  image: string;
};

export type PortfolioSkill = {
  category: string;
  description: string;
  tools: string[];
  image: string;
  links: {
    label: "GitHub" | "LinkedIn";
    href: string;
  }[];
};
