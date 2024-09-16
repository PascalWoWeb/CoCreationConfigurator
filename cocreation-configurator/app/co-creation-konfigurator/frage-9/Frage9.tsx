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

const Frage9: React.FC = () => {
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
    const stored = sessionStorage.getItem("methodspageeight");
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspagenine", JSON.stringify(newMethods));
  }, [newMethods]);

  useEffect(() => {
    let updatedmethods = removefunction(methods, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  const nextquestion = () => {
    errorState
      ? toast.error("Wählen sie eine Option aus")
      : router.push("/co-creation-konfigurator/frage-10");
  };

  return (
    <>
      <main className="content">
        <Progressbar props={"72"} />

        <form className="form-question">
          <h1 className="h1_question">
            Wie möchten sie ihr Feedback erhalten?{" "}
          </h1>
          <div className="questions">
            <label htmlFor="einzelnen Teilnehmern" className="radio_container">
              <input
                type="radio"
                id="einzelnen Teilnehmern"
                name="frage9"
                onChange={methodhandler}
                value={[
                  "Group Interviews",
                  "Brainstorming",
                  "Bodystorming",
                  "Dotmocracy",
                ]}
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
                onChange={methodhandler}
                value={["Interview", "Experten Interviews", "The Five Whys"]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Gruppendiskussionen
            </label>
            <label htmlFor="Digitalen Hilfsmitteln" className="radio_container">
              <input
                type="radio"
                id="Digitalen Hilfsmitteln"
                name="frage9"
                onChange={methodhandler}
                value={[
                  "Peers Observing Peers",
                  "Body Language Methode",
                  "Bodystorming",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Mithilfe von Digitalen Hilfsmitteln
            </label>
          </div>
        </form>
        <div className="buttoncontainer">
          <Link href={"/co-creation-konfigurator/frage-8"}>
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
      </main>
    </>
  );
};

export default Frage9;
