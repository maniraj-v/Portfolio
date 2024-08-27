import { navLinks } from "@/app/_constants/navlinks";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full py-4 px-6 lg:p-6 backdrop-blur-3xl z-10 bg-[#121212] bg-opacity-70">
      <a className="fixed top-0 left-0 hidden lg:block" aria-description="logo" href="#">
        <Image
          src={"/BrandLogo/MR_Logo.svg"}
          width={150}
          height={80}
          alt="logo"
          className="h-full aspect-auto"
        />
      </a>
      <ul className="flex gap-6 sm:gap-10 items-center justify-center lg:justify-end lg:mr-20">
        {navLinks.map(({ href, label }) => {
          return (
            <li key={href}>
              <a
                href={`#${href}`}
                className="text-gray-200 tracking-wider decoration-cyan-200 font-light"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navbar;
