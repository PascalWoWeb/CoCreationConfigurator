"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import "../css/header.css";

const Navbar = () => {

  const minwidth = window.innerWidth >= 768;
  const [mobileMenuSize, setmobileMenuSize] = useState(
    minwidth
  );
  const [openMobile, setOpenMobile] = useState(false);

  const toggleMenu = () => {
    setOpenMobile(!openMobile)
  } 

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
      {mobileMenuSize ? (
        <nav className="header-nav ">
          <ul className="header-ul">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/webapplikation">Web Applikation</Link>
            </li>
            <li>
              <Link href="/methoden">Methoden</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="header-nav ">
          <Image
            src="/images/mobilemenu.svg"
            width={40}
            height={40}
            alt="mobilemenu"
            className="menuimage"
            onClick={toggleMenu}
          />
          {
            openMobile && (
              <ul className="header-ul-mobile">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/webapplikation">Web Applikation</Link>
              </li>
              <li>
                <Link href="/methoden">Methoden</Link>
              </li>
            </ul>
            )
          }
        </nav>
      )}
    </>
  );
};

export default Navbar;
