"use client";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-[590px] text-center md:mb-12 lg:mb-16">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
            What We Do Best
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            We provide end-to-end digital solutions that help startups and businesses thrive in the modern tech landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-service duration-300 hover:shadow-service-hover dark:bg-dark dark:shadow-service-dark dark:hover:shadow-service-hover-dark sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-black duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Web Development
              </h3>
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 6.66666H5C3.15905 6.66666 1.66667 8.15904 1.66667 9.99999V30C1.66667 31.8409 3.15905 33.3333 5 33.3333H35C36.841 33.3333 38.3333 31.8409 38.3333 30V9.99999C38.3333 8.15904 36.841 6.66666 35 6.66666Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 25L18.3333 20L13.3333 15M21.6667 25H26.6667" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Modern, responsive web applications built with cutting-edge technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-service duration-300 hover:shadow-service-hover dark:bg-dark dark:shadow-service-dark dark:hover:shadow-service-hover-dark sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-black duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Mobile Development
              </h3>
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.6667 3.33334H13.3333C11.4924 3.33334 10 4.82572 10 6.66667V33.3333C10 35.1743 11.4924 36.6667 13.3333 36.6667H26.6667C28.5076 36.6667 30 35.1743 30 33.3333V6.66667C30 4.82572 28.5076 3.33334 26.6667 3.33334Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 30H20.0167" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Native and cross-platform mobile apps that deliver exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-service duration-300 hover:shadow-service-hover dark:bg-dark dark:shadow-service-dark dark:hover:shadow-service-hover-dark sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-black duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Nearshore Development
              </h3>
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7953 29.2048 3.33334 20 3.33334C10.7953 3.33334 3.33334 10.7953 3.33334 20C3.33334 29.2048 10.7953 36.6667 20 36.6667Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.33334 20H36.6667" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 3.33334C24.1821 7.89952 26.6197 13.8098 26.6667 20C26.6197 26.1902 24.1821 32.1005 20 36.6667C15.8179 32.1005 13.3804 26.1902 13.3333 20C13.3804 13.8098 15.8179 7.89952 20 3.33334Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Dedicated development teams that work in your timezone and align with your culture.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-service duration-300 hover:shadow-service-hover dark:bg-dark dark:shadow-service-dark dark:hover:shadow-service-hover-dark sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-black duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Product Discovery
              </h3>
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3333 31.6667C25.6971 31.6667 31.6667 25.6971 31.6667 18.3333C31.6667 10.9695 25.6971 5 18.3333 5C10.9695 5 5 10.9695 5 18.3333C5 25.6971 10.9695 31.6667 18.3333 31.6667Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35 35L27.75 27.75" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Strategic planning and prototyping to validate your product ideas and market fit.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-service duration-300 hover:shadow-service-hover dark:bg-dark dark:shadow-service-dark dark:hover:shadow-service-hover-dark sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-black duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                UI/UX Design
              </h3>
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 25.8333L25.8333 20L31.6667 25.8333M31.6667 20L25.8333 14.1667L20 20" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M31.6667 20H15" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 33.3333H8.33333C7.44928 33.3333 6.60143 32.9821 5.97631 32.357C5.35119 31.7319 5 30.8841 5 30V10C5 9.11595 5.35119 8.2681 5.97631 7.64298C6.60143 7.01786 7.44928 6.66667 8.33333 6.66667H15" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Beautiful and intuitive user interfaces with seamless experiences that delight your users.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-service duration-300 hover:shadow-service-hover dark:bg-dark dark:shadow-service-dark dark:hover:shadow-service-hover-dark sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-black duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Product Management
              </h3>
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.6667 20H25L21.6667 31.6667L15 8.33334L11.6667 20H5" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Expert guidance in product strategy, roadmap planning, and agile development processes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 