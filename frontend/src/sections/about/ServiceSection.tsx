import { AddToCartAbout } from "@/assets/svg/index.ts";
import { Button } from "@/components/ui/button";

const ServiceSection = () => {
  return (
    <section className="flex flex-col md:flex-row padding-x margin-y max-sm:mb-16">
      <div className="flex-1">
        <img className="bg-cover bg-center" src={AddToCartAbout} />
      </div>
      <div className="flex-1 text-xl">
        <h2 className="text-red text-4xl font-semibold pb-5">Our Services</h2>
        <p className="leading-relaxed">
          Our niche focus on empowering aspiring creators uniquely positions us
          to capture a significant share of this market
        </p>
        <div>
          <ul className="list-disc pl-16 py-7 leading-loose font-semibold">
            <li>E-Learning Platform For Creators</li>
            <li>Social Commerce</li>
            <li>Community Building</li>
            <li>Content Creation Agency</li>
          </ul>
        </div>
        <div className="flex justify-left max-sm:justify-center">
          <Button className="rounded-full w-32">Explore</Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
