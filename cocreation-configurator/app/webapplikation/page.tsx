import Navbar from "../components/Navbar";
import "../css/webtool.css"
import Image from "next/image";

const Webapplikation = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="webtool-section">
          <div className="grid1">
          <h1 className="h1-font-blue">Co-Creation Webtool
          </h1>
          <p className="webtool-text">
          Mit unserem Co-Creation Webtool können sie ihren
          Co-Creation Prozess ohne jegliches Vorwissen planen.
          </p>
          <button className="app-start">Jetzt Starten</button>
          </div>
          <div className="grid2">
            <Image src="/images/deutschland-trikot-wm-600.jpg" width={705} height={400} alt="cocreation-webapp"/>

          </div>
        </section>
      </main>
    </>
  );
};

export default Webapplikation;
