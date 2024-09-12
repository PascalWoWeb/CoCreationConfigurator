"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import { removefunction } from "@/app/utils/helperfunctions";
import "../../css/form.css";
import { useEffect, useState } from "react";
import {
  desingmethodsarray,
  designmethodstype,
} from "@/app/utils/designmethods";

const Frage1: React.FC = () => {
  const router = useRouter();
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [newMethods, setNewMethods] = useState(desingmethodsarray);

  useEffect(() => {
    console.log("BEFORE", desingmethodsarray);

    console.log("SELECTED", selectedMethods);

    let updatedmethods = removefunction(desingmethodsarray, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem("methods", JSON.stringify(newMethods));
    console.log("NEW", newMethods);
  }, [newMethods]);

  return (
    <>
      <div className="page">
        <header>
          <Navbar />
        </header>
        <main className="content">
          <Progressbar props={"0"} />

          <form className="form-question">
            <h1 className="h1_question">
              Nennen sie das Hauptziel ihres Projektes ?
            </h1>
            <div className="questions">
              <label htmlFor="innovatives Projekt" className="radio_container">
                <input
                  type="radio"
                  id="innovatives Projekt"
                  name="frage1"
                  value={[]}
                  onChange={methodhandler}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Entwicklung eines innovativen Produkts
              </label>
              <label htmlFor="Dienstleistung" className="radio_container">
                <input
                  type="radio"
                  id="Dienstleistung"
                  name="frage1"
                  value={[
                    "Styleguide",
                    "Bodystorming",
                    "Wireframe",
                    "High-Fidelity-Prototypen",
                    "Heuristische Evaluation",
                  ]}
                  onChange={methodhandler}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Verbesserung einer Dienstleistung
              </label>

              <label htmlFor="Entwicklungsprozess" className="radio_container">
                <input
                  type="radio"
                  id="Entwicklungsprozess"
                  name="frage1"
                  value={["Personas", "Storyboard", "Feldtest"]}
                  onChange={methodhandler}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Erhöhung des Entwicklungsprozess
              </label>

              <label
                htmlFor="Benutzerfreundlichkeit"
                className="radio_container"
              >
                <input
                  type="radio"
                  id="Benutzerfreundlichkeit"
                  name="frage1"
                  value={[
                    "Styleguide",
                    "Ja, außerdem ...",
                    "How-Wow-Now Matrix",
                  ]}
                  onChange={methodhandler}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Erhöhung der Benutzerfreundlichkeit
              </label>
            </div>
          </form>
        </main>
        <div className="buttoncontainer">
          <button className="question_button left">
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-2")}
          >
            nächste Frage
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

export default Frage1;
