import AnimateInView from "@/components/Animation/AnimateInView";
import ExperienceTabs from "./ExperienceTabs";
import { fadeInUpSlower } from "@/app/_constants/animations";

export default function Experience() {
  return (
    <AnimateInView
      as="section"
      id="experience"
      initial="initial"
      animate="animate"
      variants={fadeInUpSlower}
    >
      <header className="title-caps mb-8">Places i’ve worked.</header>
      <p className="text-gray-400 mb-6">
        Since 2017, had a privilege to work with several companies that enables
        me to hone my skills and talents. These companies will always have a
        special place in my heart. Currently I am working with{" "}
        <a href="https://www.nagarro.com/en" target="_blank" rel="noreferrer">
          Nagarro
        </a>
        .
      </p>
      <ExperienceTabs />
    </AnimateInView>
  );
}
