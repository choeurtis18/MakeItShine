import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="bg-dark_neutral text-ligther_neutral px-12 py-8 flex justify-between max-sm:flex-col">
        <Link to="/" className="flex-shrink-0 font-bold tracking-wider text-2xl">
          <Logo/>
        </Link>
        <Link to="/privacy" className="text-lg">Mentions légales</Link>
    </footer>
  );
};

export default Footer;