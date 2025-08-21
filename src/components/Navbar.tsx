"use client";
import React, { useEffect, useRef } from "react";
import CardNav from "./Reactbit/CardNav/CardNav";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "/about/company" },
        { label: "Careers", ariaLabel: "About Careers", href: "/about/careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "/projects/featured" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/projects/case-studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:hello@company.com" },
        { label: "Twitter", ariaLabel: "Twitter", href: "https://twitter.com/company" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com/company/company" },
      ],
    },
  ];

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (navbarRef.current) {
        if (currentScrollPos > prevScrollPos) {
          // Scrolling down → hide navbar
          navbarRef.current.style.transform = "translateY(-9rem)";
        } else {
          // Scrolling up → show navbar
          navbarRef.current.style.transform = "translateY(0%)";
        }
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-500"
    >
      <CardNav
        logo={"/quzex.png"}
        logoAlt="quzex"
        items={items}
        baseColor="#fff"
        className=""
        menuColor="#fff"
        ease="power3.out"
      />
    </div>
  );
};

export default Navbar;