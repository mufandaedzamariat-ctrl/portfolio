import { hero_Data_type, PortfolioSkill } from "@/types/home";
import { address, profession } from "./general";
import { Code, PencilRuler, Search, Sparkles } from "lucide-react";

/* =========================================================
   SHARED PROFILE DATA
========================================================= */

const profile = {
  name: "Maria Tanaka Mufandaedza",
  email: "mufandaedzamariat@gmail.com",
  phone: "+263 79 013 6053",
  whatsapp: "+263790136053",
  location: `${address.city}, ${address.country}`,
  github: "https://github.com/mufandaedzamariat-ctrl",
  linkedin: "https://www.linkedin.com/in/maria-tanaka-mufandaedza-814423409",
};

const frontendTools = ["React", "Vite", "JavaScript", "HTML5", "CSS3"];

const backendTools = ["Python", "Flask", "REST APIs"];

const databaseTools = ["SQL", "SQLite", "SQLAlchemy"];

const computerVisionTools = [
  "PyTorch",
  "scikit-learn",
  "OpenCV",
  "Pillow",
  "NumPy",
  "CNN feature extraction",
  "Cosine similarity",
];

const programmingTools = ["Python", "C++", "JavaScript", "Git", "GitHub"];

const networkingTools = [
  "Microsoft 365",
  "Domain configuration",
  "Networking fundamentals",
];

const virtualStylistTools = [
  "Python",
  "Flask",
  "JavaScript",
  "HTML",
  "CSS",
  "SQLite",
  "SQLAlchemy",
  "PyTorch",
  "OpenCV",
  "Pillow",
  "Cosine similarity",
  "Colour compatibility",
];

const webDevelopmentTools = ["React", "JavaScript", "HTML5", "CSS3"];

const microsoft365Tools = [
  "Domain configuration",
  "Microsoft 365",
  "DNS fundamentals",
];

/* =========================================================
   HERO SECTION
========================================================= */

export const hero_Data: hero_Data_type = {
  profession,
  country: address["country"],
  slogan: "Building practical technology. Engineering a better future.",
  description:
    "Computer Engineering graduate and web developer focused on full-stack development, backend infrastructure, and technical writing. I also have knowledge of networking fundamentals, domain configuration, and Microsoft 365 setup, alongside project experience in databases, image processing, and AI-based recommendations.",
  cta: {
    label: "View my work",
    link: "/projects",
  },
  image: "/home/hero.jpeg",
};

/* =========================================================
   CONTACT SECTION
========================================================= */

export const Contact_Data: any = {
  heading: "Let's work together",
  blurb:
    "Have a website or software project in mind? Get in touch to discuss your requirements.",
  responseTime: "",

  email: profile.email,
  phone: profile.phone,
  whatsapp: profile.whatsapp,
  location: profile.location,

  // Add a valid form endpoint when one is configured.
  endpoint: "",

  socials: [
    {
      label: "GitHub",
      href: profile.github,
    },
    ...(profile.linkedin
      ? [
          {
            label: "LinkedIn",
            href: profile.linkedin,
          },
        ]
      : []),
  ],

  services: [
    { value: "website", label: "Website development" },
    { value: "web-app", label: "Web application development" },
    { value: "ai-ml", label: "AI and machine learning projects" },
    { value: "hosting", label: "Domain and Microsoft 365 setup" },
    { value: "general", label: "General enquiry" },
  ],
};

export const featuredProjects: PortfolioSkill[] = [
  {
    category: "Virtual Stylist – Complete the Look",
    description:
      "Recommends matching outfits using image similarity and colour compatibility.",
    tools: ["Python", "Flask", "JavaScript", "SQLite", "PyTorch", "OpenCV"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Jqb7Q9XhBLij_zXhzJJ3_pgz6LQro6JlKPFdqZTeow&s=10",
    links: [{ label: "LinkedIn", href: profile.linkedin }],
  },
  {
    category: "Luxe Thread Co.",
    description:
      "A full-stack clothing catalog with an admin panel, Flask API, and SQLite inventory.",
    tools: ["React", "Vite", "Python", "Flask", "SQLite"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnZIPphPmobA_Wv0UkFaB_3lgMh9gxBbzT3HuqsuOQg&s=10",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mufandaedzamariat-ctrl/webapp",
      },
    ],
  },
  {
    category: "Movie Database Application",
    description:
      "Organizes movie information in a database-driven C++ application.",
    tools: ["C++", "SQL"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQls3iX17umINckfE02TChRY-qBXX3IgH8_Y26aPsO2XA&s=10",
    links: [{ label: "LinkedIn", href: profile.linkedin }],
  },
  {
    category: "Meeting Tracker",
    description:
      "A company meeting tracker for managing meeting records with authenticated access and SQLite storage.",
    tools: ["JavaScript", "Node.js", "Express", "SQLite"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnZIPphPmobA_Wv0UkFaB_3lgMh9gxBbzT3HuqsuOQg&s=10",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mufandaedzamariat-ctrl/meeting-tracker",
      },
    ],
  },
];

/* =========================================================
   WORK METHODOLOGY
========================================================= */

export const methodology_Data = {
  eyebrow: "My approach",
  title: "How I work",
  signoff: "Understand. Build. Test. Improve.",
  steps: [
    {
      n: "01",
      tag: "understand",
      title: "Understand",
      text: "Identify the problem and clarify the requirements.",
      icon: Search,
    },
    {
      n: "02",
      tag: "plan",
      title: "Plan",
      text: "Break the work into manageable tasks and plan the solution.",
      icon: PencilRuler,
    },
    {
      n: "03",
      tag: "build",
      title: "Build & Test",
      text: "Implement the features, test functionality, and troubleshoot issues.",
      icon: Code,
    },
    {
      n: "04",
      tag: "improve",
      title: "Improve",
      text: "Review the results and refine the solution against the requirements.",
      icon: Sparkles,
    },
  ],
};

/* =========================================================
   RECOMMENDATIONS
========================================================= */

export interface Recommendation {
  name: string;
  profession: string;
  relation: string;
  quote: string;
  date: string;
  image?: string;
}

export const recommendations_Data = {
  eyebrow: "Recommendations",
  title: "Professional Endorsements",
  items: [] as Recommendation[],
};
