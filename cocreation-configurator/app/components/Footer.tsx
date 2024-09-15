"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import "../css/header.css";
import "../css/footer.css";

const Footer = () => {
  const minwidth = window.innerWidth >= 768;
  const [mobileMenuSize, setmobileMenuSize] = useState(
    minwidth
  );
 

  useEffect(() => {
    const resizemenu = () => {
      setmobileMenuSize(minwidth);
    };

    window.addEventListener("resize", resizemenu);

    return () => {
      window.removeEventListener("resize", resizemenu);
    };
  }, []);

  return (
    <>
      {mobileMenuSize && (
        <footer className="footer-container  ">
          <ul className="footer-ul">
            <li>
              <Link href="/">Impressum</Link>
            </li>
            <li>
              <Link href="/webapplikation">Datenschutz</Link>
            </li>
 
          </ul>
        </footer>
      )}
    </>
  );
};

export default Footer;
