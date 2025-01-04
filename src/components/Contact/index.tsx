"use client";

import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const { theme } = useTheme();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      if (!recaptchaToken) {
        throw new Error('reCAPTCHA verification failed');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        // Clear form
        setFormData({ name: '', email: '', message: '' });
        // Reset reCAPTCHA
        recaptchaRef.current?.reset();
      } else if (response.status === 429) {
        setMessage({ type: 'error', text: 'Too many requests. Please try again later.' });
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (err) {
      setMessage({ 
        type: 'error', 
        text: err instanceof Error ? err.message : 'Failed to send message. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="relative mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Let&apos;s Discuss Your Project
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Whether you need web development, mobile apps, or a dedicated team, we&apos;re here to help you succeed.
              </p>
              {message.text && (
                <div className={`mb-6 rounded-sm px-4 py-3 ${
                  message.type === 'success' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                    : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {message.text}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        minLength={2}
                        maxLength={100}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project"
                        required
                        minLength={10}
                        maxLength={1000}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                      theme={theme === 'dark' ? 'dark' : 'light'}
                    />
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark disabled:opacity-70"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>

              <div>
                <span className="absolute left-2 top-7">
                  <svg
                    width="57"
                    height="65"
                    viewBox="0 0 57 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
                      fill="url(#paint0_linear_contact)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_contact"
                        x1="-18.3187"
                        y1="55.1044"
                        x2="37.161"
                        y2="15.3509"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          stopColor={theme === "light" ? "#FFCD00" : "#fff"}
                          stopOpacity="0.62"
                        />
                        <stop
                          offset="1"
                          stopColor={theme === "light" ? "#FFCD00" : "#fff"}
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-2 top-[140px]">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
                      fill="url(#paint1_linear_contact)"
                    />
                    <defs>
                      <linearGradient
                        id="paint1_linear_contact"
                        x1="-0.571054"
                        y1="-37.1717"
                        x2="28.7937"
                        y2="26.7564"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          stopColor={theme === "light" ? "#FFCD00" : "#fff"}
                          stopOpacity="0.62"
                        />
                        <stop
                          offset="1"
                          stopColor={theme === "light" ? "#FFCD00" : "#fff"}
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
