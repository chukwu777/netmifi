import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Profile1, Profile2, Profile3, Profile4 } from "@/assets/svg";

const TeamSection = () => {
  return (
    <section className="padding-x margin-y">
      <h2 className="text-center pb-6 text-3xl font-semibold">
        <span className="text-red">Meet</span> Our Team
      </h2>
      <p className="text-center text-xl pb-5">
        Meet our team of innovators who drive our missions and vision forward.
      </p>
      <div className="flex flex-wrap text-center px-7">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Card>
            <div>
              <img className="bg-cover" src={Profile1} alt="profile" />
            </div>
            <CardHeader className="uppercase">
              <CardTitle>Nnaemena</CardTitle>
              <CardDescription>CEO</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Card>
            <div>
              <img className="bg-cover" src={Profile2} alt="profile" />
            </div>
            <CardHeader className="uppercase">
              <CardTitle>Okenwa</CardTitle>
              <CardDescription>Cto</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Card>
            <div>
              <img className="bg-cover" src={Profile3} alt="profile" />
            </div>
            <CardHeader className="uppercase">
              <CardTitle className="uppercase">Emmanuel</CardTitle>
              <CardDescription>Cio</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Card>
            <div>
              <img className="bg-cover" src={Profile4} alt="profile" />
            </div>
            <CardHeader className="uppercase">
              <CardTitle className="uppercase">Bam bam</CardTitle>
              <CardDescription>G.m</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
