import { Hero, About, Projects, Contact } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero
        name="Shruti Dhameliya"
        title="Frontend Developer | React.js Specialist"
        description="Frontend developer with 3 years of experience building responsive, user-centric web applications. Specialized in React.js, Next.js, and modern JavaScript frameworks. Currently pursuing MCA while delivering production-ready interfaces with performance optimization and clean architecture."
      />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}