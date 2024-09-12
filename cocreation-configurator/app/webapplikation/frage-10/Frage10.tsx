"use client";

import Navbar from "@/app/components/Navbar";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { useRouter } from "next/navigation";
import { removefunction } from "@/app/utils/helperfunctions";
import { useEffect, useState } from "react";
import { desingmethodsarray,designmethodstype } from "@/app/utils/designmethods";
import "../../css/form.css";

const Frage10 = () => {
  const router = useRouter();

  const [methods, setmethods] = useState<designmethodstype[]>([]);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [newMethods, setNewMethods] = useState(methods);
  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspagenine");
    console.log(
      "KREIEREN und GESTALTEN",
      desingmethodsarray.filter((item) => item.projectphase === "design")
    );
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspageten", JSON.stringify(newMethods));
    console.log("NEW", newMethods);
  }, [newMethods]);

  useEffect(() => {
    console.log("FRAGE10", methods);
  }, [methods]);

  useEffect(() => {
    console.log("BEFORE", methods);

    console.log("SELECTED", selectedMethods);

    let updatedmethods = removefunction(methods, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Progressbar props={"81"} />

        <form className="form-question">
          <h1 className="h1_question">Wie detailliert soll die Datenauswertung aussehen?</h1>
          <div className="questions">
            <label htmlFor="Qualitative Datenauswertung" className="radio_container">
              <input
                type="radio"
                id="Qualitative Datenauswertung"
                name="frage10"
                onChange={methodhandler}
                value={["Dotmocracy","Fragebogen","Mindmapping","Feldtest"]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Qualitative Datenauswertung (auf persönlicher Ebene)
            </label>
            <label htmlFor="Quantitativ" className="radio_container">
              <input
                type="radio"
                id="Quantitativ"
                name="frage10"
                onChange={methodhandler}
                value={["Interview","Experten Interviews","Group Interviews","Personas","User Journey Map","Storyboard"]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Quantitativ (Datenauswertung auf Grundlage von Statistiken)
            </label>
            <label
              htmlFor="Mixed Methods"
              className="radio_container"
            >
              <input
                type="radio"
                id="Mixed Methods"
                name="frage10"
                onChange={methodhandler}
                value={[]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Mixed Methods (Eine Mischung aus Qualitativer und Quantitativer Auswertung)
            </label>
          
            

          </div>
        </form>

      
      </main>
      <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-9")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-11")}
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

export default Frage10;
