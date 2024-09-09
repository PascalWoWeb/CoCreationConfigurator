"use client";

import Navbar from "@/app/components/Navbar";
import Methodcontainer from "@/app/components/Methodcontainer";
import { useRouter } from "next/navigation";
import { desingmethodsarray } from "@/app/utils/designmethods";
import "../../css/evaluation.css";

const Auswertung = () => {
  const router = useRouter();

  return (
    <>
      <div className="page">
        <header>
          <Navbar />
        </header>
        <main className="summary">
          <section className="explain">
            <h1 className="h1_evaluation">
              Dies sind die idealen Designmethoden für ihr Co-Creation Projekt
            </h1>
            <p>
              Hier finden sie eine Auflistung der geeigneten Designmethoden,
              welche auf Grundlage ihrer Auswahl für sie ausgewählt wurden.
            </p>
            <p>
              Sie erhalten mit dem Download Button ebenfalls die Möglichkeit
              ihre Auswahl lokal auf ihrem Gerät zu speichern.
            </p>
            <button className="download-button " onClick={() => router.push('/webapplikation/frage-1')}>Download</button>
          </section>
          <section className="understand">

            <Methodcontainer/>
          </section>
          <section className="define"></section>
          <section className="create"></section>
          <section className="design"></section>
          <section className="evaluate"></section>
        </main>
      </div>
    </>
  );
};

export default Auswertung;
