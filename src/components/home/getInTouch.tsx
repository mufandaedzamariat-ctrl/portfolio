import { Mail } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeader } from "../sectionHeader";

export default function GetInTouch() {
  const { setContact } = useTheme();

  return (
    <section className="flex flex-col items-center mb-4">
      <h2 className="mx-auto mt-2 max-w-2xl text-2xl  md:text-3xl lg:text-4xl">
        Have a project in mind or an idea to explore?
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-app-text-muted">
        Let’s connect and build something meaningful together! Feel free to send
        an email, explore my repositories, or connect on professional networks.
      </p>

      {/* Underlined CTA: opens the contact overlay */}
      <button
        type="button"
        onClick={() => setContact(true)}
        className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-lg font-semibold text-app-heading underline decoration-app-brand decoration-2 underline-offset-8 transition-colors hover:text-app-brand"
      >
        <Mail className="h-5 w-5 text-app-brand transition-transform group-hover:-rotate-6 group-hover:scale-110" />
        Send me a message
      </button>
    </section>
  );
}
