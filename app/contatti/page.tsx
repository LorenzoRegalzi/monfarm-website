import Section from "../components/layout/Section/Section";
import PageContainer from "../components/layout/PageContainer/PageContainer";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <Section size="large">
        <PageContainer>
          <div className={styles.hero}>
            <h1>Contatti</h1>
            <h2 className={styles.subtitle}>
              Se senti che MonFarm Experience potrebbe essere in sintonia con
              il tuo spazio, il tuo lavoro o il tuo percorso, scrivimi.
            </h2>
          </div>
        </PageContainer>
      </Section>

      {/* INTRO */}
      <Section>
        <PageContainer>
          <div className={styles.intro}>
            <p>
              Ogni collaborazione nasce da una conversazione.
            </p>
            <p>
              Raccontami chi sei, cosa fai e cosa ti piacerebbe costruire insieme.
            </p>
            <p>
              Ti risponderò personalmente.
            </p>
          </div>
        </PageContainer>
      </Section>

      {/* FORM */}
      <Section background="beige">
        <PageContainer>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              
              <div className={styles.field}>
                <label htmlFor="name">Nome e Cognome</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="type">Sei una</label>
                <select id="type" name="type">
                  <option value="struttura">Struttura</option>
                  <option value="operatore">Operatore / Facilitatore</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Messaggio</label>
                <textarea id="message" name="message" rows={5} required />
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" id="privacy" name="privacy" required />
                <label htmlFor="privacy">
                  Accetto la privacy policy
                </label>
              </div>

              <button type="submit" className={styles.button}>
                Invia messaggio
              </button>

            </form>
          </div>
        </PageContainer>
      </Section>

      {/* EMAIL DIRETTA */}
      <Section>
        <PageContainer>
          <div className={styles.directContact}>
            <p>Preferisci scrivere direttamente?</p>
            <a href="mailto:info@monfarmexperience.com">
              info@monfarmexperience.com
            </a>
          </div>
        </PageContainer>
      </Section>

      {/* CHIUSURA */}
      <Section size="large">
        <PageContainer>
          <div className={styles.closing}>
            <p>
              MonFarm Experience è un progetto relazionale:
              ogni incontro è il punto di partenza.
            </p>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
