"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";
import Link from "next/link";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { removefunction } from "@/app/utils/helperfunctions";
import { useEffect, useState } from "react";
import {
  desingmethodsarray,
  designmethodstype,
} from "@/app/utils/designmethods";
import "../../css/form.css";

const Frage5: React.FC  = () => {
  const router = useRouter();
  const [methods, setmethods] = useState<designmethodstype[]>([]);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [newMethods, setNewMethods] = useState(methods);
  const [errorState, setErrorState]= useState(true)
  const methodhandler = (event: any) => {
    setSelectedMethods(event.target.value);
    setErrorState(false)
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspagefour");
    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("methodspagefive", JSON.stringify(newMethods));
  }, [newMethods]);


  useEffect(() => {
    let updatedmethods = removefunction(methods, selectedMethods);
    setNewMethods(updatedmethods);
  }, [selectedMethods]);

  const nextquestion = () => {

    errorState ? toast.error("Wählen sie eine Option aus") : router.push("/co-creation-konfigurator/frage-6") 
  
  }
  

  return (
    <>
 
        <Progressbar props={"36"} />

        <form className="form-question">
          <h1 className="h1_question">
            Welche Lösungen erhoffen sie sich durch die Co-Creation Aktivitäten?
          </h1>
          <div className="questions">
            <label
              htmlFor="Innovative Ideen zu Produkten"
              className="radio_container"
            >
              <input
                type="radio"
                id="Innovative Ideen zu Produkten"
                name="frage5"
                onChange={methodhandler}
                value={["Wireframe", "Storyboard", "Experten Interviews"]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Innovative Ideen zu Produkten
            </label>
            <label
              htmlFor="Innovative Ideen zu Service Leistungen"
              className="radio_container"
            >
              <input
                type="radio"
                id="Innovative Ideen zu Service Leistungen"
                name="frage5"
                onChange={methodhandler}
                value={["Bodystorming", "High-Fidelity-Prototypen"]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Innovative Ideen zu Service Leistungen
            </label>
            <label htmlFor="Mögliche Prototypen" className="radio_container">
              <input
                type="radio"
                id="Mögliche Prototypen"
                name="frage5"
                onChange={methodhandler}
                value={[
                  "The Five Whys",
                  "Interview",
                  "Personas",
                  "High-Fidelity-Prototypen",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Mögliche Prototypen
            </label>

            <label
              htmlFor="	Verbesserungsvorschläge"
              className="radio_container"
            >
              <input
                type="radio"
                id="	Verbesserungsvorschläge"
                name="frage5"
                onChange={methodhandler}
                value={[
                  "Dotmocraxy",
                  "Bodystorming",
                  "Papierprototyp",
                  "6-3-5 Methode",
                ]}
                className="old_radioinput"
              />
              <div className="custom_radio"></div>
              Verbesserungsvorschläge
            </label>
          </div>
        </form>
        <div className="buttoncontainer">
          <Link href={"/co-creation-konfigurator/frage-4"}>
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
            <ToastContainer/>
        </div>
 
    </>
  );
};

export default Frage5;
