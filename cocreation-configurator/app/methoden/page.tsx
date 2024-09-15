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
    <>
      <div className="grid-container   ">
        {desingmethodsarray.map((item) => {
          return (
            <Method props={item} key={item.name} setbgtoggle={setBgToogle} />
          );
        })}
      </div>
    </>
  );
};

export default Page;
