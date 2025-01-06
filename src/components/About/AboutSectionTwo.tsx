import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <div className="relative z-10 inline-flex items-center justify-center">
                <Image
                  src="/images/about/about-image.svg"
                  alt="LeveledApp Services"
                  width={500}
                  height={480}
                  className="mx-auto max-w-full drop-shadow-three dark:hidden lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="LeveledApp Services"
                  width={500}
                  height={480}
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block lg:mr-0"
                />
              </div>
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

export default AboutSectionTwo;
