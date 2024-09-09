"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import "../css/header.css";
import "../css/footer.css";

const Footer = () => {
  const [mobileMenuSize, setmobileMenuSize] = useState(
    window.innerWidth >= 768
  );
 

  useEffect(() => {
    const resizemenu = () => {
      setmobileMenuSize(window.innerWidth >= 768);
    };

    window.addEventListener("resize", resizemenu);

    return () => {
      window.removeEventListener("resize", resizemenu);
    };
  }, []);

  return (
    <>
      {mobileMenuSize && (
        <footer className="footer-container">
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
