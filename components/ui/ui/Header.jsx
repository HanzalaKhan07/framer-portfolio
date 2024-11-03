"use state";
import Link from "next/link";
import { Button } from "../button"; // Adjusting the path to point to the components folder
// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-4xl font-semibold">
          Hanz<span className="text-accent">.</span>
        </h1>
      </Link>
      {/* Links (Desktop) */}
      <div className=" hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="/contact">
          <Button className="bg-accent text-black rounded-lg">Hire me</Button>
        </Link>
      </div>

      {/* Nobile Nav */}
      <div className="xl:hidden">
        <MobileNav/>
      </div>
      </div>
    </header>
  );
};

export default Header;
