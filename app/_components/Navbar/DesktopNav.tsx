import { navLinks } from "@/app/_constants/navlinks";

export default function DesktopNav() {
  return (
    <>
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
    </>
  );
}
