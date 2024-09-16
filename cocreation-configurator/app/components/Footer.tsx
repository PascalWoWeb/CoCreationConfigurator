"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import "../css/footer.css";

const Footer = () => {
  const [mobileMenuSize, setMobileMenuSize] = useState(false);  

  useEffect(() => {
    const updateMenuSize = () => {
      setMobileMenuSize(window.innerWidth >= 768);
    };

    updateMenuSize(); // Set initial value
    window.addEventListener("resize", updateMenuSize);

    return () => {
      window.removeEventListener("resize", updateMenuSize);
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
              <Link href="//">Datenschutz</Link>
            </li>
 
          </ul>
        </footer>
      )}
    </>
  );
};

export default Footer;
