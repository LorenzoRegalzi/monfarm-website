import Section from "./components/layout/Section/Section";
import PageContainer from "./components/layout/PageContainer/PageContainer";
import styles from "./home.module.css";
import ImageTextBlock from "./components/ui/ImageTextBlock/ImageTextBlock";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section size="large">
        <PageContainer>
          <ImageTextBlock
            imageSrc="/images/home-hero.jpeg"
            imageAlt="Esperienza immersiva nella natura"
          >
            <h1>MonFarm Experience</h1>

            <h2 className={styles.subtitle}>
              Un format di esperienze immersive nella natura, nato per creare
              connessioni autentiche tra luoghi, persone e pratiche consapevoli.
            </h2>

            <p className={styles.micro}>
              MonFarm Experience non vende servizi o pacchetti. È un progetto
              curatoriale che mette in relazione strutture, operatori e
              partecipanti per co-creare esperienze.
            </p>

            <button className={styles.primaryButton}>
              Scopri come collaborare
            </button>
          </ImageTextBlock>
        </PageContainer>
      </Section>

      {/* INTRO */}
      <Section>
        <PageContainer>
          <div className={styles.centeredContent}>
            <h2>Un progetto curatoriale, non un evento.</h2>

            <p>
              MonFarm Experience nasce dal desiderio di rallentare e tornare
              all'essenziale. È un format che unisce natura, presenza e pratiche
              esperienziali, progettato per essere ospitato in luoghi che
              condividono la stessa visione.
            </p>

            <p>
              Ogni esperienza viene pensata come un insieme armonico: il luogo,
              le persone, le pratiche e il tempo si intrecciano per generare uno
              spazio autentico di ascolto e connessione.
            </p>
          </div>
        </PageContainer>
      </Section>

      {/* VALUES */}
      <Section background="beige">
        <PageContainer>
          <div className={styles.values}>
            <h2>Un approccio lento, umano e curato.</h2>

            <ul className={styles.grid}>
              <li>
                <strong>Cura</strong>
                <p>
                  Ogni dettaglio viene pensato con attenzione: dalla scelta del
                  luogo alla composizione del gruppo, fino alla qualità della
                  presenza condivisa.
                </p>
              </li>

              <li>
                <strong>Co-creazione</strong>
                <p>
                  Le esperienze nascono dal dialogo tra struttura, operatori e
                  partecipanti. Non sono format rigidi, ma processi vivi.
                </p>
              </li>

              <li>
                <strong>Piccoli gruppi</strong>
                <p>
                  Crediamo nel valore dell'intimità e della qualità relazionale.
                  Lavoriamo con numeri contenuti per preservare autenticità e
                  profondità.
                </p>
              </li>
            </ul>
          </div>
        </PageContainer>
      </Section>

      {/* TARGET */}
      <Section>
        <PageContainer>
          <div className={styles.values}>
            <h2>A chi si rivolge MonFarm Experience</h2>

            <ul className={styles.grid}>
              <li>
                <strong>Strutture immerse nella natura</strong>
                <p>
                  Agriturismi, tenute, relais e luoghi che desiderano ospitare
                  esperienze curate e coerenti con i propri valori.
                </p>
              </li>

              <li>
                <strong>Operatori e facilitatori</strong>
                <p>
                  Professionisti che accompagnano le persone attraverso pratiche
                  corporee, espressive o di consapevolezza.
                </p>
              </li>

              <li>
                <strong>Persone e gruppi</strong>
                <p>
                  Chi sente il bisogno di fermarsi, respirare e riconnettersi in
                  un contesto autentico.
                </p>
              </li>
            </ul>

            <div className={styles.linkWrapper}>
              <a href="#">Scopri di più →</a>
            </div>
          </div>
        </PageContainer>
      </Section>

      {/* CTA FINALE */}
      <Section background="sage" size="large">
        <PageContainer>
          <div className={styles.centeredContent}>
            <h2>
              Se senti che potrebbe esserci una sintonia, iniziamo a parlarne.
            </h2>

            <p>
              Ogni collaborazione nasce da un incontro. Raccontami il tuo
              spazio, il tuo lavoro o la tua visione.
            </p>

            <button className={styles.primaryButton}>
              Collabora con me
            </button>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
