"use client";

import Navbar from "@/app/components/Navbar";
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

const Frage12: React.FC = () => {
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
    const stored = sessionStorage.getItem("methodspageeleven");
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspagetwelve", JSON.stringify(newMethods));
  }, [newMethods]);

  useEffect(() => {
    console.log("FRAGE12", methods);
  }, [methods]);

  useEffect(() => {
    let updatedmethods = removefunction(methods, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  const nextquestion = () => {
    errorState
      ? toast.error("Wählen sie eine Option aus")
      : router.push("/co-creation-konfigurator/auswertung");
  };

  return (
    <>
      <Progressbar props={"100"} />

      <form className="form-question">
        <h1 className="h1_question">
          Nennen sie den Zeitrahmen ihres Projekts
        </h1>
        <div className="questions">
          <label htmlFor="Bis 3 Monate" className="radio_container">
            <input
              type="radio"
              id="Bis 3 Monate"
              name="frage12"
              onChange={methodhandler}
              value={["High-Fidelity-Prototypen", "Feldtest", "Usability Test"]}
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
              onChange={methodhandler}
              value={["High-Fidelity-Prototypen", "Feldtest"]}
              className="old_radioinput"
            />
            <div className="custom_radio"></div>
            Bis 6 Monate
          </label>
          <label htmlFor="Mehr als 6 Monate" className="radio_container">
            <input
              type="radio"
              id="Mehr als 6 Monate"
              name="frage12"
              onChange={methodhandler}
              value={[]}
              className="old_radioinput"
            />
            <div className="custom_radio"></div>
            Mehr als 6 Monate
          </label>
        </div>
      </form>
      <div className="buttoncontainer">
        <Link href={"/co-creation-konfigurator/frage-11"}>
          <button className="question_button left">
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
        </Link>
        <button className="question_button right" onClick={nextquestion}>
          <span>zur Auswertung</span>
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

export default Frage12;
