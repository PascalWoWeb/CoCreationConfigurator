 import { desingmethodsarray } from "../utils/designmethods"
 import "../css/methodcontainer.css"
 import Image from "next/image"
 import triangle from "../../public/images/triangle.svg"
import { useState } from "react"

const Methodcontainer = () => {

 const [visible, setIsVisible] = useState(false)


 const showmethod = () => {
  setIsVisible(!visible)
 }
  return (
    <>
    <div className="outer_container">
      <div className="menu_item">
      <Image src={triangle} height={25} width={25} alt="trigangle" className={`triangle ${visible ? "" : "open"}`} onClick={showmethod}/>
      <h2 className="menu_item_text">Interview</h2>
      
      </div>

    </div>

    <div className={`inner_container ${visible ? "show" : "hide"}`}>
        <div className="info_container">
          <p><p className="title">Materialien:</p> Stifte, Papier</p>
          <p><p className="title">Schwierigkeit:</p> Moderat</p>
          <p><p className="title">Zeitaufwand:</p> 60-90 Min</p>
        </div>
        <p className="description">
        <p className="title">Beschreibung:</p> Bei dieser Methode werden tiefere Einblicke in die Erfahrungen und Bedürfnisse der befragten Person ermöglicht, wodurch ein tieferes Verständnis zur Person aufgebaut werden kann.
        </p>
        <p className="instruction_title">Anleitung:</p>
        <ul className="instructions">
          <li>Es sollen höchstens drei Teammitglieder im Raum sein, um den Teilnehmer nicht zu überfordern und außerdem soll jedes Mitglied eine Rolle haben (Interviewer, Fotograft und Protokollant)</li>
          <li>Es soll ein Fragenkatalog erstellt werden.</li>
          <li>Beginne mit einfachen Fragen und werden sie daraufhin spezifischer mit Fragen bezüglich des Design Problems.</li>
          <li>Achten sie auf die Körpersprache und dokumentieren sie möglichst genau, was die Person sagt, damit keine Interpretation möglich ist.
          </li>
        </ul>
        </div>
    </>
  )
}

export default Methodcontainer
