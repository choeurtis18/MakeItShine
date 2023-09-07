import { Link } from "react-router-dom";

export default function NavLinks() {
    return (
      <div className="w-full max-sm:flex-wrap lg:text-xl md:text-lg
                      max-sm:p-4 max-sm:gap-4 sm:space-x-8 max-sm:flex 
                      max-sm:bg-ligther_neutral max-sm:shadow-xl">
        <Link to="/" className="w-full">Accueil</Link>
        <a href="#services" className="w-full">Services</a>
        <a href="#projets" className="w-full">Projects</a>
        {/*<Link to="/projets" className="w-full">Projects</Link>*/}
      </div>
    );
};
