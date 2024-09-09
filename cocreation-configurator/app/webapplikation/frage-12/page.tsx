"use client";

import Navbar from "@/app/components/Navbar";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import "../../css/form.css";

const Frage12 = () => {
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Progressbar props={"100"} />

        <form className="form-question">
          <h1 className="h1_question">Nennen sie den Zeitrahmen ihres Projekts</h1>
          <div className="questions">
            <label htmlFor="Bis 3 Monate" className="radio_container">
              <input
                type="radio"
                id="Bis 3 Monate"
                name="frage12"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Bis 3 Monate
            </label>
            <label htmlFor="Bis 6 Monate" className="radio_container">
              <input
                type="radio"
                id="Bis 6 Monate"
                name="frage12"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Bis 6 Monate
            </label>
            <label
              htmlFor="Mehr als 6 Monate"
              className="radio_container"
            >
              <input
                type="radio"
                id="Mehr als 6 Monate"
                name="frage12"
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Mehr als 6 Monate
            </label>
             

            

          </div>
        </form>

      
      </main>
      <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-11")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/auswertung")}
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

export default Frage12;
