import { navLinks } from "@/app/_constants/navlinks";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full py-4 px-6 lg:p-6 backdrop-blur-3xl z-10 bg-[#121212] bg-opacity-70">
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
