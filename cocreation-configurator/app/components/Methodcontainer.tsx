 import { designmethodstype, desingmethodsarray } from "../utils/designmethods"
 import "../css/methodcontainer.css"
 import Image from "next/image"
 import triangle from "../../public/images/triangle.svg"
import { useState } from "react"
import { link } from "fs"




const Methodcontainer = (props:any) => {

 const [visible, setIsVisible] = useState(false)

 
 
 const showmethod = () => {
  setIsVisible(!visible)
 }
  return (
    <>
    <div key={props.props.name} className="outer_container">
      <div className="menu_item">
      <Image src={triangle} height={25} width={25} alt="trigangle" className={`triangle ${visible ? "" : "open"}`} onClick={showmethod}/>
      <h2 className="menu_item_text">{props.props.name}</h2>
      
      </div>

    </div>

    <div className={`inner_container ${visible ? "show" : "hide"}`}>
        <div className="info_container">
          <p><p className="title">Materialien:</p>{" "+props.props.materials}</p>
          <p><p className="title">Schwierigkeit:</p>{" "+props.props.difficulty}</p>
          <p><p className="title">Zeitaufwand:</p>{" "+props.props.time}</p>
          {props.props.software !== undefined &&  (<p><p className="title">Software:</p>{" "+props.props.software}</p>)}
        </div>
        <p className="description">
        <p className="title">Beschreibung:</p>{" "+props.props.description}
        </p>
        <p className="instruction_title">Anleitung:</p>
        <ul className="instructions">
          {
            props.props.manual.map((item:string) =>
            {
              return(<li key={item}>{item}</li>)
            }
            )
          }
        </ul>
        <p className="tipp"><p className="title">Tipp:</p>{" " + props.props.medicine}</p>
        
        </div>
    </>
  )
}

export default Methodcontainer
