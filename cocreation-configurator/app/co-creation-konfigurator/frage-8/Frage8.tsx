"use client";

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

const Frage8: React.FC  = () => {
  const [methods, setmethods] = useState<designmethodstype[]>([]);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [newMethods, setNewMethods] = useState(methods);
  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspageseven");
    console.log(
      "KREIEREN und GESTALTEN",
      desingmethodsarray.filter((item) => item.projectphase === "design")
    );
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspageeight", JSON.stringify(newMethods));
    console.log("NEW", newMethods);
  }, [newMethods]);

  useEffect(() => {
    console.log("FRAGE8", methods);
  }, [methods]);

  useEffect(() => {
    console.log("BEFORE", methods);

    console.log("SELECTED", selectedMethods);

    let updatedmethods = removefunction(methods, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  return (
    <>
 
        <Progressbar props={"63"} />

        <form className="form-question">
          <h1 className="h1_question">
            Sind ihre Teilnehmer mit Technologien vertraut?
          </h1>
          <div className="questions">
            <label
              htmlFor="kein technologisches Verständnis"
              className="radio_container"
            >
              <input
                type="radio"
                id="kein technologisches Verständnis"
                name="frage8"
                onChange={methodhandler}
                value={[
                  "Photojournal",
                  "Wireframe",
                  "Feldtest",
                  "High-Fidelity-Prototypen",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Die Teilnehmer besitzen kein technologisches Verständnis
            </label>
            <label
              htmlFor="minimal technologisches Verständnis"
              className="radio_container"
            >
              <input
                type="radio"
                id="minimal technologisches Verständnis"
                name="frage8"
                onChange={methodhandler}
                value={["Wireframe", "Feldtest", "High-Fidelity-Prototypen"]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Die Teilnehmer besitzen ein minimal technologisches Verständnis
            </label>
            <label
              htmlFor="moderates technologisches Verständnis"
              className="radio_container"
            >
              <input
                type="radio"
                id="moderates technologisches Verständnis"
                name="frage8"
                onChange={methodhandler}
                value={["Wireframe"]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Die Teilnehmer besitzen ein moderates technologisches Verständnis
            </label>
            <label
              htmlFor="hohes technologisches Verständnis"
              className="radio_container"
            >
              <input
                type="radio"
                id="hohes technologisches Verständnis"
                name="frage8"
                onChange={methodhandler}
                value={[]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Die Teilnehmer besitzen ein hohes technologisches Verständnis
            </label>
          </div>
        </form>

        <div className="buttoncontainer">
          <Link href={"/co-creation-konfigurator/frage-7"}>
            <button
              className="question_button left"
 
            >
              <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
              <span className="ml-2">letzte Frage</span>
            </button>
          </Link>
          <Link href={"/co-creation-konfigurator/frage-9"}>
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
 
    </>
  );
};

export default Frage8;
