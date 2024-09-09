"use client";

import Navbar from "@/app/components/Navbar";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import "../../css/form.css";

const Frage10 = () => {
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Progressbar props={"81"} />

        <form className="form-question">
          <h1 className="h1_question">Wie detailliert soll die Datenauswertung aussehen?</h1>
          <div className="questions">
            <label htmlFor="Qualitative Datenauswertung" className="radio_container">
              <input
                type="radio"
                id="Qualitative Datenauswertung"
                name="frage10"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Qualitative Datenauswertung (auf persönlicher Ebene)
            </label>
            <label htmlFor="Quantitativ" className="radio_container">
              <input
                type="radio"
                id="Quantitativ"
                name="frage10"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Quantitativ (Datenauswertung auf Grundlage von Statistiken)
            </label>
            <label
              htmlFor="Mixed Methods"
              className="radio_container"
            >
              <input
                type="radio"
                id="Mixed Methods"
                name="frage10"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Mixed Methods (Eine Mischung aus Qualitativer und Quantitativer Auswertung)
            </label>
          
            

          </div>
        </form>

      
      </main>
      <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-9")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-11")}
          >
            <span>nächste Frage</span>
            <Image
              src={right_arrow}
              height={10}
              width={10}
              alt="arrow-left"
              className="ml-2"
            />
          </button>
        </div>
    </>
  );
};

export default Frage10;
