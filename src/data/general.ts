export const names: string = "Maria Tanaka Mufandaedza";

export const logo: string = names
  .split(" ")
  .map((name) => name[0])
  .join("");

export const profession: string = "Web developer";

export const contact: { platform: string; access: string }[] = [
  {
    platform: "whatsapp",
    access: "+263 79 013 6053",
  },
  {
    platform: "instagram",
    access: "https://www.instagram.com/m.a.r.i.r.o.s.e.h",
  },
  {
    platform: "linkedin",
    access: "https://www.linkedin.com/in/maria-tanaka-mufandaedza-814423409",
  },
  {
    platform: "email",
    access: "mufandaedzamariat@gmail.com",
  },
];

export const address: Record<string, string> = {
  city: "Norton",
  country: "Zimbabwe",
  postalCode: "21890",
};
