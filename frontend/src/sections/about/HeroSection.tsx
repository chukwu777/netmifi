import { AboutUsSvg } from "@/assets/svg/index.ts";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen bg-muted padding-x items-center justify-center">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-red text-6xl font-semibold pb-4">About Us</h1>
        <p className="text-2xl text-primary font-medium">
          We empower creators to discover their potentials.
        </p>
      </div>

      <div className="flex-1">
        <img className="bg-cover" src={AboutUsSvg} />
      </div>
    </section>
  );
};

export default HeroSection;
