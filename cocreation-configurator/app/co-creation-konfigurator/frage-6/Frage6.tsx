"use client";

import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import Link from "next/link";
import { removefunction, addfunction } from "@/app/utils/helperfunctions";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import {
  desingmethodsarray,
  designmethodstype,
} from "@/app/utils/designmethods";
import "../../css/form.css";

const Frage6: React.FC = () => {
  const router = useRouter();
  const [methods, setmethods] = useState<designmethodstype[]>([]);
  const [addmethods, setaddmethods] = useState<boolean>(false);
  const [selectedMethods, setSelectedMethods] = useState<any>([]);
  const [newMethods, setNewMethods] = useState(methods);
  const [errorState, setErrorState] = useState(true);

  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
    setaddmethods(false);
    setErrorState(false);
  };
  const addmethodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
    setaddmethods(true);
    setErrorState(false);
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspagefive");
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspagesix", JSON.stringify(newMethods));
  }, [newMethods]);

  useEffect(() => {
    if (addmethods === true) {
      let updatedmethods = addfunction(methods, selectedMethods);
      setNewMethods(updatedmethods);
    } else {
      let updatedmethods = removefunction(methods, selectedMethods);
      setNewMethods(updatedmethods);
    }
  }, [selectedMethods]);

  const nextquestion = () => {
    errorState
      ? toast.error("Wählen sie eine Option aus")
      : router.push("/co-creation-konfigurator/frage-7");
  };

  return (
    <>
      <main className="content ">
        <Progressbar props={"45"} />

        <form className="form-question  ">
          <h1 className="h1_question">
            Welche Personengruppen wollen sie einbinden?
          </h1>
          <div className="questions">
            <label htmlFor="Potentielle Kunden" className="radio_container">
              <input
                type="radio"
                id="Potentielle Kunden"
                name="frage6"
                onChange={methodhandler}
                value={[
                  "Immersion",
                  "Experten Interviews",
                  "Guided Tour",
                  "Peers Observing Peers",
                  "Cognitive Walkthrough",
                  "Heuristische Evaluation",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Potentielle Kunden
            </label>
            <label htmlFor="Endbenutzer" className="radio_container">
              <input
                type="radio"
                id="Endbenutzer"
                name="frage6"
                onChange={methodhandler}
                value={[
                  "Experten Interviews",
                  "Guided Tour",
                  "Peers Observing Peers",
                  "Heuristische Evaluation",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Endbenutzer
            </label>
            <label htmlFor="Mitarbeiter" className="radio_container">
              <input
                type="radio"
                id="Mitarbeiter"
                name="frage6"
                onChange={methodhandler}
                value={[
                  "Immersion",
                  "Guided Tour",
                  "Peers Observing Peers",
                  "Cognitive Walkthrough",
                  "Photojournal",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Mitarbeiter
            </label>
            <label htmlFor="staatliche Einrichtung" className="radio_container">
              <input
                type="radio"
                id="staatliche Einrichtung"
                name="frage6"
                onChange={methodhandler}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Personen einer staatlichen Einrichtung
            </label>

            <label htmlFor="Schüler und Studenten" className="radio_container">
              <input
                type="radio"
                id="Schüler und Studenten"
                name="frage6"
                onChange={methodhandler}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Schüler und Studenten
            </label>

            <label
              htmlFor="gesundheitliche Einrichtung"
              className="radio_container"
            >
              <input
                type="radio"
                id="gesundheitliche Einrichtung"
                name="frage6"
                onChange={methodhandler}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Patienten innerhalb einer gesundheitlichen Einrichtung
            </label>
            <label htmlFor=" Usability Experten" className="radio_container">
              <input
                type="radio"
                id=" Usability Experten"
                name="frage6"
                onChange={methodhandler}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Usability Experten
            </label>
            <label htmlFor="Ärzte" className="radio_container">
              <input
                type="radio"
                id="Ärzte"
                name="frage6"
                value={["Experten Interviews"]}
                onChange={addmethodhandler}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Ärzte
            </label>
          </div>
        </form>
        <div className="buttoncontainer  ">
          <Link href={"/co-creation-konfigurator/frage-5"}>
            <button className="question_button left">
              <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
              <span className="ml-2">letzte Frage</span>
            </button>
          </Link>
          <button className="question_button right" onClick={nextquestion}>
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
        <ToastContainer />
      </main>
    </>
  );
};

export default Frage6;
