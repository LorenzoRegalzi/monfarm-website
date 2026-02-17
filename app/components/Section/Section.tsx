"use client";
import styles from "./section.module.css";

export default function Section({ children }: { children: React.ReactNode }) {

  return (
    <div className={styles.section}>
      {children}
    </div>
  );
}
