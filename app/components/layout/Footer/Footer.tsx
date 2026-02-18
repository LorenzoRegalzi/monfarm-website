import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>MonFarm Experience</h3>
            <p className={styles.tagline}>
              Un format di esperienze immersive nella natura,
              nato per creare connessioni autentiche.
            </p>
          </div>

          <div className={styles.links}>
            <Link href="/il-format">Il Format</Link>
            <Link href="/a-chi-e-rivolto">A chi è rivolto</Link>
            <Link href="/collabora">Collabora</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} MonFarm Experience</p>
        </div>

      </div>
    </footer>
  );
}
