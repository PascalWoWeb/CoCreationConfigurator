"use client";

import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import Link from "next/link";
import { removefunction } from "@/app/utils/helperfunctions";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import {
  desingmethodsarray,
  designmethodstype,
} from "@/app/utils/designmethods";
import "../../css/form.css";

const Frage11: React.FC = () => {
  const router = useRouter();
  const [methods, setmethods] = useState<designmethodstype[]>([]);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [newMethods, setNewMethods] = useState(methods);
  const [errorState, setErrorState] = useState(true);
  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
    setErrorState(false);
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspageten");
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspageeleven", JSON.stringify(newMethods));
  }, [newMethods]);

  useEffect(() => {
    let updatedmethods = removefunction(methods, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  const nextquestion = () => {
    errorState
      ? toast.error("Wählen sie eine Option aus")
      : router.push("/co-creation-konfigurator/frage-12");
  };

  return (
    <>
      <Progressbar props={"90"} />

      <form className="form-question">
        <h1 className="h1_question">
          Nennen sie die geographische Verteilung ihrer Zielgruppe?
        </h1>
        <div className="questions">
          <label htmlFor="Innerhalb einer Stadt" className="radio_container">
            <input
              type="radio"
              id="Innerhalb einer Stadt"
              name="frage11"
              onChange={methodhandler}
              value={[]}
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
              onChange={methodhandler}
              value={["Guided Tour", "Immersion", "Peers Observing Peers"]}
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
              onChange={methodhandler}
              value={[
                "Guided Tour",
                "Immersion",
                "Peers Observing Peers",
                "Bodystorming",
              ]}
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
              onChange={methodhandler}
              value={desingmethodsarray
                .filter((item) => item.online === false)
                .map((item) => item.name)}
              className="old_radioinput"
            />
            <div className="custom_radio"></div>
            Globale Verteilung der Zielgruppe
          </label>
        </div>
      </form>

      <div className="buttoncontainer">
        <Link href={"/co-creation-konfigurator/frage-10"}>
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
        <ToastContainer />
      </div>
    </>
  );
};

export default Frage11;
