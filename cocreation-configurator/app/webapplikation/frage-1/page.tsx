import Frage1 from "./Frage1";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'Co-Creation - Hauptziel des Projektes',
  description: "Der Co-Creation Konfigurator bietet ihnen die Möglichekeit ihr Co-Creation Projekt ohne Vorwissen zu realisieren",
}
const Page = () => {

  return(
    <>
    <Frage1 key={"Frage1"}/>
    </>

  )
}

export default Page;