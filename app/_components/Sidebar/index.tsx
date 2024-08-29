import { socialLinks } from "@/app/_constants/socialLinks";
import { MdDownload, MdEmail } from "react-icons/md";
import {
  fadeInUpSlower,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from "@/app/_constants/animations";
import { Motion } from "@/components/Animation/Motion";

function Sidebar() {
  return (
    <Motion
      initial="initial"
      animate="animate"
      className="block lg:fixed lg:max-w-[33%] px-6 lg:px-4 lg:pl-12"
      variants={stagger}
    >
      <Motion
        as="p"
        className="mb-4 lg:mb-0 text-sm lg:text-base"
        variants={fadeInUpSlower}
      >
        Ohh you found me?. Howdy! I am
      </Motion>
      <Motion
        as="p"
        className="font-bold uppercase leading-none"
        variants={fadeInUpSlower}
      >
        <Motion
          as="span"
          className="inline-block text-cyan-300 text-5xl xl:text-7xl hover:scale-110 transition-all"
          variants={letterSpace}
        >
          Mani Raj
        </Motion>
        <br />
        <span className="text-gray-100 text-5xl xl:text-6xl">Velrajan.</span>
      </Motion>
      <Motion
        as="p"
        className="text-gray-200 text-sm lg:pl-4 mb-4"
        variants={fadeInUpSlower}
      >
        Or you could call me Mani. That works too . . .
      </Motion>
      <Motion
        as="p"
        className="text-xl text-cyan-200 font-bold mb-4"
        variants={fadeInUpSlower}
      >
        Frontend Engineer
      </Motion>
      <Motion
        as="p"
        className="text-base lg:text-sm text-gray-400 mb-4 lg:mb-0 max-w-[550px]"
        variants={fadeInUpSlower}
      >
        Hey! How nice of you to look at my personal site,{" "}
        <span className="text-cyan-200">Thank you!</span>
      </Motion>
      <Motion
        as="p"
        className="text-base lg:text-sm text-gray-400 mb-8 max-w-[550px]"
        variants={fadeInUpSlower}
      >
        I am a software engineer who specializes at frontend, creating pixel
        perfect User Interfaces, recently found myself building backend too.
      </Motion>
      <Motion className="flex gap-4 items-center mb-8" variants={simpleOpacity}>
        <a
          href="mailto:vsmaniraj1234@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center px-4 py-3 border text-sm hover:no-underline hover:scale-105 hover:bg-slate-900 transition-all rounded-md"
        >
          <span>
            <MdEmail className="text-lg" />
          </span>
          <span>Get in Touch</span>
        </a>
        <a
          href="/resume/Resume_Mani_Raj_React_Frontend_Developer.pdf"
          download={true}
          className="flex gap-2 px-4 py-3 border text-sm hover:no-underline hover:scale-105 hover:bg-slate-900 transition-all rounded-md"
        >
          <span>
            <MdDownload className="text-lg" />
          </span>
          <span>Resume</span>
        </a>
      </Motion>
      <Motion
        as="ul"
        className="flex gap-4 items-center mb-4 lg:mb-0"
        variants={simpleOpacity}
      >
        {socialLinks.map(({ label, icon, url }) => {
          return (
            <li key={label}>
              <a
                target="_blank"
                rel="noreferrer"
                href={url}
                className="text-base flex gap-2 hover:no-underline hover:text-cyan-200"
              >
                <span className="text-xl">{icon}</span>
                <span>{label}</span>
              </a>
            </li>
          );
        })}
      </Motion>
    </Motion>
  );
}
export default Sidebar;
