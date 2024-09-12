"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import { removefunction } from "@/app/utils/helperfunctions";

import { useRouter } from "next/navigation";
import "../../css/form.css";
import { useEffect, useState } from "react";
import { desingmethodsarray,designmethodstype} from "@/app/utils/designmethods";

const Frage2 = () => {
  const router = useRouter();

  const [methods, setmethods] = useState<designmethodstype[]>([]);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [newMethods, setNewMethods] = useState(methods)
  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("methods");
   
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspagetwo", JSON.stringify(newMethods));
    console.log("NEW", newMethods);
  }, [newMethods]);

  useEffect(() => {
    console.log("FRAGE2", methods);
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
        <header>
          <Navbar />
        </header>
        <main className="content">
          <Progressbar props={"9"} />

          <form className="form-question">
            <h1 className="h1_question">
              Wo findet die Zusammenarbeit statt ?
            </h1>
            <div className="questions">
              <label htmlFor=" Vor Ort" className="radio_container">
                <input
                  type="radio"
                  id=" Vor Ort"
                  name="frage2"
                  onChange={methodhandler}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Vor Ort
              </label>
              <label
                htmlFor="Hybrid (vor Ort und Online)"
                className="radio_container"
              >
                <input
                  type="radio"
                  id="Hybrid (vor Ort und Online)"
                  name="frage2"
                  onChange={methodhandler}
                  className="old_radioinput"
                  value={["Bodystorming", "Guided Tour", "Peers Observing Peers"]}
                />
                <div className="custom_radio"></div>
                Hybrid (vor Ort und Online)
              </label>

              <label htmlFor="Online_frage2" className="radio_container">
                <input
                  type="radio"
                  id="Online_frage2"
                  name="frage2"
                  onChange={methodhandler}
                  value={["Bodystorming","Immersion", "Guided Tour", "Peers Observing Peers","Papierprototyp","Body Language Methode"]}
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Online
              </label>
            </div>
          </form>
        </main>

        <div className="buttoncontainer">
          <button
            className="question_button left"
            onClick={() => router.push("/webapplikation/frage-1")}
          >
            <Image src={left_arrow} height={10} width={10} alt="arrow-left" />
            <span className="ml-2">letzte Frage</span>
          </button>
          <button
            className="question_button right"
            onClick={() => router.push("/webapplikation/frage-3")}
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
      </div>
      <Footer />
    </>
  );
};

export default Frage2;
