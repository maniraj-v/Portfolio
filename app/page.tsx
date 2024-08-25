import About from "./_components/About";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-12 max-w-[550px] p-8">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
