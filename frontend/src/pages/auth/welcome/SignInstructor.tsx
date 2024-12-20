import CountryFormSelect from "@/components/Form/CountryFormSelect";
import CustomContactField from "@/components/Form/CustomContactField";
import CustomDatePicker from "@/components/Form/CustomDatePicker";
import CustomFormField from "@/components/Form/CustomFormField";
import CustomFormSelect from "@/components/Form/CustomFormSelect";
import CustomMultiSelect from "@/components/Form/CustomMultiSelect";
import CustomRadioGroup from "@/components/Form/CustomRadioGroup";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { instructorFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useEffect, useState } from "react";
// import { useCountries } from "react-countries";
import { useForm } from "react-hook-form";
import {
  FaAsterisk,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { z } from "zod";

const SignInstructor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState<CheckedState>(false);
  // const [isAvailableForMentorship, setIsAvailableForMentorship] = useState("");
  const [country, setCountry] = useState<Country>({});
  const [dialCode, setDialCode] = useState(country?.dialCode || "+");

  const formSchema = instructorFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // const { countries } = useCountries();

  const areasOfExpertise = [
    "article writing",
    "content creation",
    "copywriting",
    "graphics design",
    "digital marketing",
    "digital photography",
    "email marketing",
    "video editing",
    "technical writing",
    "content marketing strategy",
    "sound editing",
    "UI/UX design",
    "videography",
    "voiceover work",
  ];

  const radioGroupData = [
    {
      label: "yes",
      value: "yes",
    },
    {
      label: "no",
      value: "no",
    },
  ];
  // console.log(countries);

  const handleSubmit = (data) => {
    alert();
    console.log(data);
  };

  useEffect(() => {
    form.setValue("country", country);
    console.log(country);
  }, [country, form]);

  return (
    <div className="mt-5 w-full flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-xl sm:text-2xl ">
          Instructors Application Form
        </h2>
        <p className="text-sm sm:text-base">
          Welcome!, we are excited that you’re interested in sharing your
          journey, skills and idea on Netmifi. To help us to know you better and
          ensure you’re a great fit for our community, please complete this
          short application form.
        </p>
      </div>

      <p className="text-xs flex items-center gap-1">
        Optional fields are marked as{" "}
        <FaAsterisk className="text-destructive" />
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => console.log(data))}
          className="w-full flex flex-wrap justify between gap-6 *:flex-grow *:min-w-[45%]"
        >
          <CustomFormField
            name="fullName"
            control={form.control}
            placeholder="Enter your full name"
            label="full name"
          />

          <CustomFormField
            name="email"
            control={form.control}
            placeholder="Enter your email address"
            label="email address"
          />

          <CustomFormField
            name="username"
            control={form.control}
            placeholder="Enter your unique username"
            label="username"
          />

          {/* <CountryFormSelect
            form={form}
            control={form.control}
            countries={countries}
            name={"country"}
            label="country"
            // dialCode={dialCode}
            // setDialCode={setDialCode}
          /> */}

          <CustomContactField
            form={form}
            name="phone"
            control={form.control}
            placeholder="Enter your phone number"
            label="phone number"
            setDialCode={setDialCode}
            setCountry={setCountry}
          />
          <CustomFormField
            name="residentialAddress"
            control={form.control}
            placeholder="Enter your residential address info"
            isOptional
          />

          <div className="flex flex-col gap-1 my-5">
            <h4 className="text-base sm:text-lg">
              Your social medial handles{" "}
              <small className="text-primary/50">
                at least two is required
              </small>
            </h4>
            <div className="flex flex-wrap gap-5 *:flex-grow *:min-w-[40%]">
              <CustomFormField
                name="facebookHandle"
                placeholder="e.g https://facebook.com/your-handle"
                control={form.control}
                inputType="url"
                isNotLabeled
                URLIcon={<FaFacebookF />}
              />
              <CustomFormField
                name="instagramHandle"
                placeholder="e.g https://instagram.com/your-handle"
                control={form.control}
                inputType="url"
                isNotLabeled
                URLIcon={<FaInstagram />}
              />
              <CustomFormField
                name="tiktokHandle"
                placeholder="e.g https://tiktok.com/your-handle"
                control={form.control}
                inputType="url"
                isNotLabeled
                URLIcon={<FaTiktok />}
              />
              <CustomFormField
                name="youtubeHandle"
                placeholder="e.g https://youtube.com/your-handle"
                control={form.control}
                inputType="url"
                isNotLabeled
                URLIcon={<FaYoutube />}
              />

              <CustomFormField
                name="websiteLink"
                placeholder="e.g https://mywebsite.com"
                control={form.control}
                inputType="url"
                isNotLabeled
              />
            </div>
          </div>

          <CustomFormSelect
            name="niche"
            control={form.control}
            placeholder="Select your area of expertise"
            options={areasOfExpertise}
            label="are of expertise"
          />

          <CustomFormField
            name="whyInterest"
            control={form.control}
            placeholder="why are you interest in our platform"
            isOptional
          />

          <div className="flex gap-6 *:flex-grow flex-wrap">
            <CustomRadioGroup
              control={form.control}
              name={"taughtBefore"}
              label="have you taught online before?"
              group={radioGroupData}
            />
            <CustomRadioGroup
              control={form.control}
              name={"mentoredPreviously"}
              label="have you been a mentor previously?"
              group={radioGroupData}
            />

            {/* <CustomRadioGroup
              control={form.control}
              name={"mentorshipAvailability"}
              label="will you be available for mentorship?"
              group={radioGroupData}
              setDetectedValueChange={setIsAvailableForMentorship}
            /> */}
          </div>
          {/* 
          {isAvailableForMentorship === "yes" && (
            <div className="flex flex-col gap-px mt-5 *:flex-grow basis-full">
              <CustomMultiSelect
                form={form}
                control={form.control}
                name={"mentorshipAvailabilityDays"}
                placeholder="Pick days you are available for mentorship"
                options={[
                  "sunday",
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                ]}
              />

              <div className="flex gap-5  items-center mt-4">
                <div className="flex-grow">
                  <CustomFormField
                    control={form.control}
                    name={"from"}
                    label="from:"
                    inputType="time"
                  />
                </div>

                <Separator orientation="vertical" className="w-px" />

                <div className="flex-grow">
                  <CustomFormField
                    control={form.control}
                    name={"to"}
                    label="to:"
                    inputType="time"
                  />
                </div>
              </div>
            </div>
          )} */}

          <div className="w-full mt-3">
            <CustomFormField
              control={form.control}
              name={"about"}
              label={"Something about you"}
              placeholder={
                "Tell us and something about you, your history, your career. Tip* talk in third person"
              }
              type="textarea"
              textareaType="normal"
            />
          </div>

          <div className="flex flex-col gap-3 mt-4 sm:mt-8">
            <div className="flex gap-3 items-center">
              <Checkbox
                id="accept"
                checked={isAccepted}
                onCheckedChange={(checked) => setIsAccepted(checked)}
              />
              <div className="inline-flex gap-1">
                <Label htmlFor="accept" className="text-xs sm:text-sm">
                  Do you accept all our
                </Label>
                <Link
                  to="/t&c"
                  className="text-xs sm:text-sm text-blue underline"
                >
                  Terms and conditions?
                </Link>
              </div>
            </div>

            <div className="flex w-full">
              <Button
                disabled={!isAccepted || isLoading}
                className="sm:ml-auto basis-full sm:basis-[30%]"
                // onClick={form.}
                type="submit"
              >
                {isLoading ? <Loader type="all" /> : "Continue"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInstructor;
