"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/home.css"
export default function Home() {
  return (
    <>
    <div className="page">
      <Navbar />
      <main>
        <section>
          <h1 className="h1-font-blue">Planen sie ihre Co-Creation Projekte</h1>
          <p className="home-text">
            Bei der Planung von Co-Creation Projekten kann die Auswahl der
            geeigneten Designmethoden sich als schwierig gestalten, da diverse
            Faktoren mit in Betracht gezogen werden wie z.B. die Zielgruppe, den
            Ort, die Einschränkungen der Zielgruppe und vieles mehr. Dieser
            Konfigurator begleitet sie durch eine Reihe von Fragen, welche nach
            Antwort Designmethoden eliminiert. Am Ende erhalten sie eine
            Auswertung der geeignetsten Designmethoden, welche nach den
            Projektphasen Definieren, Verstehen, Kreieren, Gestalten und
            Evaluieren sortiert sind.
          </p>
        </section>
      </main>
      </div>
      <Footer/>

    </>
  );
}
