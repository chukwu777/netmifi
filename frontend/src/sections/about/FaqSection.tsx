import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="padding-x margin-y">
      <h2 className="text-center pb-6 text-3xl font-semibold">
        Frequently Asked <span className="text-red">Questions</span>
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            Does Netmifi Supports Community Building?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Cummunity Building: <strong>NETMIFI</strong> is not just about
            educations and services; It's about community. We are building a
            global network of creators who can connect, collaborate, and share
            their journeys. Our mission is to foster a supportive environment
            that propels creators to new heights.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">
            Does Netmifi Offer Content Production Services?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            asperiores.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">
            Which kind of services does Netmifi offer?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            asperiores.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl">
            How can i enroll in a course on Netmifi?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            asperiores.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl">
            Lists of courses and Ebooks on buy on Netmifi?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            asperiores.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
