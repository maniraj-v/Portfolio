import { navLinks } from "@/app/_constants/navlinks";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-6 backdrop-blur-sm z-10">
      <ul className="flex gap-10 items-center justify-end mr-20">
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
