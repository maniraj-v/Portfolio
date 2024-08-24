import About from "./_components/About";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-12 max-w-[550px] p-8">
        <About />
      </div>
    </main>
  );
}
