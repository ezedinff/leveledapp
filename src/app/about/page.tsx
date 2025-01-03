import { Metadata } from "next";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "About LeveledApp | Software Development Services",
  description: "LeveledApp is a forward-thinking technology company empowering startups and businesses with web development, mobile apps, offshore teams, and product discovery services.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About LeveledApp"
        description="We level the playing field for startups and businesses by providing top-tier, affordable, and innovative digital solutions that fuel growth and success."
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
