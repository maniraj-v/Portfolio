import AnimateInView from "@/components/Animation/AnimateInView";
import ProjectList from "./ProjectList";
import { fadeInUpSlower } from "@/app/_constants/animations";

export default function Projects() {
  return (
    <div id="works">
      <AnimateInView
        as="section"
        initial="initial"
        animate="animate"
        variants={fadeInUpSlower}
      >
        <header className="title-caps mb-8">Some of my works.</header>
        <p className="text-gray-400 mb-6">
          Check out some of the works I made at freelancing, company projects
          and even case studies.
        </p>
        <ProjectList />
      </AnimateInView>
    </div>
  );
}
