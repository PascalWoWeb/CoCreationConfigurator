"use client";
import "../css/method.css";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Method: React.FC = (props:any) => {
  const [openModal, setOpenModal] = useState(false);

  const open_modal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
 
  };
  const close_modal = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

 
  return (
    <>
      <div className="method_outer" onClick={open_modal}>
        <p className="method_title">{props.props.name}</p>
      </div>

      {openModal && (
        <div className="modal_inner">
            <div className="close_icon">
            <p className="title">{props.props.name}</p>
            <Image src={"/images/close_icon.svg"} alt="closeicon" width={20} height={20} onClick={close_modal}/>
            </div>
         
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
      )}
    </>
  );
};

export default Method;
