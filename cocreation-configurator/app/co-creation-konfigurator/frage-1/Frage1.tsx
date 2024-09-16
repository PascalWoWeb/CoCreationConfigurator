"use client";

import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { removefunction } from "@/app/utils/helperfunctions";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
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
  const [errorState, setErrorState] = useState(true);

  useEffect(() => {
    let updatedmethods = removefunction(desingmethodsarray, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
    setErrorState(false);
  };

  useEffect(() => {
    sessionStorage.setItem("methods", JSON.stringify(newMethods));
  }, [newMethods]);

  const nextquestion = () => {
    errorState
      ? toast.error("Wählen sie eine Option aus")
      : router.push("/co-creation-konfigurator/frage-2");
  };

  return (
    <>
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

          <label htmlFor="Benutzerfreundlichkeit" className="radio_container">
            <input
              type="radio"
              id="Benutzerfreundlichkeit"
              name="frage1"
              value={["Styleguide", "Ja, außerdem ...", "How-Wow-Now Matrix"]}
              onChange={methodhandler}
              className="old_radioinput"
            />
            <div className="custom_radio"></div>
            Erhöhung der Benutzerfreundlichkeit
          </label>
        </div>
      </form>

      <div className="buttoncontainer">
        <Link href={"/co-creation-konfigurator"}>
          <button className="question_button left">
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">Zurück zum</span>
          </button>
        </Link>

        <button className="question_button right" onClick={nextquestion}>
          nächste Frage
          <Image
            src={right_arrow}
            height={10}
            width={10}
            alt="arrow-left"
            className="ml-2"
          />
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Frage1;
