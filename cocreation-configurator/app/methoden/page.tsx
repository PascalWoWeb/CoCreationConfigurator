"use client";
import { desingmethodsarray } from "../utils/designmethods";
import Method from "../components/Method";
import "../css/methodspage.css";
import { useEffect, useState } from "react";

const Page = () => {
  const [bgtoggle, setBgToogle] = useState(false);
  useEffect(() => {
    console.log(desingmethodsarray.map((item) => item.name));
  }, []);

  useEffect(() => {
    bgtoggle === true
      ? document.body.classList.add("overlay")
      : document.body.classList.remove("overlay");
  }, [bgtoggle]);
  return (
    <div className={bgtoggle ?"overlay" : ""}>
    <section className="info">
        <h1 className="h1-font-blue">Alle Methoden auf einem Blick
        </h1>
        <p>Auf dieser Seite sind alle Methoden aufgelistet, welche sie am in der Auswertung unserer Webapplikationen erhalten können. Sie können sich des Weiteren auch hier über verschiedene Designmethoden informieren</p>
    </section>
      <div className="grid-container  ">
        {desingmethodsarray.map((item) => {
          return (
            <Method props={item} key={item.name} setbgtoggle={setBgToogle} />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
