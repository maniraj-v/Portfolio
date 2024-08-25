import About from "./_components/About";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-16 max-w-[550px] p-8 pt-16">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
