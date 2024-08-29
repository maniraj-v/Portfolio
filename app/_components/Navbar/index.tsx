import { Motion } from "@/components/Animation/Motion";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import ToggleButton from "./ToggleButton";
import { fadeInUpSlower, menuAnim } from "@/app/_constants/animations";

function Navbar() {
  return (
    <Motion
      as="nav"
      initial="hide"
      animate="show"
      variants={menuAnim}
      className="fixed top-0 w-full py-4 px-6 lg:p-6 backdrop-blur-3xl z-50 bg-[#121212] bg-opacity-70"
    >
      <Logo />
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </Motion>
  );
}

export default Navbar;
