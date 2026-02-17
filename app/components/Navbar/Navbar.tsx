"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

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
      </nav>
    </header>
  );
}
