"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Progressbar from "@/app/components/Progressbar";
import Image from "next/image";
import * as left_arrow from "../../../public/images/left_arrow.svg";
import * as right_arrow from "../../../public/images/right_arrow.svg";

import { useRouter } from "next/navigation";
import "../../css/form.css";
import { useEffect, useState } from "react";

const Frage2 = () => {
  const router = useRouter();

  const [methods, setmethods] = useState([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("methods");

    stored && setmethods(JSON.parse(stored));
  }, []);

  useEffect(() => {
    console.log("FRAGE2", methods);
  }, [methods]);

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
                  className="old_radioinput"
                />
                <div className="custom_radio"></div>
                Hybrid (vor Ort und Online)
              </label>

              <label htmlFor="Online_frage2" className="radio_container">
                <input
                  type="radio"
                  id="Online_frage2"
                  name="frage2"
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
