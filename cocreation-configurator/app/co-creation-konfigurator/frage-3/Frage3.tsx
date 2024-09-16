"use client";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { removefunction } from "@/app/utils/helperfunctions";
import { useEffect, useState } from "react";
import {
  desingmethodsarray,
  designmethodstype,
} from "@/app/utils/designmethods";
import "../../css/form.css";

const Frage3: React.FC = () => {
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
    const stored = sessionStorage.getItem("methodspagetwo");
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspagethree", JSON.stringify(newMethods));
  }, [newMethods]);

  const nextquestion = () => {
    errorState
      ? toast.error("Wählen sie eine Option aus")
      : router.push("/co-creation-konfigurator/frage-4");
  };

  useEffect(() => {
    let updatedmethods = removefunction(methods, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  return (
    <>
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
              onChange={methodhandler}
              value={desingmethodsarray
                .filter(
                  (item) =>
                    item.projectphase === "create" ||
                    item.projectphase === "design"
                )
                .map((item) => item.name)}
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
              onChange={methodhandler}
              value={desingmethodsarray
                .filter((item) => item.projectphase === "design")
                .map((item) => item.name)}
              className="old_radioinput"
            />
            <div className="custom_radio"></div>
            Zielgruppe dient als Beratende Funktion
          </label>

          <label htmlFor="Co-Creation Aktivitäten" className="radio_container">
            <input
              type="radio"
              id="Co-Creation Aktivitäten"
              name="frage3"
              onChange={methodhandler}
              value={[]}
              className="old_radioinput"
            />
            <div className="custom_radio"></div>
            Zielgruppe wird in Co-Creation Aktivitäten eingebunden
          </label>
        </div>
      </form>

      <div className="buttoncontainer">
        <Link href={"/co-creation-konfigurator/frage-2"}>
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

export default Frage3;
