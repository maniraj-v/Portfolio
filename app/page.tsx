import About from "./_components/About";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import Sidebar from "./_components/Sidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="grid grid-cols-1 lg:grid-cols-5">
        <div className="min-h-screen lg:col-span-2 pt-24 relative">
          <Sidebar />
        </div>
        <div className="lg:sidebar-line lg:col-span-3 flex flex-col gap-16 max-w-[550px] p-8 lg:pt-16">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
