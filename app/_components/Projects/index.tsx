import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section id="works">
      <header className="title-caps mb-8">Some of my works.</header>
      <p className="text-gray-400 mb-6">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </p>
      <ProjectList />
    </section>
  );
}
