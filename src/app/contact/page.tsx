import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact LeveledApp | Software Development Services",
  description: "Get in touch with LeveledApp for web development, mobile app development, nearshore team building, and product discovery services.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to level up your business? Get in touch with our team of experts to discuss your project needs and how we can help you achieve your goals."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
