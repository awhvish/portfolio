import Languages from "./Languages";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10 max-w-5xl text-center md:gap-7 md:px-6 mx-auto">
        <p className="text-4xl font-bold">Hello World;</p>
        <p className="text-xl ">I am Avis Lowha;</p>  
        <p className="text-lg">
          I specialize in back-end development and have a strong passion for C++. 
          I enjoy solving complex problems and building simple compiler based games.
          Although back-end development is my core focus, I also 
          have a love for game development and web applications.
        </p>
        <p className="text-lg py-5">
          Coding is not just a profession for me—it's a passion. I thrive on creating
          projects that challenge me to learn more, and I am always excited to explore
          new technologies and methodologies. Whether it's debugging, optimizing code, 
          or designing new features, I love the process of building something from scratch.
        </p>
        <p className="text-lg">
          My journey began at a young age, and over the years, I’ve honed my skills 
          in a variety of programming languages and frameworks, making me a versatile 
          developer who can adapt to any project or problem.
        </p>
      </div>
      <section id="skills">
        <Languages />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
};

export default HomePage;
