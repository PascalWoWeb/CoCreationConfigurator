"use client";

import Navbar from "@/app/components/Navbar";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import "../../css/form.css";

const Frage9 = () => {
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Progressbar props={"72"} />

        <form className="form-question">
          <h1 className="h1_question">Wie möchten sie ihr Feedback erhalten? </h1>
          <div className="questions">
            <label htmlFor="einzelnen Teilnehmern" className="radio_container">
              <input
                type="radio"
                id="einzelnen Teilnehmern"
                name="frage9"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Gespräche mit einzelnen Teilnehmern
            </label>
            <label htmlFor="Gruppendiskussionen" className="radio_container">
              <input
                type="radio"
                id="Gruppendiskussionen"
                name="frage9"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Gruppendiskussionen
            </label>
            <label
              htmlFor="Digitalen Hilfsmitteln"
              className="radio_container"
            >
              <input
                type="radio"
                id="Digitalen Hilfsmitteln"
                name="frage9"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Mithilfe von Digitalen Hilfsmitteln
            </label>
            
            

          </div>
        </form>

      
      </main>
      <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-8")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-10")}
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

export default Frage9;
