import Section from "../components/layout/Section/Section";
import PageContainer from "../components/layout/PageContainer/PageContainer";
import styles from "./collaborate.module.css";
import ImageTextBlock from "../components/ui/ImageTextBlock/ImageTextBlock";

export default function Collaborate() {
  return (
    <>
      {/* HERO */}
      <Section size="large">
        <PageContainer>
          <div className={styles.hero}>
            <h1>Collabora</h1>
            <h2 className={styles.subtitle}>
              Ogni esperienza nasce da una visione condivisa. Se senti che il
              tuo spazio o il tuo lavoro sono in sintonia con MonFarm
              Experience, possiamo iniziare a parlarne.
            </h2>
          </div>
        </PageContainer>
      </Section>

      {/* STRUTTURE */}
      <Section>
        <PageContainer>
         <ImageTextBlock
            title="Collaborazioni con strutture"
            imageSrc="/images/home-hero.jpeg"
            imageAlt="Spazio naturale pronto per un'esperienza"
            >

            <p>
              Cerco luoghi immersi nella natura che desiderino ospitare
              esperienze curate, intime e rispettose dei ritmi naturali.
            </p>

            <p>
              La collaborazione non si basa sull'affitto di uno spazio, ma su
              una progettazione condivisa, in cui il luogo diventa parte
              integrante dell'esperienza.
            </p>

            <div className={styles.twoColumns}>
              <div>
                <h3>Cosa offre MonFarm Experience</h3>
                <ul className={styles.featureList}>
                  <li>Ideazione e cura del format</li>
                  <li>Selezione degli operatori</li>
                  <li>Composizione del gruppo</li>
                  <li>Comunicazione coerente con la visione</li>
                </ul>
              </div>

              <div>
                <h3>Cosa offre la struttura</h3>
                <ul className={styles.featureList}>
                  <li>Spazi adatti a piccoli gruppi</li>
                  <li>Accoglienza e ospitalità</li>
                  <li>Coerenza valoriale con il progetto</li>
                </ul>
              </div>
            </div>
          </ImageTextBlock>
        </PageContainer>
      </Section>

      {/* OPERATORI */}
      <Section background="beige">
        <PageContainer>
          <ImageTextBlock
            title="Collaborazioni con operatori e facilitatori"
            imageSrc="/images/home-hero.jpeg"
            imageAlt="Operatore durante pratica in natura"
            reverse
            >

            <p>
              Cerco professionisti che lavorino con presenza e profondità,
              in piccoli gruppi e con un approccio umano, non performativo.
            </p>

            <p>
              Ogni esperienza nasce dal dialogo: non si tratta di inserire una
              singola pratica in un programma, ma di co-creare un percorso
              armonico.
            </p>

            <h3>Profili ricercati</h3>
            <ul className={styles.featureList}>
              <li>Insegnanti di yoga e pratiche corporee dolci</li>
              <li>Facilitatori di movimento consapevole</li>
              <li>Arti terapeuti espressivi</li>
              <li>Journaling e scrittura riflessiva</li>
              <li>Dialogo guidato e pratiche di ascolto</li>
            </ul>
          </ImageTextBlock>
        </PageContainer>
      </Section>

      {/* APPROCCIO */}
      <Section>
        <PageContainer>
          <div className={styles.centeredContent}>
            <h2>Un approccio basato sulla fiducia</h2>

            <p>
              Ogni collaborazione nasce da un incontro e da una visione
              condivisa.
            </p>

            <p>
              Il processo prevede ascolto, confronto e progettazione congiunta.
              Non esistono format preconfezionati: ogni esperienza è costruita
              nel rispetto del luogo, delle persone e dei tempi.
            </p>
          </div>
        </PageContainer>
      </Section>

      {/* CTA FINALE */}
      <Section size="large">
        <PageContainer>
          <div className={styles.cta}>
            <h2>Raccontami chi sei</h2>
            <p>
              Scrivimi per presentarmi il tuo spazio o il tuo lavoro.
              Il primo passo è una conversazione.
            </p>

            <a href="/contatti" className={styles.button}>
              Vai ai contatti
            </a>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
