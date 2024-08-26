import { socialLinks } from "@/app/_constants/socialLinks";
import { MdDownload, MdEmail } from "react-icons/md";

function Sidebar() {
  return (
    <div className="block lg:fixed lg:max-w-[33%] px-8 lg:px-4 lg:pl-12">
      <p className="mb-8 lg:mb-0">Ohh you found me?. Howdy! I am</p>
      <p className="text-6xl font-bold uppercase leading-none">
        <span className="inline-block text-cyan-300 xl:text-7xl hover:scale-110 transition-all">
          Mani Raj
        </span>
        <br />
        <span className="text-gray-100">Velrajan.</span>
      </p>
      <p className="text-gray-200 text-sm pl-4 mb-4">
        Or you could call me Mani. That works too . . .
      </p>
      <p className="text-xl text-cyan-200 font-bold mb-4">Frontend Engineer</p>
      <p className="text-sm text-gray-400 mb-8 max-w-[550px]">
        Hey! How nice of you to look at my personal site,{" "}
        <span className="text-cyan-200">Thank you!</span>
        <br />I am a software engineer who specializes at frontend, creating
        pixel perfect User Interfaces, recently found myself building backend
        too.
      </p>
      <div className="flex gap-4 items-center mb-8">
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
      </div>
      <ul className="flex gap-4 items-center">
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
      </ul>
    </div>
  );
}
export default Sidebar;
