"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export function ZoomableScreenshot({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <figure className={`screenshot zoomable-screenshot ${className}`}>
        <div>
          <button
            aria-label={`Enlarge image: ${alt}`}
            className="screenshot-zoom-trigger"
            onClick={() => setIsOpen(true)}
            type="button"
          >
            <img alt={alt} loading="lazy" src={src} />
          </button>
          <span className="screenshot-zoom-hint" aria-hidden="true">
            Click to enlarge ↗
          </span>
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>

      {isOpen && (
        <div
          aria-label={`Enlarged image: ${alt}`}
          aria-modal="true"
          className="image-lightbox"
          onClick={() => setIsOpen(false)}
          role="dialog"
        >
          <button
            aria-label="Close enlarged image"
            autoFocus
            className="image-lightbox-close"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Close ×
          </button>
          <button
            aria-label="Return image to its original size"
            className="image-lightbox-image"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <img alt={alt} src={src} />
          </button>
          <p>Click the image again or press Esc to return.</p>
        </div>
      )}
    </>
  );
}
