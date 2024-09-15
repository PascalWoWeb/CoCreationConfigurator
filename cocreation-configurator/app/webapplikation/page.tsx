"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/webtool.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Webapplikation = () => {
  const router = useRouter();
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
            <button
              className="app-start"
              onClick={() => router.push("/webapplikation/frage-1")}
            >
              Jetzt Starten
            </button>
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
