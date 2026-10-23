import { useTheme } from "@/context/ThemeContext";
import { Download } from "lucide-react";

export function Actions({
  contactLabel,
  cv,
  className = "",
}: {
  contactLabel: string;
  cv: { label: string; href: string };
  className?: string;
}) {
  const { setContact } = useTheme();
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <button
        type="button"
        onClick={() => setContact(true)}
        className="btn-primary"
      >
        {contactLabel}
      </button>
      <a href={cv.href} download className="btn-outline">
        <Download className="h-4 w-4" />
        {cv.label}
      </a>
    </div>
  );
}
