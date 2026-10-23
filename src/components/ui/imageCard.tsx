import { Image as ImageIcon } from "lucide-react";

export function Picture({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-app-soft/30 to-app-accent/20 p-4 text-center">
          <ImageIcon className="h-6 w-6 text-app-brand" />
          <span className="max-w-xs text-xs italic text-app-text-muted">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}

export function ImageCard({
  image,
  alt,
  eyebrow,
  title,
  text,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  text: string;
}) {
  return (
    <article className="card-base card-interactive flex flex-col overflow-hidden">
      <Picture
        src={image}
        alt={alt}
        className="h-44 w-full border-b border-app-border"
      />
      <div className="p-6">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h3 className={`${eyebrow ? "mt-2" : ""} text-lg font-bold`}>
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-app-text-muted">
          {text}
        </p>
      </div>
    </article>
  );
}
