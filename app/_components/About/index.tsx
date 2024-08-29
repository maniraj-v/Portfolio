import { fadeInUpSlower } from "@/app/_constants/animations";
import { techStacks } from "@/app/_constants/skills";
import AnimateInView from "@/components/Animation/AnimateInView";
import { Motion } from "@/components/Animation/Motion";
import SkillsDialog from "@/components/ui/SkillsDialog";
import { GiCoffeePot } from "react-icons/gi";

export default function About() {
  const currentYear = new Date().getFullYear();
  const professionalYears = currentYear - 2017;

  return (
    <div id="about">
      <AnimateInView
        as="section"
        initial="initial"
        animate="animate"
        variants={fadeInUpSlower}
      >
        <header className="title-caps mb-8">What i do.</header>
        <p className="text-gray-400 mb-6">
          I`ve been coding professionally for {professionalYears} years now and
          currently working as a <b>Frontend Engineer</b> who focuses on
          building <b>secure</b>, <b>scalable</b> and <b>responsive</b> web
          applications,
          <b> API integrations</b>,{" "}
          <b className="text-cyan-200">nitty-gritty business logics</b> and even
          <b> backend development</b> stuff now, how time flies!
        </p>
        <p className="text-gray-400 mb-6">
          Here are few technologies that are cup of my{" "}
          <b className="text-cyan-200">coffee</b>{" "}
          <span>
            <GiCoffeePot className="text-cyan-200 inline-block" />.
          </span>
        </p>
        <ul className="grid grid-cols-2 gap-3 mb-6">
          {techStacks.map(({ label, icon }) => {
            return (
              <li className="flex gap-2 items-center" key={label}>
                <span className="text-cyan-200 text-2xl">{icon}</span>
                <span className="text-sm">{label}</span>
              </li>
            );
          })}
        </ul>
        <SkillsDialog />
      </AnimateInView>
    </div>
  );
}
