import { ContactCall } from "@/assets/svg";

const ContactSection = () => {
  return (
    <section className="padding-x flex flex-row margin-y">
      <div className="flex-1">
        <h2 className="pb-6 text-3xl font-semibold">
          <span className="text-red">Contact Us</span> Let's Help You?
        </h2>
        <p className="text-lg">
          Please kindly share your thoughts and challanges, we will love to hep
          you out.
        </p>
      </div>

      <div className="flex-1">
        <img src={ContactCall} alt="contact-img" />
      </div>
    </section>
  );
};

export default ContactSection;
