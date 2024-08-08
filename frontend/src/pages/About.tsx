import {
  HeroSection,
  IntroSection,
  ServiceSection,
  TeamSection,
  InstructorsSection,
  AchievmentSection,
  FaqSection,
  ContactSection,
} from "@/sections/about";
import Newsletter from "@/components/Newsletter";

const About = ({ className }: PageProps) => {
  return (
    <main className={className}>
      <HeroSection />
      <IntroSection />
      <ServiceSection />
      <section className="padding-x margin-y">
        <h2 className="text-center text-red pb-6 text-3xl font-semibold">
          Our Mission
        </h2>
        <div>
          <p className="leading-7 text-xl text-center md:text-left">
            To empower creators and leaners worldwide by providing an engaging
            e-learning platform that combines social commerce, seamless payment
            solutions, and global accessibility, making education and
            entrepreneurship more inclusive and fun.
          </p>
        </div>
      </section>

      <section className="padding-x margin-y">
        <h2 className="text-center text-red pb-6 text-3xl font-semibold">
          Our Vision
        </h2>
        <div>
          <p className="leading-7 text-xl text-center md:text-left">
            To revolutionize the E-learning landscape by creating a vibrant,
            social, and interactive platform that inspire creativity, fosters
            community, and bridges the gap between learning and earning, making
            it easy for creators to succeed and learners to thrive.
          </p>
        </div>
      </section>

      <TeamSection />
      <InstructorsSection />
      <AchievmentSection />
      <FaqSection />
      <ContactSection />
      <Newsletter />
    </main>
  );
};

export default About;
