"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import "../../css/form.css";

const Frage7 = () => {
  const router = useRouter();

  return (
    <>
      <div className="page">
        <header>
          <Navbar />
        </header>
        <main className="content">
          <Progressbar props={"54"} />

          <form className="form-question">
            <h1 className="h1_question">
              Welche Hilfsmittel möchten sie einsetzen?
            </h1>
            <div className="questions">
              <label htmlFor="Lego Steine" className="radio_container">
                <input
                  type="radio"
                  id="Lego Steine"
                  name="frage7"
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Lego Steine
              </label>
              <label htmlFor="Kameras" className="radio_container">
                <input
                  type="radio"
                  id="Kameras"
                  name="frage7"
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Kameras
              </label>
              <label htmlFor="Notebooks" className="radio_container">
                <input
                  type="radio"
                  id="Notebooks"
                  name="frage7"
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Notebooks
              </label>
            </div>
          </form>
        </main>
        <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-6")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-8")}
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
        <Footer />
      </div>
   
    </>
  );
};

export default Frage7;
