import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Profile2, Profile3, Profile4, Profile5 } from "@/assets/svg";

const InstructorsSection = () => {
  return (
    <section className="padding-x margin-y">
      <h2 className="text-center pb-6 text-3xl font-semibold">
        <span className="text-red">Meet</span> Our Instructors
      </h2>
      <p className="text-center text-xl pb-5">
        Over 400 industry professionals from content creation hottest companies
        are our instructors.
      </p>
      <div className="flex flex-wrap text-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Card>
            <div>
              <img className="bg-cover" src={Profile5} alt="profile" />
            </div>
            <CardHeader>
              <CardTitle>Nnaemena</CardTitle>
              <CardDescription>Digital Marketer</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Card>
            <div>
              <img className="bg-cover" src={Profile4} alt="profile" />
            </div>
            <CardHeader>
              <CardTitle>Okenwa</CardTitle>
              <CardDescription>Content Producer</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Card>
            <div>
              <img className="bg-cover" src={Profile3} alt="profile" />
            </div>
            <CardHeader>
              <CardTitle className="uppercase">Tina Vee</CardTitle>
              <CardDescription>Content Writer</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Card>
            <div>
              <img className="bg-cover" src={Profile2} alt="profile" />
            </div>
            <CardHeader>
              <CardTitle className="uppercase">Annah Jesse</CardTitle>
              <CardDescription>Video Editor</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
