import Section from "../components/Section/Section";

export default function Contact() {
  return (
    <>
        <Section> 
          <h1>Contatti</h1>
          <h2>Se senti che MonFarm Experience potrebbe essere in sintonia con il tuo spazio, il tuo lavoro o il tuo percorso, scrivimi.</h2>
        </Section>
        <Section> 
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            Ogni collaborazione nasce da una conversazione.<br />
            Raccontami chi sei, cosa fai e cosa ti piacerebbe costruire insieme.<br />
            Ti risponderò personalmente.
          </p>
        </Section>  
        <Section> 
          <form>
            <label>
              Nome e Cognome<br />
              <input type="text" name="name" required />
            </label>
            <br />
            <label>
              Email<br />
              <input type="email" name="email" required />
            </label>
            <br />
            <label>
              Sei una:<br />
              <select name="type">
                <option value="struttura">Struttura</option>
                <option value="operatore">Operatore / Facilitatore</option>
                <option value="altro">Altro</option>
              </select>
            </label>
            <br />
            <label>
              Messaggio<br />
              <textarea name="message" required></textarea>
            </label>
            <br />
            <label>
              <input type="checkbox" name="privacy" required />
              Accetto la privacy policy
            </label>
            <br />
            <button type="submit">Invia</button>
          </form>
        </Section>
        <Section> 
          <p>Preferisci scrivere direttamente?</p>
          <p>
            <a href="mailto:info@monfarmexperience.com">info@monfarmexperience.com</a>
          </p>
        </Section>
        <Section> 
          <p style={{ fontStyle: "italic", textAlign: "center" }}>
            MonFarm Experience è un progetto relazionale: ogni incontro è il punto di partenza.
          </p>
        </Section>
    </>
  );
}