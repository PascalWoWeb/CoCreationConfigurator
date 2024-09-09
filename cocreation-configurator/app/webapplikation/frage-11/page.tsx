"use client";

import Navbar from "@/app/components/Navbar";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import "../../css/form.css";

const Frage11 = () => {
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Progressbar props={"90"} />

        <form className="form-question">
          <h1 className="h1_question">Nennen sie die geographische Verteilung ihrer Zielgruppe?</h1>
          <div className="questions">
            <label htmlFor="Innerhalb einer Stadt" className="radio_container">
              <input
                type="radio"
                id="Innerhalb einer Stadt"
                name="frage11"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Innerhalb einer Stadt
            </label>
            <label htmlFor="Innerhalb eines Landes" className="radio_container">
              <input
                type="radio"
                id="Innerhalb eines Landes"
                name="frage11"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Innerhalb eines Landes
            </label>
            <label
              htmlFor="International Verteilung der Zielgruppe"
              className="radio_container"
            >
              <input
                type="radio"
                id="International Verteilung der Zielgruppe"
                name="frage11"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              International Verteilung der Zielgruppe
            </label>
            <label
              htmlFor="Globale Verteilung der Zielgruppe"
              className="radio_container"
            >
              <input
                type="radio"
                id="Globale Verteilung der Zielgruppe"
                name="frage11"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Globale Verteilung der Zielgruppe
            </label>

            

          </div>
        </form>

      
      </main>
      <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-10")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-12")}
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

export default Frage11;
