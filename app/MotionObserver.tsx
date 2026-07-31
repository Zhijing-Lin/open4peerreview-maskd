"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const VISUAL_CONTAINER_SELECTOR = [
  "figure",
  ".profile-portrait",
  ".partner-logos",
  ".product-frame",
].join(", ");

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const explicitVisualTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        `main ${VISUAL_CONTAINER_SELECTOR.split(", ").join(", main ")}`,
      ),
    );
    const imageVisualTargets = Array.from(
      document.querySelectorAll<HTMLImageElement>("main img"),
    ).map(
      (image) =>
        image.closest<HTMLElement>(VISUAL_CONTAINER_SELECTOR) ?? image,
    );
    const visualTargets = Array.from(
      new Set([...explicitVisualTargets, ...imageVisualTargets]),
    ).filter((element) => !element.closest(".team-moment"));
    const teamMoment = document.querySelector<HTMLElement>(".team-moment");

    visualTargets.forEach((element) => {
      element.classList.add("motion-visual");
    });

    const highlightTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".title-highlight"),
    );

    const targets = [
      ...visualTargets,
      ...(teamMoment ? [teamMoment] : []),
      ...highlightTargets,
    ];

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    targets.forEach((element) => element.classList.remove("is-visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.16,
      },
    );

    const frame = window.requestAnimationFrame(() => {
      targets.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      visualTargets.forEach((element) =>
        element.classList.remove("motion-visual"),
      );
    };
  }, [pathname]);

  return null;
}
