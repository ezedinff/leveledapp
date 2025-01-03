import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const About = () => {
  return (
    <section id="about" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* First Section */}
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Empowering Digital Innovation"
                paragraph="LeveledApp is a forward-thinking technology company focused on empowering startups and businesses to thrive in the digital age. We provide tailored solutions that enable businesses to grow, innovate, and achieve their goals efficiently."
                mb="44px"
              />

              <div className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Web Development" />
                    <List text="Mobile Development" />
                    <List text="Product Discovery" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="UI/UX Design" />
                    <List text="Nearshore Teams" />
                    <List text="Product Management" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="LeveledApp Team"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="LeveledApp Team"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="-mx-4 flex flex-wrap items-center pt-16">
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/about-image-2.svg"
                alt="LeveledApp Services"
                fill
                className="mx-auto max-w-full drop-shadow-three dark:hidden lg:mr-0"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="LeveledApp Services"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block lg:mr-0"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Product Design & Strategy
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our expert team delivers cutting-edge UI/UX design, product management, and startup-focused solutions that set your business apart.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Engineering Excellence
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  From web and mobile development to real-time solutions, we build robust, scalable applications that drive your business forward.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Advisory Services
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Stay ahead with our expert guidance in cybersecurity strategies and data management practices, ensuring your business remains secure and efficient.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Management & Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our comprehensive DevOps processes, quality assurance testing, and ongoing project management ensure smooth operations and successful delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      <svg
        width="16"
        height="13"
        viewBox="0 0 16 13"
        className="fill-current"
      >
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
      </svg>
    </span>
    {text}
  </p>
); 