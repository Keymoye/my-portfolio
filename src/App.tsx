
const App = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 bg-background text-foreground">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-4 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          I'm <span className="text-primary">Maxwell Kimoi</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground">
          A Front-end <span >||</span> Backend <span className="text-foreground">||</span> Fullstack Developer
        </p>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="/profile.jpg"
          alt="Maxwell Kimoi"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-primary"
        />
      </div>
    </section>
  );
};

export default App;
