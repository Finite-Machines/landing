"use client";

import { useState } from "react";
import { Icon } from "./icon";
import { Logo } from "./logo";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Machines", href: "#machines" },
  { label: "Security", href: "#security" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-link" href="#top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>

        <a className="button button-small desktop-cta" href="#pilot">
          Request a pilot <Icon name="arrow" size={16} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="container">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="button" href="#pilot" onClick={() => setOpen(false)}>Request a pilot</a>
        </div>
      </nav>
    </header>
  );
}
