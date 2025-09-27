import profileImg from "./assets/profile.webp";

const App = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:px-12 gap-10 bg-background text-foreground">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-4 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          I'm Maxwell Kimoi
        </h1>

        <p className="text-lg text-muted mb-6 max-w-lg mx-auto md:mx-0">
          Crafting intuitive interfaces and clean code — turning theory into real, scalable front-end experiences.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground tracking-wide">
          Front-end <span className="text-primary font-semibold"> ||</span> Backend{" "}
          <span className="text-primary font-semibold">||</span> Fullstack Developer
        </p>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src={profileImg}
          alt="Maxwell Kimoi"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-primary transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default App;
