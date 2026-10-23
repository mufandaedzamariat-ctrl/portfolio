export const names: string = "Maria Tanaka Mufandaedza";

export const logo: string = names
  .split(" ")
  .map((name) => name[0])
  .join("");

export const profession: string = "Software developer";

export const contact: { platform: string; access: string }[] = [
  {
    platform: "whatsapp",
    access: "+90 548 859 8997",
  },
  {
    platform: "instagram",
    access: "https://www.instagram.com/m.a.r.i.r.o.s.e.h",
  },
  {
    platform: "linkedin",
    access: "",
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
