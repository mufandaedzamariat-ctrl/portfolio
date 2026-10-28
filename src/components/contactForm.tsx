// src/components/contactForm.tsx
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  CheckCircle2,
  MapPin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  X,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Contact_Data } from "@/data/home";

type Status = "idle" | "sending" | "sent" | "error";

const emptyForm = {
  name: "",
  email: "",
  service: Contact_Data.services[0].value,
  message: "",
};

const field =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-app-text placeholder:text-app-text-muted/70 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring";
const label = "mb-1.5 block text-xs font-medium text-app-text-muted";

export default function ContactForm() {
  const { contact, setContact } = useTheme();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const nameRef = useRef<HTMLInputElement>(null);

  const close = () => setContact(false);
  const update = (key: keyof typeof emptyForm, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  // Esc closes, page behind is locked (scroll position is untouched, so
  // closing returns the visitor exactly where they were).
  useEffect(() => {
    if (!contact) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setContact(false);
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nameRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [contact, setContact]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const serviceLabel =
      Contact_Data.services.find((s: any) => s.value === form.service)?.label ??
      form.service;

    try {
      if (Contact_Data.endpoint) {
        const res = await fetch(Contact_Data.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...form, service: serviceLabel }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        const subject = encodeURIComponent(
          `[${serviceLabel}] from ${form.name}`,
        );
        const body = encodeURIComponent(
          `${form.message}\n\n— ${form.name} (${form.email})`,
        );
        window.location.href = `mailto:${Contact_Data.email}?subject=${subject}&body=${body}`;
      }
      setForm(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className={`fixed inset-0 z-100 overflow-y-auto bg-background/70 p-4 backdrop-blur-md ${
        contact ? "flex" : "hidden"
      }`}
      // click on the dimmed area (not the card) closes
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="card-base relative m-auto grid w-full max-w-3xl overflow-hidden shadow-soft md:grid-cols-5"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close contact form"
          className="absolute right-3 top-3 z-10 cursor-pointer rounded-full p-2 text-app-text-muted transition-colors hover:bg-secondary hover:text-app-text"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Left: ways to reach her */}
        <aside className="bg-secondary p-6 sm:p-8 md:col-span-2">
          <h2 id="contact-title" className="text-xl font-bold">
            {Contact_Data.heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-app-text-muted">
            {Contact_Data.blurb}
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${Contact_Data.email}`}
                className="flex items-center gap-3 text-app-text transition-colors hover:text-app-brand"
              >
                <Mail className="h-4 w-4 shrink-0 text-app-brand" />
                {Contact_Data.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${Contact_Data.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-app-text transition-colors hover:text-app-brand"
              >
                <Phone className="h-4 w-4 shrink-0 text-app-brand" />
                {Contact_Data.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${Contact_Data.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-app-text transition-colors hover:text-app-brand"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-app-brand" />
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3 text-app-text">
              <MapPin className="h-4 w-4 shrink-0 text-app-brand" />
              {Contact_Data.location}
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {Contact_Data.socials.map((s: any) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="badge-accent transition-colors hover:bg-app-brand-border"
              >
                {s.label}
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs italic text-app-text-muted">
            {Contact_Data.responseTime}
          </p>
        </aside>

        {/* Right: the form */}
        <div className="p-6 sm:p-8 md:col-span-3">
          {status === "sent" ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center gap-3 text-center">
              <CheckCircle2 className="h-10 w-10 text-app-brand" />
              <h3 className="text-lg font-semibold">Thank you!</h3>
              <p className="max-w-xs text-sm text-app-text-muted">
                Your message is on its way. I'll reply to the email you gave me.
              </p>
              <div className="mt-2 flex gap-3">
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => setStatus("idle")}
                >
                  Send another
                </button>
                <button type="button" className="btn-primary" onClick={close}>
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className={label}>
                    Your name
                  </label>
                  <input
                    id="c-name"
                    ref={nameRef}
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Doe"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className={label}>
                    Your email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-service" className={label}>
                  What do you need?
                </label>
                <select
                  id="c-service"
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className={field}
                >
                  {Contact_Data.services.map((s: any) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="c-message" className={label}>
                  Message
                </label>
                <textarea
                  id="c-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell me a little about your project…"
                  className={`${field} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
