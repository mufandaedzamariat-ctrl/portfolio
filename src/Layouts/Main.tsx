// src/Layouts/Main.tsx
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/header";
import ContactForm from "@/components/contactForm";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-app-bg text-app-text">
      <Nav />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-4 py-4 sm:gap-28 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />

      {/* Overlay: stays mounted (hidden when closed) so a half-written
          message survives an accidental click outside. */}
      <ContactForm />
    </div>
  );
}
