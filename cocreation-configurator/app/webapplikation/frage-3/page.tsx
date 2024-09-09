"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import "../../css/form.css";

const Frage3 = () => {
  const router = useRouter();

  return (
    <>
      <div className="page">
        <header>
          <Navbar />
        </header>
        <main className="content">
          <Progressbar props={"18"} />

          <form className="form-question">
            <h1 className="h1_question">
              Wie sehr soll die Zielgruppe mit eingebunden werden?
            </h1>
            <div className="questions">
              <label htmlFor="Informationsquelle" className="radio_container">
                <input
                  type="radio"
                  id="Informationsquelle"
                  name="frage3"
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Zielgruppe dient als Informationsquelle
              </label>
              <label htmlFor="Beratende Funktion" className="radio_container">
                <input
                  type="radio"
                  id="Beratende Funktion"
                  name="frage3"
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Zielgruppe dient als Beratende Funktion
              </label>

              <label
                htmlFor="Co-Creation Aktivitäten"
                className="radio_container"
              >
                <input
                  type="radio"
                  id="Co-Creation Aktivitäten"
                  name="frage3"
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Zielgruppe wird in Co-Creation Aktivitäten eingebunden
              </label>
            </div>
          </form>
        </main>
        <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-2")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-4")}
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
      </div>
      <Footer />
    </>
  );
};

export default Frage3;
