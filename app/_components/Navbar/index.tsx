import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import ToggleButton from "./ToggleButton";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full py-4 px-6 lg:p-6 backdrop-blur-3xl z-50 bg-[#121212] bg-opacity-70">
      <Logo />
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
