import Languages from "./Languages";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10 max-w-4xl text-center px-4 md:gap-4 md:px-6 mx-auto">
        <p className="text-3xl md:text-4xl font-bold">Hello World;</p>
        <p className="text-lg md:text-xl py-3 md:py-5">I am Avis Lowha;</p>  
        <p className="text-base md:text-lg">
          I specialize in back-end development and have a strong passion for problem solving. 
        </p>
        <p className="text-base md:text-lg pt-3">
          What separates me from the crowd is the fact that I possess a strong command over multiple languages,
          having built projects in C, JavaScript as well as Python.  
        </p>
        <p className="text-base md:text-lg pt-3">
          My journey began at a young age, and over the years, I have honed my skills 
          in a variety of programming languages and frameworks, making me a versatile 
          developer who can adapt to any project or problem.
        </p>
      </div>
      
      <section id="skills" className="mt-8 md:mt-12 px-4">
        <Languages />
      </section>
      
      <section id="projects" className="mt-8 md:mt-12 px-4">
        <Projects />
      </section>
    </>
  );
};

export default HomePage;
