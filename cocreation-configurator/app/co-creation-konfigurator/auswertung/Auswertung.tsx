"use client";

 
import Methodcontainer from "@/app/components/Methodcontainer";
import { useEffect, useState } from "react";
import { desingmethodsarray,designmethodstype } from "@/app/utils/designmethods";
import "../../css/evaluation.css";



const Auswertung = () => {
  
  const [methods, setmethods] = useState<designmethodstype[]>([]);

  const download = () => {

    const json_file = JSON.stringify(methods,null,2);
    const blob = new Blob([json_file],{type: 'application/json'});
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href= url;
    a.download= 'Methodenauswertung'
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
 
  useEffect(() => {
    const stored = sessionStorage.getItem("methodspagetwelve");
    
    stored && setmethods(JSON.parse(stored));
  }, []);

 

  useEffect(() => {
    console.log("auswertung", methods);

    console.log("understand", methods.filter((item) => item.projectphase === "understand"))
    console.log("define", methods.filter((item) => item.projectphase === "define"))
    console.log("create", methods.filter((item) => item.projectphase === "create"))
    console.log("design", methods.filter((item) => item.projectphase === "design"))
    console.log("evaluation", methods.filter((item) => item.projectphase === "evaluation"))
  }, [methods]);
 




  return (
    <>
  <div>
        <main className="summary">
          <section className="explain">
            <h1 className="h1_evaluation">
              Dies sind die idealen Designmethoden für ihr Co-Creation Projekt
            </h1>
            <p>
              Hier finden sie eine Auflistung der geeigneten Designmethoden,
              welche auf Grundlage ihrer Auswahl für sie ausgewählt wurden.
            </p>
            <p>
              Sie erhalten mit dem Download Button ebenfalls die Möglichkeit
              ihre Auswahl lokal auf ihrem Gerät zu speichern.
            </p>
            <button className="download-button " onClick={download}>Download</button>
          </section>
          <section className="understand">
            <h3 className="h3_categories">Projektphase: Verstehen</h3>
            {
              methods.filter((item) => item.projectphase === "understand").map((item,index) =>

{              return(

                <Methodcontainer key={index} props={item} />
              )}
              
              )
            }
             
 
          </section>
          <section className="define"></section>
          <h3 className="h3_categories">Projektphase: Definieren</h3>
          {
              methods.filter((item) => item.projectphase === "define").map((item,index) =>

{              return(

                <Methodcontainer key={index} props={item} />
              )}
              
              )
            }
 
          <section className="create"></section>
          <h3 className="h3_categories">Projektphase: Kreieren</h3>
          {
              methods.filter((item) => item.projectphase === "create").map((item,index) =>

{              return(

                <Methodcontainer key={index} props={item} />
              )}
              
              )
            }
          <section className="design"></section>
          <h3 className="h3_categories">Projektphase: Gestalten</h3>
          {
              methods.filter((item) => item.projectphase === "design").map((item,index) =>

{              return(

                <Methodcontainer key={index} props={item} />
              )}
              
              )
            }
          <section className="evaluate">
          <h3 className="h3_categories">Projektphase: Evaluieren</h3>
          {
              methods.filter((item) => item.projectphase === "evaluation").map((item, index) =>

{              return(

                <Methodcontainer key={index} props={item} />
              )}
              
              )
            }
          </section>
        </main>
        </div>
    
    </>
  );
};

export default Auswertung;
