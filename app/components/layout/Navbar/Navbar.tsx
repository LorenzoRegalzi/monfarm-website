"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Il Format", href: "/il-format" },
    { label: "A chi è rivolto", href: "/a-chi-e-rivolto" },
    { label: "Collabora", href: "/collabora" },
    { label: "Contatti", href: "/contatti" },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          MonFarm Experience
        </Link>

        {/* Desktop menu */}
        <ul className={styles.menu}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
