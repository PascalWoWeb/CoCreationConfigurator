"use client";
 
import "../css/webtool.css";
import Image from "next/image";
import Link from "next/link";

const Webapplikation = () => {
 
  return (
    <>
     
      <main>
        <section className="webtool-section">
          <div className="grid1">
            <h1 className="h1-font-blue">Co-Creation Webtool</h1>
            <p className="webtool-text">
              Mit unserem Co-Creation Webtool können sie ihren Co-Creation
              Prozess ohne jegliches Vorwissen planen.
            </p>
            <Link href={"/co-creation-konfigurator/frage-1"}>
            <button
              className="app-start"
            >
              Jetzt Starten
            </button></Link>
          </div>
          <div className="grid2">
            <Image
              src="/images/webappmeeting.svg"
              width={705}
              height={400}
              alt="cocreation-webapp"
            />
          </div>
        </section>
      </main>
    
    </>
  );
};

export default Webapplikation;
