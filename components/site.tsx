"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    ["Accueil", "/"],
    ["Estimation", "/estimation-immobiliere-tourcoing"],
    ["Vendre à Tourcoing", "/vendre-a-tourcoing"],
    ["Biens recherchés", "/biens-recherches"],
    ["À propos", "/a-propos"],
  ];

  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">
          Immo<span>Sens</span>
        </Link>

        <nav className={open ? "nav-open" : ""}>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>

        <a className="phone-link" href="tel:+33">
          <Phone size={16} />
          Appeler
        </a>

        <button
          className="menu"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  light?: boolean;
}) {
  return (
    <div className={"section-title" + (light ? " is-light" : "")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "secondary";
}) {
  return (
    <Link className={`btn ${variant}`} href={href}>
      {children}
    </Link>
  );
}

type PhotoPlaceholderProps = {
  label?: string;
  className?: string;
};

export function PhotoPlaceholder({
  label = "Photo",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div className={`hero-image flex items-end overflow-hidden ${className}`}>
      <span className="p-6 text-xs uppercase tracking-[.2em] text-black/50">
        {label}
      </span>
    </div>
  );
}

export function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="lift border border-black/10 bg-white/35 p-8">
      <span className="text-xs text-[#9a7754]">{number}</span>

      <h3 className="serif mt-14 text-3xl">{title}</h3>

      <p className="mt-4 leading-7 text-[#756f66]">{description}</p>
    </div>
  );
}

export function Marquee({
  children,
  duration = 28,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  return (
    <div className="marquee">
      <div
        className="marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>© 2026 Alexandre Chassagne · ImmoSens</span>
        <span>Tourcoing · Métropole lilloise</span>
      </div>
    </footer>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}) {
  return <div className={`reveal delay-${delay} ${className}`}>{children}</div>;
}
