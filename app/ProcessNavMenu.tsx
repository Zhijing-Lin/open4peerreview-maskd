"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const processSections = [
  ["01", "Discovery", "/process#discovery"],
  ["02", "Prototyping", "/process#prototyping"],
  ["03", "Core Build", "/process#core-build"],
  ["04", "Expansions", "/process#expansions"],
  ["05", "Pilot Testing", "/process#pilot"],
];

export function ProcessNavMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    cancelClose();
    setOpen(true);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 180);
  };

  useEffect(() => () => cancelClose(), []);

  return (
    <div
      className={`nav-process-menu${open ? " open" : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        aria-current={active ? "page" : undefined}
        className={`nav-process-link${active ? " active" : ""}`}
        href="/process"
        onClick={() => {
          setOpen(false);
          if (window.location.pathname === "/process") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        Process
      </Link>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={open ? "Close Process section menu" : "Open Process section menu"}
        className="nav-process-toggle"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true">⌄</span>
      </button>

      {open ? (
        <div
          aria-label="Process sections"
          className="nav-process-dropdown"
          onMouseEnter={cancelClose}
          role="menu"
        >
          {processSections.map(([number, label, href]) => (
            <Link
              href={href}
              key={href}
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              <small>{number}</small>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
