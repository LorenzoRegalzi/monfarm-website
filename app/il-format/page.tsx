import Section from "../components/layout/Section/Section";
import PageContainer from "../components/layout/PageContainer/PageContainer";
import styles from "./format.module.css";

export default function Format() {
  return (
    <>
      {/* HERO */}
      <Section size="large">
        <PageContainer>
          <div className={styles.hero}>
            <h1>Il Format</h1>
            <h2 className={styles.subtitle}>
              Un modo di progettare esperienze che mette al centro la relazione
              tra luogo, persone e pratiche.
            </h2>
          </div>
        </PageContainer>
      </Section>

      {/* VISIONE */}
      <Section>
        <PageContainer>
          <div className={styles.centeredContent}>
            <h2>Rallentare per tornare all’essenziale.</h2>

            <p>
              MonFarm Experience nasce dal desiderio di creare spazi in cui il
              tempo possa dilatarsi e la presenza tornare al centro.
            </p>

            <p>
              Crediamo nella natura come contesto generativo, nella lentezza
              come valore e nell’incontro come esperienza trasformativa. Ogni
              proposta nasce da una visione chiara: favorire connessioni
              autentiche, lontane dalla logica della performance o del consumo.
            </p>

            <p>
              Non si tratta di organizzare eventi, ma di curare processi.
            </p>
          </div>
        </PageContainer>
      </Section>

      {/* PROCESSO */}
      <Section background="beige">
        <PageContainer>
          <div className={styles.process}>
            <h2>Come si costruisce un’esperienza</h2>

            <ul className={styles.timeline}>
              <li>
                <span className={styles.stepNumber}>01</span>
                <div>
                  <strong>Il concept</strong>
                  <p>
                    Ogni esperienza parte da un’intenzione chiara e da un tema
                    guida.
                  </p>
                </div>
              </li>

              <li>
                <span className={styles.stepNumber}>02</span>
                <div>
                  <strong>Il luogo</strong>
                  <p>
                    La scelta dello spazio non è casuale: deve essere coerente
                    con la visione e favorire immersione e qualità relazionale.
                  </p>
                </div>
              </li>

              <li>
                <span className={styles.stepNumber}>03</span>
                <div>
                  <strong>Gli operatori</strong>
                  <p>
                    Professionisti selezionati per affinità valoriale e
                    capacità di lavorare in piccoli gruppi.
                  </p>
                </div>
              </li>

              <li>
                <span className={styles.stepNumber}>04</span>
                <div>
                  <strong>Il gruppo</strong>
                  <p>
                    Attenzione alla composizione dei partecipanti, per
                    garantire armonia e profondità.
                  </p>
                </div>
              </li>

              <li>
                <span className={styles.stepNumber}>05</span>
                <div>
                  <strong>La cura</strong>
                  <p>
                    Ogni dettaglio viene accompagnato con attenzione: ritmo,
                    spazi, tempi e comunicazione.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </PageContainer>
      </Section>

      {/* RUOLO */}
      <Section>
        <PageContainer>
          <div className={styles.centeredContent}>
            <h2>Il mio ruolo</h2>

            <p>
              Il mio compito è tenere insieme tutti gli elementi
              dell’esperienza. Curo il concept, accompagno la progettazione con
              le strutture, seleziono gli operatori e custodisco la coerenza
              dell’intero percorso.
            </p>

            <p>
              Mi occupo della visione complessiva, affinché ogni esperienza sia
              armonica, autentica e rispettosa dei ritmi naturali.
            </p>
          </div>
        </PageContainer>
      </Section>

      {/* CHIUSURA */}
      <Section size="large">
        <PageContainer>
          <div className={styles.softClosing}>
            <p>
              MonFarm Experience è un invito a progettare insieme spazi di
              qualità, in cui la relazione diventa il cuore dell’esperienza.
            </p>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
