import styles from "./section.module.css";

type SectionProps = {
  children: React.ReactNode;
  background?: "default" | "beige" | "sage";
  size?: "normal" | "large" | "compact";
};

export default function Section({
  children,
  background = "default",
  size = "normal",
}: SectionProps) {
  return (
    <section
      className={`${styles.section} ${styles[background]} ${styles[size]}`}
    >
      {children}
    </section>
  );
}
