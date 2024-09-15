"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import Link from "next/link";
import { removefunction } from "@/app/utils/helperfunctions";
import { useEffect, useState } from "react";
import {
  desingmethodsarray,
  designmethodstype,
} from "@/app/utils/designmethods";
import "../../css/form.css";

const Frage4: React.FC  = () => {
  const [methods, setmethods] = useState<designmethodstype[]>([]);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [newMethods, setNewMethods] = useState(methods);
  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspagethree");
    console.log(
      "KREIEREN und GESTALTEN",
      desingmethodsarray.filter((item) => item.projectphase === "design")
    );
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspagefour", JSON.stringify(newMethods));
    console.log("NEW", newMethods);
  }, [newMethods]);

  useEffect(() => {
    console.log("FRAGE4", methods);
  }, [methods]);

  useEffect(() => {
    console.log("BEFORE", methods);

    console.log("SELECTED", selectedMethods);

    let updatedmethods = removefunction(methods, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  return (
    <>
      <div className="page">
        <Progressbar props={"27"} />

        <form className="form-question">
          <h1 className="h1_question">Hat die Zielgruppe Einschränkungen ?</h1>
          <div className="questions">
            <label htmlFor="Keine Einschränkungen" className="radio_container">
              <input
                type="radio"
                id="Keine Einschränkungen"
                name="frage4"
                onChange={methodhandler}
                value={[]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Keine Einschränkungen
            </label>
            <label htmlFor="Spracheinschränkungen" className="radio_container">
              <input
                type="radio"
                id="Spracheinschränkungen"
                name="frage4"
                onChange={methodhandler}
                value={[
                  "The Five Whys",
                  "Interview",
                  "Group Interviews",
                  "Experten Interviews",
                  "Conversion Starters",
                  "How-Wow-Now Matrix",
                  "Ja, außerdem ...",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Spracheinschränkungen
            </label>
            <label
              htmlFor="Mobilitätseinschränkungen"
              className="radio_container"
            >
              <input
                type="radio"
                id="Mobilitätseinschränkungen"
                name="frage4"
                onChange={methodhandler}
                className="old_radioinput"
                value={[
                  "Align on Your Impact Goals",
                  "Body Language Methode",
                  "Kollage",
                  "Draw It",
                  "6-3-5 Methode",
                  "Bodystorming",
                  "Mindmapping",
                  "High-Fidelity-Prototypen",
                ]}
              />
              <div className="custom_radio"></div>
              Mobilitätseinschränkungen
            </label>

            <label htmlFor="Seheinschränkungen" className="radio_container">
              <input
                type="radio"
                id="Seheinschränkungen"
                name="frage4"
                onChange={methodhandler}
                value={[
                  "Photojournal",
                  "Karten Sortieren",
                  "Kollage",
                  "Draw It",
                  "Peers Observing Peers",
                  "6-3-5 Methode",
                  "Bodystorming",
                  "Brainstorming",
                  "Dotmocracy",
                  "How-Wow-Now Matrix",
                  "Ja, außerdem …",
                  "MindMapping",
                  "High-Fidelity-Prototypen",
                  "Styleguide",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Seheinschränkungen
            </label>

            <label htmlFor="Höreinschränkungen" className="radio_container">
              <input
                type="radio"
                id="Höreinschränkungen"
                name="frage4"
                onChange={methodhandler}
                value={[
                  "The Five Whys",
                  "Interview",
                  "Group Interviews",
                  "Experten Interviews",
                  "Conversion Starters",
                  "How-Wow-Now Matrix",
                  "Ja, außerdem ...",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Höreinschränkungen
            </label>

            <label htmlFor="Gedächtnisprobleme" className="radio_container">
              <input
                type="radio"
                id="Gedächtnisprobleme"
                name="frage4"
                onChange={methodhandler}
                value={[
                  "Kollage",
                  "Brainstorming",
                  "Dotmocracy",
                  "How-Wow-Now Matrix",
                  "High-Fidelity-Prototypen",
                  "Styleguide",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Gedächtnisprobleme
            </label>

            <label htmlFor="Konzentrationsprobleme" className="radio_container">
              <input
                type="radio"
                id="Konzentrationsprobleme"
                name="frage4"
                onChange={methodhandler}
                value={[
                  "The Five Whys",
                  "Alle Interview Methoden",
                  "Conversion Starters",
                  "How-Wow-Now Matrix",
                  "Ja, außerdem ...",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Konzentrationsprobleme
            </label>
          </div>
        </form>
        <div className="buttoncontainer">
          <Link href={"/webapplikation/frage-3"}>
            <button className="question_button left">
              <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
              <span className="ml-2">letzte Frage</span>
            </button>
          </Link>
          <Link href={"/webapplikation/frage-5"}>
            <button className="question_button right">
              <span>nächste Frage</span>
              <Image
                src={right_arrow}
                height={10}
                width={10}
                alt="arrow-left"
                className="ml-2"
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Frage4;
