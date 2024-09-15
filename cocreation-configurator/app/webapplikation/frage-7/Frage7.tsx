"use client";
 
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import Link from "next/link";
import { addfunction } from "@/app/utils/helperfunctions";
import { useEffect, useState } from "react";
import { desingmethodsarray,designmethodstype } from "@/app/utils/designmethods";
import "../../css/form.css";

const Frage7: React.FC  = () => {

  
  const [methods, setmethods] = useState<designmethodstype[]>([]);
  const [selectedMethods, setSelectedMethods] = useState<any>([]);
  const [newMethods, setNewMethods] = useState(methods);
 

  const addmethodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspagesix");
    console.log(
      "KREIEREN  ",
      desingmethodsarray.filter((item) => item.name ==="Experten Interviews")
    );
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspageseven", JSON.stringify(newMethods));
    console.log("NEW", newMethods);
  }, [newMethods]);

  useEffect(() => {
    console.log("FRAGE7", methods);
  }, [methods]);

  useEffect(() => {
    console.log("BEFORE", methods);

    console.log("SELECTED", selectedMethods);

 
      console.log(methods)
      let updatedmethods = addfunction(methods,selectedMethods);
      setNewMethods(updatedmethods);
 
   

  }, [selectedMethods]);

  return (
    <>
      <div className="page">
         
        <main className="content">
          <Progressbar props={"54"} />

          <form className="form-question">
            <h1 className="h1_question">
              Welche Hilfsmittel möchten sie einsetzen?
            </h1>
            <div className="questions">
              <label htmlFor="Lego Steine" className="radio_container">
                <input
                  type="radio"
                  id="Lego Steine"
                  name="frage7"
                  onChange={addmethodhandler}
                  value={["Lego Serious Play"]}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Lego Steine
              </label>
              <label htmlFor="Kameras" className="radio_container">
                <input
                  type="radio"
                  id="Kameras"
                  name="frage7"
                  onChange={addmethodhandler}
                  value={["Photojournal","Analogous Settings","Guided Tour","Cognitive Walkthrough"]}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Kameras
              </label>
              <label htmlFor="Notebooks" className="radio_container">
                <input
                  type="radio"
                  id="Notebooks"
                  name="frage7"
                  onChange={addmethodhandler}
                  value={["Experten Interviews"]}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Notebooks
              </label>
            </div>
          </form>
          <div className="buttoncontainer">
            <Link href={"/webapplikation/frage-6"}>
          <button
            className="question_button left"
 
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button></Link>
          <Link href={"/webapplikation/frage-8"}>
          <button
            className="question_button right"
         
          >
            <span>nächste Frage</span>
            <Image
              src={right_arrow}
              height={10}
              width={10}
              alt="arrow-left"
              className="ml-2"
            />
          </button></Link>
        </div>
        </main>
       
        </div>
 
   
   
    </>
  );
};

export default Frage7;
