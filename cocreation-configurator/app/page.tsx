import { Metadata } from "next";

import "./css/home.css";

export const metadata: Metadata = {
  title: "Startseite - Co-Creation Planungstool",
  description:
    "Der Co-Creation Konfigurator bietet ihnen die Möglichekeit ihr Co-Creation Projekt ohne Vorwissen zu realisieren",
};

export default function Home() {
  return (
    <>
      <div className="page">
        <main>
          <section>
            <h1 className="h1-font-blue">
              Co-Creation Planungstool für E-Health
            </h1>
            <h2 className="h2-font-blue">Was macht das Tool ?</h2>
            <p className="home-text">
              Bei der Planung von Co-Creation Projekten kann die Auswahl der
              geeigneten Designmethoden sich als schwierig gestalten, da diverse
              Faktoren mit in Betracht gezogen werden wie z.B. die Zielgruppe,
              den Ort, die Einschränkungen der Zielgruppe und vieles mehr.
              Dieser Konfigurator begleitet sie durch eine Reihe von Fragen,
              welche nach Antwort Designmethoden eliminiert. Am Ende erhalten
              sie eine Auswertung der geeignetsten Designmethoden, welche nach
              den Projektphasen Definieren, Verstehen, Kreieren, Gestalten und
              Evaluieren sortiert sind.
            </p>
          </section>
          <section>
            <h2 className="h2-font-blue">An wenn richtet sich das Webtool ?</h2>
            <p className="home-text">
              Dieses Co-Creation Webtool richtet sich an Personen, welche ohne
              Vorwissen ein Co-Creation Projekt im Bereich E-Health planen
              möchten. Durch die automatische Auswahl der Designmethoden, können
              sie maßgeschneiderte Co-Creation Projekte planen, ohne zu viel
              Zeit in die Recherche der geeigneten Methoden zu stecken.Neben der
              Vorgeschlagenen Methoden können sie sich zudem noch über dem
              Reiter Methoden über andere mögliche Methoden informieren.
            </p>
          </section>
          <section className="section_end"> 
            <h2 className="h2-font-blue">Wieso Co-Creation ?</h2>
            <p className="home-text ">
              Co-Creation bietet ihnen die Möglichkeite ihre Interessensgruppen
              mit in den Entwicklungsprozess miteinzubeziehen. Dies bringt
              diverse Vorteile mit sich, da sie den Fokus nicht auf technischen
              Innovationen, sondern auf die Bedürfnisse der Endnutzer setzen.
              Durch den gemeinsamen Entwicklungsprozess erfahren sie mehr über
              die Bedürfnisse ihrerer Interessensgruppen und sorgen für eine
              stärkere Bindung zum Unternehmen. Zudem werden ihre E-Health
              Anwendungen und Produkte nutzerfreundlicher, sie vermeiden
              Entwicklungszeit für unnötige Funktionen und sichern, dass die
              Zielgruppe ihrem Produkt gegenüber ein hohen Engagement aufweisen.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
