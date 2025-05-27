import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <Link
          href="/assets/Lasse_Hämäläinen_CV_2025.pdf"
          target="_blank"
          alt="my cv"
          rel="noopener noreferrer"
          className="btn btn-lg btn-tertiary mb-16"
        >
          <div className="flex items-center gap-3">
            <span>Download CV.</span>
            <MdFileDownload className="text-xl" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
