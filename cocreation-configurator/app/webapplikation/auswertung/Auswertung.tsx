"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Methodcontainer from "@/app/components/Methodcontainer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { desingmethodsarray,designmethodstype } from "@/app/utils/designmethods";
import "../../css/evaluation.css";



const Auswertung = () => {
  const router = useRouter();
  const [methods, setmethods] = useState<designmethodstype[]>([]);

 
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspagetwelve");
    
    stored && setmethods(JSON.parse(stored));
  }, []);

 

  useEffect(() => {
    console.log("auswertung", methods);
  }, [methods]);
 




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
            <h3 className="h3_categories">Projektphase: Verstehen</h3>
            <Methodcontainer/>
            <Methodcontainer/>
          </section>
          <section className="define"></section>
          <h3 className="h3_categories">Projektphase: Definieren</h3>
          <Methodcontainer/>
          <Methodcontainer/>
          <section className="create"></section>
          <h3 className="h3_categories">Projektphase: Kreieren</h3>
          <Methodcontainer/>
          <Methodcontainer/>
          <section className="design"></section>
          <h3 className="h3_categories">Projektphase: Gestalten</h3>
          <Methodcontainer/>
          <Methodcontainer/>
          <section className="evaluate">
          <h3 className="h3_categories">Projektphase: Evaluieren</h3>
          <Methodcontainer/>
          <Methodcontainer/>
          </section>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Auswertung;
