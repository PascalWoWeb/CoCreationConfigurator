"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import "../../css/form.css";

const Frage5 = () => {
  const router = useRouter();

  return (
    <>
      <div className="page">
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Progressbar props={"36"} />

        <form className="form-question">
          <h1 className="h1_question">Welche Lösungen erhoffen sie sich durch die Co-Creation Aktivitäten?</h1>
          <div className="questions">
            <label htmlFor="Innovative Ideen zu Produkten" className="radio_container">
              <input
                type="radio"
                id="Innovative Ideen zu Produkten"
                name="frage5"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Innovative Ideen zu Produkten
            </label>
            <label htmlFor="Innovative Ideen zu Service Leistungen" className="radio_container">
              <input
                type="radio"
                id="Innovative Ideen zu Service Leistungen"
                name="frage5"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Innovative Ideen zu Service Leistungen
            </label>
            <label
              htmlFor="Mögliche Prototypen"
              className="radio_container"
            >
              <input
                type="radio"
                id="Mögliche Prototypen"
                name="frage5"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Mögliche Prototypen
            </label>

            <label htmlFor="	Verbesserungsvorschläge" className="radio_container">
              <input
                type="radio"
                id="	Verbesserungsvorschläge"
                name="frage5"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              	Verbesserungsvorschläge
            </label>

          </div>
        </form>
        <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-4")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-6")}
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
      
      </main>

        </div>
        <Footer/>
    </>
  );
};

export default Frage5;
